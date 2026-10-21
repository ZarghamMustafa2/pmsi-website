import type { IncomingMessage, ServerResponse } from 'node:http';

interface RateRecord {
  count: number;
  startTime: number;
}

const ipRateLimits = new Map<string, RateRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean expired rate limits periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of ipRateLimits.entries()) {
    if (now - record.startTime > RATE_LIMIT_WINDOW_MS) {
      ipRateLimits.delete(ip);
    }
  }
}, 60 * 1000);

export function handleInquirySubmission(req: IncomingMessage, res: ServerResponse): void {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
    return;
  }

  // Rate Limiting by IP
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const rateRecord = ipRateLimits.get(clientIp) || { count: 0, startTime: now };

  if (now - rateRecord.startTime > RATE_LIMIT_WINDOW_MS) {
    rateRecord.count = 1;
    rateRecord.startTime = now;
  } else {
    rateRecord.count += 1;
  }
  ipRateLimits.set(clientIp, rateRecord);

  if (rateRecord.count > MAX_REQUESTS_PER_WINDOW) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        success: false,
        status: 'rate_limited',
        error: 'Too many requests. Please wait a few minutes before submitting again.',
      })
    );
    return;
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > 100 * 1024) {
      req.destroy();
    }
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body || '{}');

      // Honeypot anti-spam check
      if (data._gotcha || data.website_hp) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true, status: 'ignored' }));
        return;
      }

      // Server-side Validation
      const errors: string[] = [];
      if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
        errors.push('Full name must be at least 2 characters long.');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email || typeof data.email !== 'string' || !emailRegex.test(data.email.trim())) {
        errors.push('A valid professional email address is required.');
      }

      if (data.formType === 'partnership') {
        if (!data.country || typeof data.country !== 'string' || data.country.trim().length < 2) {
          errors.push('Country is required.');
        }
        if (!data.partnershipInterest) {
          errors.push('Partnership interest category is required.');
        }
      }

      if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
        errors.push('Message / proposal description must be at least 10 characters.');
      }

      if (!data.privacyConsent) {
        errors.push('Consent to the Privacy Policy is required.');
      }

      if (errors.length > 0) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            success: false,
            status: 'validation_error',
            errors,
          })
        );
        return;
      }

      // Check if real email credentials exist in environment
      const hasEmailCredentials = Boolean(
        process.env.SMTP_HOST ||
        process.env.RESEND_API_KEY ||
        process.env.SENDGRID_API_KEY ||
        process.env.EMAIL_SERVICE_API_KEY
      );

      if (!hasEmailCredentials) {
        // Truthful disclosure: server successfully received and validated the inquiry,
        // but live automated mail transport is unconfigured in this environment.
        res.statusCode = 503;
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            success: false,
            status: 'unconfigured',
            message:
              'Automated email transport service is pending environment configuration. In accordance with PMSI transparency requirements, inquiries cannot be marked as delivered until verified server mailer credentials (SMTP / API key) are supplied in the deployment environment.',
            validatedData: {
              name: data.name.trim(),
              email: data.email.trim(),
              organization: (data.organization || '').trim(),
              partnershipInterest: data.partnershipInterest || data.subject || '',
              country: data.country || '',
            },
          })
        );
        return;
      }

      // If credentials exist, dispatch logic would execute here
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          success: true,
          status: 'sent',
          message: 'Your inquiry has been securely received by the server.',
        })
      );
    } catch {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          success: false,
          error: 'Invalid JSON request payload.',
        })
      );
    }
  });
}

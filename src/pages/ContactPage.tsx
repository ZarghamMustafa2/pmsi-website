import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  Mail,
  Send,
  ShieldCheck,
  AlertCircle,
  Copy,
  Check,
  Lock,
  Globe2,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PMSI_CONTACT } from '../data/contactData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    country: '',
    email: '',
    subject: '',
    message: '',
    privacyConsent: false,
    _gotcha: '', // Honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState<
    'idle' | 'sent' | 'unconfigured' | 'error' | 'rate_limited'
  >('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors([]);
    setServerStatus('idle');

    if (!formData.privacyConsent) {
      setValidationErrors(['You must consent to the Privacy Policy to send a message.']);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          name: formData.name,
          organization: formData.organization,
          country: formData.country,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          privacyConsent: formData.privacyConsent,
          _gotcha: formData._gotcha,
        }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        setServerStatus('unconfigured');
        setServerMessage(
          'Automated email transport service is pending serverless configuration. In adherence to PMSI truthfulness standards, messages are not falsely reported as sent. Please contact us directly via email or WhatsApp.'
        );
        return;
      }

      const result = await response.json().catch(() => ({}));

      if (response.status === 200 && result.status === 'sent') {
        setServerStatus('sent');
        setServerMessage(result.message || 'Your message has been securely received by the server.');
      } else if (response.status === 503 || result.status === 'unconfigured') {
        setServerStatus('unconfigured');
        setServerMessage(
          result.message ||
            'Automated email transport service is pending environment configuration. In adherence to PMSI truthfulness standards, messages are not falsely reported as sent.'
        );
      } else if (response.status === 429 || result.status === 'rate_limited') {
        setServerStatus('rate_limited');
        setServerMessage(result.error || 'Submission rate limit reached. Please wait a few minutes.');
      } else if (response.status === 400 && result.errors) {
        setServerStatus('error');
        setValidationErrors(result.errors);
      } else {
        setServerStatus('error');
        setServerMessage(result.error || 'An unexpected error occurred while communicating with the server.');
      }
    } catch {
      setServerStatus('unconfigured');
      setServerMessage(
        'The server-side contact dispatch endpoint is currently unconfigured or unreachable. In strict compliance with PMSI truthfulness guidelines, we do not present a false confirmation.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyContactSummary = () => {
    const text = `PMSI Contact Message Summary:
Name: ${formData.name}
Organization: ${formData.organization || 'N/A'}
Country: ${formData.country || 'N/A'}
Email: ${formData.email}
Subject: ${formData.subject}
Message:
${formData.message}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Contact Us — Connect With Pakistan Minorities Support Initiative"
        description="Connect with the Pakistan Minorities Support Initiative (PMSI). Inquiries for international partnerships, humanitarian collaboration, and civil society dialogue."
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#12304A] text-white relative overflow-hidden bg-grid-dark border-b border-white/10">
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 bg-[#167E83]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#D8A85B]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Mail className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Communication Channel
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Dialogue & Outreach</span>
            </div>

            {/* Exact Heading from Section 4 */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Connect With Pakistan Minorities Support Initiative
            </h1>

            {/* Exact Supporting Description from Section 4 */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              We welcome inquiries from humanitarian organizations, institutional partners and individuals
              interested in our mission and proposed initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Institutional Information Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Outreach Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12304A] to-[#164366] text-white border border-[#25D366]/30 shadow-md space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Contact</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Available</span>
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Direct WhatsApp Outreach
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-1">
                  Connect directly with the Pakistan Minorities Support Initiative team for rapid humanitarian inquiries, partnership questions, or community support coordination.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">
                  Official WhatsApp Number
                </span>
                <a
                  href={PMSI_CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-lg sm:text-xl font-bold text-white hover:text-[#25D366] transition-colors block"
                >
                  {PMSI_CONTACT.whatsappNumber}
                </a>
              </div>

              {/* Chat on WhatsApp Button */}
              <a
                href={PMSI_CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-lg shadow-[#25D366]/25 group"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              <p className="text-[11px] text-slate-300 text-center leading-relaxed">
                Clicking opens WhatsApp with a prefilled inquiry message to start a direct dialogue with PMSI.
              </p>
            </div>

            {/* General Inquiry Info */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
              <h2 className="font-serif text-2xl font-semibold text-[#12304A]">
                General & Partner Inquiries
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMSI engages with philanthropic foundations, multilateral human rights mechanisms, and
                international NGOs on the basis of mutual transparency and verified humanitarian benefit.
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Official WhatsApp Channel
                    </div>
                    <div className="text-sm font-semibold text-slate-900 font-mono mt-0.5">
                      {PMSI_CONTACT.whatsappNumber}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Direct messaging channel for swift humanitarian inquiries.{' '}
                      <a
                        href={PMSI_CONTACT.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#167E83] font-semibold underline hover:text-[#106064]"
                      >
                        Start Chat &rarr;
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#167E83]/10 flex items-center justify-center text-[#167E83] shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      International Partnerships
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      For institutional funding discussions, project collaboration, or bilateral convenings,
                      please access our dedicated{' '}
                      <Link to="/partnership-inquiry" className="text-[#167E83] font-semibold underline hover:text-[#106064]">
                        Partnership Inquiry Portal
                      </Link>
                      .
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#167E83]/10 flex items-center justify-center text-[#167E83] shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Proposed Funding Areas
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      Review our six focal program categories on the{' '}
                      <Link to="/funding-opportunities" className="text-[#167E83] font-semibold underline hover:text-[#106064]">
                        Funding Opportunities
                      </Link>{' '}
                      page.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D8A85B]/20 flex items-center justify-center text-[#BD8E43] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Official Communication Notice
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      PMSI welcomes inquiries through our official WhatsApp contact (+92 307 9661669) and online
                      inquiry portals. In strict compliance with our truthfulness guidelines, all correspondence is
                      handled directly by our designated representatives.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Safeguards Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167E83]">
                <Lock className="w-4 h-4" />
                <span>Privacy & Communication Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contact information submitted through this form is used exclusively for correspondence
                regarding your inquiry. We never sell, lease, or distribute information to external commercial
                advertisers. Review our full{' '}
                <Link to="/privacy-policy" className="text-[#167E83] underline hover:text-[#106064]">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-md">
              {serverStatus === 'sent' && (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-8 space-y-3">
                  <div className="flex items-center gap-2.5 font-bold text-base text-emerald-950">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Message Successfully Dispatched</span>
                  </div>
                  <p className="text-sm text-emerald-800 leading-relaxed">{serverMessage}</p>
                </div>
              )}

              {serverStatus === 'unconfigured' && (
                <div className="p-6 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 mb-8 space-y-4">
                  <div className="flex items-center gap-2 font-bold text-base text-amber-950">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Live Automated Dispatch Pending Server Credentials</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    {serverMessage}
                  </p>
                  <div className="pt-2 border-t border-amber-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-amber-800">
                        Immediate alternative:
                      </span>
                      <a
                        href={PMSI_CONTACT.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-xs font-bold text-white transition-colors shadow-xs"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={copyContactSummary}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-amber-300 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-colors shadow-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Summary</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {serverStatus === 'rate_limited' && (
                <div className="p-5 rounded-xl bg-red-50 border border-red-200 text-red-900 mb-8 text-sm">
                  <div className="font-bold mb-1">Rate Limit Reached</div>
                  <div>{serverMessage}</div>
                </div>
              )}

              {validationErrors.length > 0 && (
                <div className="p-5 rounded-xl bg-red-50 border border-red-200 text-red-900 mb-8 text-sm space-y-1.5">
                  <div className="font-bold mb-2">Please correct the following fields:</div>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    {validationErrors.map((err, idx) => (
                      <li key={idx}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <h3 className="font-serif text-xl font-semibold text-[#12304A] border-b border-slate-100 pb-3">
                  Direct Correspondence Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Country of Operation / Residence *
                    </label>
                    <input
                      type="text"
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United Kingdom, Pakistan, USA"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="organization" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Organization / Foundation Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Humanitarian Network"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Professional Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@organization.org"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. General Inquiry on PMSI Humanitarian Priorities"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83] resize-y"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-1 h-4 w-4 text-[#167E83] border-slate-300 rounded focus:ring-[#167E83]"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      I consent to the collection and processing of my contact information solely for
                      the purpose of answering this inquiry, in accordance with the{' '}
                      <Link to="/privacy-policy" className="text-[#167E83] underline hover:text-[#106064]" target="_blank">
                        PMSI Privacy Policy
                      </Link>
                      . *
                    </span>
                  </label>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#125e62] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-md transition-all disabled:opacity-50 text-center"
                  >
                    <span>{isSubmitting ? 'Verifying with Server...' : 'Send Message'}</span>
                    <Send className="w-4 h-4 text-[#D8A85B]" />
                  </button>

                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-400">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Secure Transmission</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

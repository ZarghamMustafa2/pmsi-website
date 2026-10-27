import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  Handshake,
  Send,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  Building,
  Lock,
  Globe,
  Info,
  Sparkles,
} from 'lucide-react';

const PARTNERSHIP_CATEGORIES = [
  'Institutional Funding Discussion',
  'Humanitarian Project Collaboration',
  'Minority Rights & Protection',
  'Education & Child Welfare',
  'Disaster Relief',
  'Transgender Inclusion',
  'Community Development',
  'General Partnership Inquiry',
];

export const PartnershipInquiryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const projectParam = searchParams.get('project') || '';
  const categoryParam = searchParams.get('category') || '';

  // Map category param or project title to standard list if closely matched
  const initialInterest =
    PARTNERSHIP_CATEGORIES.find(
      (cat) => cat.toLowerCase() === categoryParam.toLowerCase()
    ) ||
    PARTNERSHIP_CATEGORIES.find((cat) =>
      categoryParam ? cat.toLowerCase().includes(categoryParam.toLowerCase().slice(0, 8)) : false
    ) ||
    (projectParam ? 'Humanitarian Project Collaboration' : 'Institutional Funding Discussion');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    country: '',
    email: '',
    website: '',
    partnershipInterest: initialInterest,
    fundingRange: 'Exploratory / Under Discussion',
    message: projectParam ? `Inquiry regarding proposed project: ${projectParam}\n\n` : '',
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

    // Client-side quick check
    if (!formData.privacyConsent) {
      setValidationErrors(['You must consent to the Privacy Policy to submit an inquiry.']);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'partnership',
          name: formData.name,
          organization: formData.organization,
          country: formData.country,
          email: formData.email,
          website: formData.website,
          partnershipInterest: formData.partnershipInterest,
          fundingRange: formData.fundingRange,
          message: formData.message,
          privacyConsent: formData.privacyConsent,
          _gotcha: formData._gotcha,
        }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        setServerStatus('unconfigured');
        setServerMessage(
          'Automated email transport service is pending serverless configuration. In adherence to PMSI truthfulness standards, inquiries are not falsely reported as sent. Please contact us directly via email or WhatsApp.'
        );
        return;
      }

      const result = await response.json().catch(() => ({}));

      if (response.status === 200 && result.status === 'sent') {
        setServerStatus('sent');
        setServerMessage(result.message || 'Your inquiry has been securely received by the server.');
      } else if (response.status === 503 || result.status === 'unconfigured') {
        // Truthful unavailable state
        setServerStatus('unconfigured');
        setServerMessage(
          result.message ||
            'Automated email transport service is pending environment configuration. In adherence to PMSI truthfulness standards, inquiries are not falsely reported as sent.'
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
      // If server endpoint is unreachable
      setServerStatus('unconfigured');
      setServerMessage(
        'The server-side inquiry dispatch endpoint is currently unconfigured or unreachable. In strict compliance with PMSI truthfulness guidelines, we do not present a false confirmation.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyInquirySummary = () => {
    const text = `PMSI Partnership Inquiry Summary:
Name: ${formData.name}
Organization: ${formData.organization || 'N/A'}
Country: ${formData.country}
Email: ${formData.email}
Website: ${formData.website || 'N/A'}
Partnership Interest: ${formData.partnershipInterest}
Estimated Funding Range: ${formData.fundingRange}
Proposal Message:
${formData.message}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Partnership Inquiry Portal — International Humanitarian Engagement"
        description="Submit an institutional partnership inquiry to the Pakistan Minorities Support Initiative (PMSI) for philanthropic foundations, humanitarian NGOs, and institutional donors."
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
          <Breadcrumb items={[{ label: 'Partnership Inquiry' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Handshake className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Institutional Engagement
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">International Organizations</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Partnership Inquiry Portal
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              Connect with PMSI leadership to discuss programmatic collaboration, institutional grant support,
              or joint humanitarian initiatives in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Institutional Context Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-[#12304A]">
                Institutional Protocol
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMSI reviews all formal expressions of interest from international charitable foundations,
                bilateral development mechanisms, and human rights organizations on the basis of ethical
                alignment and direct community impact.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#167E83]/10 flex items-center justify-center text-[#167E83] shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Target Partners
                    </div>
                    <div className="text-sm text-slate-600">
                      Philanthropic foundations, INGOs, human rights bodies, and institutional donors.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#167E83]/10 flex items-center justify-center text-[#167E83] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Scope of Dialogue
                    </div>
                    <div className="text-sm text-slate-600">
                      Proposed funding priorities, project concepts, and bilateral collaboration terms.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D8A85B]/20 flex items-center justify-center text-[#BD8E43] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Privacy & Data Safeguards
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      We do not store inquiries in browser local storage or share organizational details
                      with commercial third parties. Inquiries are handled in accordance with our{' '}
                      <Link to="/privacy-policy" className="text-[#167E83] underline hover:text-[#106064]">
                        Privacy Policy
                      </Link>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950 uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>Credibility & Integrity Notice</span>
              </div>
              <p className="leading-relaxed">
                PMSI is in the process of formal institutional establishment. We do not solicit or accept
                unregulated direct public donations. All institutional funding discussions proceed through
                transparent legal covenants and project-based agreements.
              </p>
            </div>
          </div>

          {/* Form Area (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-md">
              {/* Server Status Feedback States */}
              {serverStatus === 'sent' && (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-8 space-y-3">
                  <div className="flex items-center gap-2.5 font-bold text-base text-emerald-950">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Inquiry Successfully Dispatched</span>
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
                    <span className="text-xs text-amber-800">
                      Retain your drafted inquiry details:
                    </span>
                    <button
                      type="button"
                      onClick={copyInquirySummary}
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
                          <span>Copy Inquiry Summary</span>
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
                {/* Honeypot field - invisible to genuine users */}
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
                  Expression of Partnership Interest
                </h3>

                {projectParam && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 flex items-start gap-2.5 text-xs">
                    <Sparkles className="w-4 h-4 text-[#D8A85B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Inquiring Regarding Proposed Project: </span>
                      <span className="font-semibold text-amber-900">{projectParam}</span>
                    </div>
                  </div>
                )}

                {/* 1. Full Name & 2. Organization Name */}
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
                      placeholder="e.g. Dr. Julian Vance"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Organization / Foundation Name
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Global Humanitarian Trust"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>
                </div>

                {/* 3. Country & 4. Professional Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="country" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United Kingdom / Switzerland"
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
                      placeholder="j.vance@foundation.org"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>
                </div>

                {/* 5. Organization Website & 6. Partnership Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="website" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Organization Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://www.foundation.org"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    />
                  </div>

                  <div>
                    <label htmlFor="partnershipInterest" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Partnership Interest *
                    </label>
                    <select
                      id="partnershipInterest"
                      required
                      value={formData.partnershipInterest}
                      onChange={(e) => setFormData({ ...formData, partnershipInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                    >
                      {PARTNERSHIP_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 7. Estimated Funding Range */}
                <div>
                  <label htmlFor="fundingRange" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Estimated Funding Range (Optional)
                  </label>
                  <select
                    id="fundingRange"
                    value={formData.fundingRange}
                    onChange={(e) => setFormData({ ...formData, fundingRange: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83]"
                  >
                    <option>Exploratory / Under Discussion</option>
                    <option>Discretionary Grant (&lt; $25,000 USD)</option>
                    <option>Project-Specific Funding ($25,000 – $100,000 USD)</option>
                    <option>Multi-Year Institutional Support ($100,000+ USD)</option>
                    <option>Non-Monetary / Technical Cooperation</option>
                  </select>
                </div>

                {/* 8. Message / Proposal Description */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message / Proposal Description *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide an overview of your organization's mandate, intended geographic or thematic focus, and potential areas of collaboration with PMSI..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#167E83] resize-y"
                  />
                </div>

                {/* 9. Consent to Privacy Policy */}
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
                      I consent to the collection and processing of the submitted organizational information
                      solely for the purpose of evaluating partnership opportunities, in accordance with the{' '}
                      <Link to="/privacy-policy" className="text-[#167E83] underline hover:text-[#106064]" target="_blank">
                        PMSI Privacy Policy
                      </Link>
                      . *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#125e62] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-md transition-all disabled:opacity-50 text-center"
                  >
                    <span>{isSubmitting ? 'Verifying with Server...' : 'Submit Partnership Inquiry'}</span>
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  MapPin,
  AlertCircle,
  Copy,
  Check,
  Lock,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    category: 'Philanthropic Foundation / Donor',
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
      setValidationErrors(['You must consent to the Privacy Policy to submit your message.']);
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
          category: formData.category,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          privacyConsent: formData.privacyConsent,
          _gotcha: formData._gotcha,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.status === 200 && result.status === 'sent') {
        setServerStatus('sent');
        setServerMessage(result.message || 'Your inquiry has been securely received by the server.');
      } else if (response.status === 503 || result.status === 'unconfigured') {
        setServerStatus('unconfigured');
        setServerMessage(
          result.message ||
            'Automated email transport service is pending environment configuration. In adherence to PMSI truthfulness standards, inquiries are not falsely reported as delivered.'
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
    const text = `PMSI Inquiry Summary:
Name: ${formData.name}
Organization: ${formData.organization || 'N/A'}
Category: ${formData.category}
Email: ${formData.email}
Subject: ${formData.subject}
Message:
${formData.message}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetForm = () => {
    setServerStatus('idle');
    setFormData({
      name: '',
      organization: '',
      category: 'Philanthropic Foundation / Donor',
      email: '',
      subject: '',
      message: '',
      privacyConsent: false,
      _gotcha: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F9FA] text-[#12304A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
            <Mail className="w-3.5 h-3.5 text-[#167E83]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
              Institutional Inquiries
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-5">
            Connect With PMSI
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Whether you represent an international funding body, a humanitarian foundation, or a human
            rights organization, we welcome institutional dialogue to advance protection and equality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Institutional Context Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-semibold text-[#12304A]">
                Humanitarian Partnership Protocol
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                PMSI engages with philanthropic foundations, multilateral human rights mechanisms, and
                international NGOs on the basis of mutual transparency, ethical alignment, and direct community
                benefit.
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
                      Charitable trusts, institutional donors, human rights watchdogs, and relief agencies.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#167E83]/10 flex items-center justify-center text-[#167E83] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Operational Region
                    </div>
                    <div className="text-sm text-slate-600">
                      Vulnerable communities and disaster-impacted zones across Pakistan.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D8A85B]/20 flex items-center justify-center text-[#BD8E43] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#12304A] uppercase tracking-wider">
                      Communication Notice
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      Official verified organizational email endpoints and dedicated correspondence addresses
                      will be published following completion of institutional setup. Inquiries submitted via
                      this portal are logged for formal review.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/partnership-inquiry"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-[#12304A] bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  <span>Looking for Formal Partnership Inquiries?</span>
                  <span className="text-[#167E83]">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-md">
              {serverStatus === 'sent' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#167E83]/10 text-[#167E83] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#167E83]/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#12304A]">
                    Inquiry Securely Received
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    {serverMessage ||
                      'Thank you for contacting the Pakistan Minorities Support Initiative. Your institutional inquiry has been recorded.'}
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-4 px-6 py-2.5 rounded-lg text-sm font-semibold text-[#167E83] border border-[#167E83]/30 hover:bg-[#167E83]/10 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : serverStatus === 'unconfigured' ? (
                <div className="py-8 space-y-6">
                  <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-amber-900 text-base">
                          Server Notice: Live Email Dispatch Pending Configuration
                        </h4>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          {serverMessage}
                        </p>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          Your message details have been validated by our server. To ensure your correspondence
                          reaches us during this setup period, you can copy the inquiry summary below for your records:
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/80 p-4 rounded-lg border border-amber-200/80 font-mono text-xs text-slate-700 space-y-1">
                      <div><strong className="text-slate-900">From:</strong> {formData.name} ({formData.email})</div>
                      <div><strong className="text-slate-900">Organization:</strong> {formData.organization || 'Not provided'}</div>
                      <div><strong className="text-slate-900">Subject:</strong> {formData.subject}</div>
                      <div className="truncate"><strong className="text-slate-900">Message:</strong> {formData.message}</div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={copyContactSummary}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#12304A] text-white hover:bg-[#1A4367] transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Summary Copied to Clipboard' : 'Copy Message Summary'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                      >
                        Edit / Reset Form
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-xl font-semibold text-[#12304A] mb-2">
                    Submit Institutional Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Please provide your organization’s details to explore partnership or support initiatives.
                  </p>

                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_hp">Leave this empty</label>
                    <input
                      type="text"
                      id="website_hp"
                      value={formData._gotcha}
                      onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {validationErrors.length > 0 && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 space-y-1">
                      <div className="font-semibold flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Please correct the following:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 pl-1">
                        {validationErrors.map((err, i) => (
                          <li key={i}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {serverStatus === 'rate_limited' && (
                    <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{serverMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Representative Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Jane Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#167E83] focus:border-transparent transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Global Humanitarian Fund"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#167E83] focus:border-transparent transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="category" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Partner Category
                      </label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#167E83] focus:border-transparent transition-all shadow-xs"
                      >
                        <option>Philanthropic Foundation / Donor</option>
                        <option>International Humanitarian NGO</option>
                        <option>Human Rights Monitoring Body</option>
                        <option>Institutional Grantmaker</option>
                        <option>Academic / Research Institution</option>
                        <option>Other Philanthropic Partner</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Official Contact Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.org"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#167E83] focus:border-transparent transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Subject / Collaboration Focus *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Partnership on Flood Relief & Child Welfare"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#167E83] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Message / Partnership Proposal *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide an overview of your organization's interest and intended areas of collaboration..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#167E83] focus:border-transparent resize-y transition-all shadow-xs"
                    />
                  </div>

                  {/* Privacy Policy Consent */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#167E83] focus:ring-[#167E83]"
                      />
                      <span className="text-xs text-slate-700 leading-relaxed">
                        I confirm this inquiry represents an institutional or humanitarian communication, and I agree to the processing of contact details in accordance with PMSI&apos;s{' '}
                        <Link to="/privacy-policy" className="text-[#167E83] font-semibold underline hover:text-[#12304A]">
                          Privacy Policy
                        </Link>
                        . No marketing solicitations will be sent.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#126064] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Institutional Inquiry'}</span>
                      <Send className="w-4 h-4 text-[#D8A85B]" />
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Encrypted transmission &bull; Zero spam</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

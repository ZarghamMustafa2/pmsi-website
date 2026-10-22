import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import { Lock, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Privacy Policy — Data Protection & Privacy Information"
        description="Learn about the privacy practices, data protection principles, and inquiry processing procedures of the Pakistan Minorities Support Initiative (PMSI)."
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
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Lock className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Legal & Governance
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Data Protection</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Privacy Policy
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              This Privacy Policy explains how the Pakistan Minorities Support Initiative (PMSI) handles
              information submitted through our institutional contact and partnership inquiry systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Privacy Policy Narrative */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-10 sm:space-y-12">
          {/* Section 1: Overview */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">01</span>
              <span>Overview & Ethical Commitment</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Pakistan Minorities Support Initiative (PMSI) is dedicated to maintaining the highest standards
              of data privacy and institutional confidentiality. We strictly do not sell, rent, monetize, or
              commercialize personal or organizational data. We do not use third-party behavioral advertising
              trackers or unnecessary tracking cookies.
            </p>
          </section>

          {/* Section 2: Information Collected Through Forms */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">02</span>
              <span>Information Collected Through Forms</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              When you submit an inquiry through our <strong>Partnership Inquiry Portal</strong> or{' '}
              <strong>Contact Page</strong>, we collect only the information you voluntarily provide:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 pl-4 list-disc list-outside">
              <li>
                <strong>Representative Full Name:</strong> To address you respectfully in correspondence.
              </li>
              <li>
                <strong>Organization or Foundation Name (Optional):</strong> To understand your institutional background.
              </li>
              <li>
                <strong>Country of Residence or Operation:</strong> To evaluate international coordination requirements.
              </li>
              <li>
                <strong>Professional Email Address:</strong> To reply to your inquiry.
              </li>
              <li>
                <strong>Organization Website (Optional):</strong> To verify organizational context.
              </li>
              <li>
                <strong>Partnership Interest & Funding Range:</strong> To route your inquiry to relevant coordinators.
              </li>
              <li>
                <strong>Inquiry Message / Proposal Description:</strong> To evaluate your questions or collaboration proposals.
              </li>
            </ul>
            <p className="text-xs text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
              <strong>Strict Prohibition:</strong> We do not collect government identification numbers (such as CNIC or
              passports), banking credentials, payment card details, or sensitive personal disclosures concerning vulnerable
              beneficiaries through our public forms.
            </p>
          </section>

          {/* Section 3: Why Information Is Collected */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">03</span>
              <span>Why Information Is Collected</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              All submitted data is utilized exclusively for legitimate humanitarian communication purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                <span>Evaluating partnership alignment and feasibility</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                <span>Responding directly to institutional questions</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                <span>Scheduling exploratory introductory briefings</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                <span>Protecting our systems against malicious spam</span>
              </div>
            </div>
          </section>

          {/* Section 4: How Inquiries Are Processed */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">04</span>
              <span>How Inquiries Are Processed</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              When submitted, inquiries are validated by our server endpoint (including validation of inputs,
              anti-spam honeypot checking, and IP rate limiting). In accordance with PMSI’s strict truthfulness
              policy, inquiries are transmitted only when live verified server mailer credentials are active.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>No Browser Local Storage:</strong> To prevent unauthorized local access on shared or public
              computers, we do not store submitted form details, draft entries, or contact information in browser
              local storage or session storage.
            </p>
          </section>

          {/* Section 5: Third-Party Infrastructure */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">05</span>
              <span>Third-Party Infrastructure & Providers</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Our website is hosted on secure web hosting infrastructure using standard HTTPS encryption. When
              automated mail transport is activated, messages are dispatched through verified institutional SMTP or
              enterprise email APIs governed by standard confidentiality agreements. We do not use third-party
              marketing analytics, pixel tags, or external advertising networks.
            </p>
          </section>

          {/* Section 6: Information Security */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">06</span>
              <span>Information Security</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              All web communication between your browser and our website is protected using Transport Layer Security
              (TLS/HTTPS) encryption. Server-side secrets, API keys, and email service credentials are maintained
              strictly via protected environment variables and are never exposed in client-side code.
            </p>
          </section>

          {/* Section 7: Retention and Deletion */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">07</span>
              <span>Data Retention & Deletion</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Inquiries and correspondence are retained only for the duration necessary to evaluate partnership
              feasibility and maintain appropriate institutional records. If an exploratory dialogue does not
              proceed into an active collaboration, records are securely archived or expunged upon periodic review.
            </p>
          </section>

          {/* Section 8: Your Privacy Rights */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#12304A] flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-[#167E83]">08</span>
              <span>Your Privacy Rights & Inquiries</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              You have the right to request access to any personal information you have submitted to PMSI, to request
              corrections, or to request the complete deletion of your correspondence from our records. To submit a
              privacy inquiry, please use our{' '}
              <a href="/contact" className="text-[#167E83] underline hover:text-[#106064]">
                Contact Page
              </a>
              .
            </p>
          </section>

          {/* Policy Effective Date Notice */}
          <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>Policy Status: Active & Transparent</span>
            <span>Last Updated: Phase 3 Implementation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

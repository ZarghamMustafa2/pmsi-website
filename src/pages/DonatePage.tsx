import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PMSI_CONTACT } from '../data/contactData';
import {
  Heart,
  Building,
  Smartphone,
  Copy,
  Check,
  Mail,
  ArrowRight,
  Handshake,
  AlertCircle,
} from 'lucide-react';

export const DonatePage: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldId: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Donate & Funding Inquiries — Pakistan Minorities Support Initiative"
        description="Information on supporting the Pakistan Minorities Support Initiative (PMSI), institutional funding inquiries, and transitional contribution arrangements."
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#12304A] text-white relative overflow-hidden bg-grid-dark border-b border-white/10">
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 bg-[#167E83]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#D8A85B]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumb items={[{ label: 'Donate Now' }]} />

          <div className="max-w-4xl">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-[#D8A85B] fill-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Humanitarian Contribution & Support
              </span>
            </div>

            {/* Page Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
              Donate Now
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              Support PMSI by contributing through the following payment methods or exploring institutional partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Transparent Compliance Disclosure Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/90 border border-amber-300/80 shadow-xs flex flex-col md:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-wider text-[11px] text-amber-900 bg-amber-200/60 px-2.5 py-0.5 rounded">
                Statutory Status & Donor Transparency
              </span>
            </div>
            <p>
              The Pakistan Minorities Support Initiative (PMSI) is currently finalizing its formal non-profit
              statutory registration in Pakistan. In accordance with international fundraising ethics:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 font-medium text-amber-900">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5" />
                <span>Dedicated institutional non-profit bank accounts will be published upon regulatory certification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5" />
                <span>Direct foreign donations are not processed online prior to statutory registration.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* International Donor / Institutional Pathway Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D8A85B]">
              <Handshake className="w-4 h-4" />
              <span>International Donors & Foundations</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
              Institutional Funding & Grant Collaboration
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Charitable foundations and international NGOs wishing to review project concept notes or discuss
              future programmatic funding are invited to initiate formal correspondence:
            </p>
          </div>

          <Link
            to="/partnership-inquiry"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-xs shrink-0 font-medium"
          >
            <span>Partnership Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Transitional Domestic Payment Methods Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#12304A]">
                Transitional Contribution Methods
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                For domestic voluntary contributions, details are provided below under the personal account of the initiative founder:
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-200/80 text-slate-700 self-start sm:self-auto">
              Personally Held Accounts (Transitional)
            </span>
          </div>

          {/* Payment Methods Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
            {/* CARD 1: JazzCash */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
                        Mobile Wallet
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#12304A]">
                        JazzCash
                      </h3>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold text-amber-800 bg-amber-100 border border-amber-200">
                    Transitional
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-3.5">
                  {/* Account Type */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Account Type
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#12304A] block">
                      JazzCash
                    </span>
                  </div>

                  {/* Mobile Number */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Mobile Number
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-base sm:text-lg font-bold text-[#12304A] tracking-wider select-all">
                        +923079661669
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('+923079661669', 'jazzcash-number')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#167E83] bg-white border border-slate-300 hover:bg-[#167E83] hover:text-white hover:border-[#167E83] transition-colors shrink-0 cursor-pointer"
                        aria-label="Copy mobile number"
                      >
                        {copiedField === 'jazzcash-number' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Account Name */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Account Name (Founder / Initiative Lead)
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm sm:text-base font-bold text-[#12304A] tracking-wide select-all">
                        ZARGHAM MUSTAFA
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('ZARGHAM MUSTAFA', 'jazzcash-name')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#167E83] bg-white border border-slate-300 hover:bg-[#167E83] hover:text-white hover:border-[#167E83] transition-colors shrink-0 cursor-pointer"
                        aria-label="Copy account name"
                      >
                        {copiedField === 'jazzcash-name' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                  <strong>Notice:</strong> This is a personally held mobile account of the initiative lead, not an official registered NGO account.
                </div>
              </div>
            </div>

            {/* CARD 2: Faysal Bank */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#167E83]/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                        Direct Bank Transfer
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#12304A]">
                        Faysal Bank
                      </h3>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold text-amber-800 bg-amber-100 border border-amber-200">
                    Transitional
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-3.5">
                  {/* Bank Name */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Bank Name
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#12304A] block">
                      Faysal Bank
                    </span>
                  </div>

                  {/* Account Title */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Account Title (Founder / Initiative Lead)
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm sm:text-base font-bold text-[#12304A] tracking-wide select-all">
                        ZARGHAM MUSTAFA
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('ZARGHAM MUSTAFA', 'faysal-name')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#167E83] bg-white border border-slate-300 hover:bg-[#167E83] hover:text-white hover:border-[#167E83] transition-colors shrink-0 cursor-pointer"
                        aria-label="Copy account title"
                      >
                        {copiedField === 'faysal-name' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* IBAN Number */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      IBAN Number
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#12304A] tracking-wider select-all break-all">
                        PK07FAYS3634301000001922
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('PK07FAYS3634301000001922', 'faysal-iban')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#167E83] bg-white border border-slate-300 hover:bg-[#167E83] hover:text-white hover:border-[#167E83] transition-colors shrink-0 cursor-pointer"
                        aria-label="Copy IBAN number"
                      >
                        {copiedField === 'faysal-iban' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Branch Name */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Branch Name
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 select-all">
                        IBB CITY HOUSING SOCIETY
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('IBB CITY HOUSING SOCIETY', 'faysal-branch')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#167E83] bg-white border border-slate-300 hover:bg-[#167E83] hover:text-white hover:border-[#167E83] transition-colors shrink-0 cursor-pointer"
                        aria-label="Copy branch name"
                      >
                        {copiedField === 'faysal-branch' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                  <strong>Notice:</strong> This is a personally held bank account of the founder for transitional domestic coordination, not a certified non-profit institutional account.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note & Confirmation Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 text-[#167E83] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                After making your contribution, please contact us with your payment details or deposit slip for confirmation.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                WhatsApp direct line: <strong className="text-slate-700">{PMSI_CONTACT.whatsappNumber}</strong> (instant confirmation)
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={PMSI_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Confirm contribution with PMSI via WhatsApp at ${PMSI_CONTACT.whatsappNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-xs text-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Confirm via WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#12304A] hover:bg-[#167E83] transition-all shadow-xs text-center"
            >
              <span>Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

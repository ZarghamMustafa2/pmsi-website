import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  Heart,
  ShieldAlert,
  Building,
  Smartphone,
  Copy,
  Check,
  ArrowRight,
  Info,
  Lock,
  Mail,
  AlertCircle,
  HelpCircle,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';

export const DonatePage: React.FC = () => {
  // Compliance Control Flag:
  // Direct public donation collection remains inactive until official NGO statutory registration
  // and dedicated institutional non-profit banking facilities have been formally verified.
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Support Dignity. Empower Communities. — Pakistan Minorities Support Initiative"
        description="Your interest in supporting humanitarian initiatives can help create opportunities for vulnerable and marginalized communities across Pakistan."
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
          <Breadcrumb items={[{ label: 'Donate' }]} />

          <div className="max-w-4xl">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-[#D8A85B] fill-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Humanitarian Contribution
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Financial Integrity & Ethics</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Support Dignity. Empower Communities.
            </h1>

            {/* Exact Required Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              Your interest in supporting humanitarian initiatives can help create opportunities for
              vulnerable and marginalized communities across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* SECTION 1: Statutory Compliance Notice (Mandatory Institutional Integrity) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-amber-50/90 border border-amber-300/80 shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-200/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <span>Compliance & Statutory Transparency</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-950">
                Direct Donation Arrangements Are Being Finalized
              </h2>
              <p className="text-sm sm:text-base text-amber-900/90 leading-relaxed max-w-4xl">
                The Pakistan Minorities Support Initiative (PMSI) is currently in the process of finalizing its
                formal institutional and non-profit statutory registration in Pakistan. In strict compliance
                with national regulatory mandates, banking guidelines, and international fundraising ethics:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-sm text-amber-950 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-2" />
                  <span>Direct public donations and automated payment gateways are currently inactive.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-2" />
                  <span>Personal accounts are not presented as official NGO bank accounts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-2" />
                  <span>Public payment instructions are withheld until all regulatory authorizations are complete.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-2" />
                  <span>Dedicated institutional non-profit banking details will be announced upon formal certification.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Primary Action Button: Contact About Supporting */}
          <div className="pt-4 border-t border-amber-300/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-amber-900">
              International donors, charitable foundations, and institutional partners wishing to explore proposed
              humanitarian programs or concept notes are invited to initiate formal correspondence:
            </p>
            <Link
              to="/partnership-inquiry"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#12304A] hover:bg-[#1A4367] transition-all shadow-md shrink-0"
            >
              <Mail className="w-4 h-4 text-[#D8A85B]" />
              <span>Contact Us About Supporting PMSI</span>
            </Link>
          </div>
        </div>

        {/* SECTION 2: Future Payment Architecture & Dormant Payment Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167E83] mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>Statutory Payment Channel Infrastructure</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#12304A]">
                Proposed Payment Methods (Inactive Pending Statutory Approval)
              </h3>
            </div>

            {/* Reviewer / Authorized Compliance Preview Switch */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowPaymentDetails(!showPaymentDetails)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
                title="Toggle inspection of payment card design architecture"
              >
                <Info className="w-3.5 h-3.5 text-[#167E83]" />
                <span>{showPaymentDetails ? 'Hide Payment Card Architecture' : 'Inspect Prepared Payment Architecture'}</span>
              </button>
            </div>
          </div>

          {!showPaymentDetails ? (
            /* Dormant Inactive State (Default Public View) */
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4">
              <div className="w-14 h-14 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-2 border border-slate-200">
                <Lock className="w-6 h-6 text-slate-400" />
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#12304A]">
                Payment Instructions Are Held Offline
              </h4>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                In strict adherence to regulatory compliance guidelines, direct account details and IBAN information
                are dormant and will not be displayed for public transaction processing until organizational banking
                clearances have been formally verified.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#167E83] bg-[#167E83]/10 hover:bg-[#167E83]/20 border border-[#167E83]/30 transition-colors"
                >
                  <span>Submit an Institutional Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/transparency"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  <FileCheck2 className="w-4 h-4 text-slate-500" />
                  <span>Review Transparency Disclosures</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Prepared Payment Method Cards (Future Authorized Architecture) */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">Authorized Architecture Preview:</span>
                  <p className="leading-relaxed">
                    The payment cards below reflect the transitional account structure prepared for activation upon
                    formal authorization. Please note that these represent personal transitional accounts and are not
                    an official non-profit entity account. No funds should be transferred without written confirmation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* CARD 1: JazzCash Mobile Account */}
                <div className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 font-bold text-lg">
                          <Smartphone className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-red-700">Mobile Wallet</span>
                          <h4 className="font-serif text-2xl font-bold text-[#12304A]">JazzCash</h4>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded text-xs font-semibold text-amber-800 bg-amber-100 border border-amber-200">
                        Transitional
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Mobile Account Number
                      </span>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-lg font-bold text-[#12304A] tracking-wider select-all">
                          +923079661669
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('+923079661669', 'jazzcash')}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#167E83] bg-white border border-slate-300 hover:bg-[#167E83] hover:text-white hover:border-[#167E83] transition-colors"
                        >
                          {copiedField === 'jazzcash' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Number</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                      <p className="font-semibold text-slate-800">JazzCash Transfer Instructions:</p>
                      <ol className="list-decimal list-inside space-y-1 pl-1">
                        <li>Open your JazzCash App or dial *786# on your mobile phone.</li>
                        <li>Select <strong>Send Money</strong> &rarr; <strong>To JazzCash Account</strong>.</li>
                        <li>Enter the mobile account number: <strong>0307 9661669</strong>.</li>
                        <li>Enter the authorized amount and confirm beneficiary details.</li>
                        <li>Save transaction reference for coordination records.</li>
                      </ol>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                    <strong>Notice:</strong> This is a transitional personally held mobile wallet account. Do not initiate
                    donations without explicit verification from PMSI administration.
                  </div>
                </div>

                {/* CARD 2: Faysal Bank Account */}
                <div className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#167E83]/5 rounded-bl-full pointer-events-none" />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                          <Building className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Direct Bank Transfer</span>
                          <h4 className="font-serif text-2xl font-bold text-[#12304A]">Faysal Bank</h4>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded text-xs font-semibold text-amber-800 bg-amber-100 border border-amber-200">
                        Transitional
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
                          Account Holder Name
                        </span>
                        <span className="font-serif text-base font-bold text-[#12304A] block">
                          ZARGHAM MUSTAFA
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                          International Bank Account Number (IBAN)
                        </span>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs sm:text-sm font-bold text-[#12304A] tracking-wider select-all break-all">
                            PK07FAYS3634301000001922
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard('PK07FAYS3634301000001922', 'iban')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#167E83] bg-white border border-slate-300 hover:bg-[#167E83] hover:text-white hover:border-[#167E83] transition-colors shrink-0"
                          >
                            {copiedField === 'iban' ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy IBAN</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
                          Branch Designation
                        </span>
                        <span className="text-xs font-medium text-slate-800 block">
                          IBB CITY HOUSING SOCIETY
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                      <p className="font-semibold text-slate-800">Bank Transfer / Raast Instructions:</p>
                      <ol className="list-decimal list-inside space-y-1 pl-1">
                        <li>Log in to your online banking or mobile banking application.</li>
                        <li>Select <strong>Interbank Funds Transfer (IBFT)</strong> or <strong>Raast</strong>.</li>
                        <li>Choose <strong>Faysal Bank Limited</strong> as the beneficiary institution.</li>
                        <li>Paste the IBAN: <strong>PK07FAYS3634301000001922</strong>.</li>
                        <li>Confirm beneficiary title matches <strong>ZARGHAM MUSTAFA</strong> before confirming.</li>
                      </ol>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                    <strong>Statutory Disclaimer:</strong> This account is personally held and is not an official NGO
                    banking vehicle. In strict compliance with Pakistani statutory regulations, unapproved transactions are
                    strictly discouraged.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 3: How International Donors & Institutional Partners Can Engage Today */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 flex items-center justify-center text-[#167E83]">
              <Building className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-[#12304A]">
              Institutional Grant Inquiries
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We welcome preliminary dialogue with philanthropic foundations and human rights bodies interested in
              our proposed focus areas and program concept notes.
            </p>
            <Link
              to="/funding-opportunities"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167E83] hover:text-[#106064]"
            >
              <span>Explore Proposed Funding Areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D8A85B]/15 flex items-center justify-center text-[#BD8E43]">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-[#12304A]">
              Statutory Transparency
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              PMSI adheres to comprehensive governance disclosures regarding our registration status, anti-corruption
              safeguards, and compliance principles.
            </p>
            <Link
              to="/transparency"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167E83] hover:text-[#106064]"
            >
              <span>Read Legal Disclosures</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-[#12304A]">
              Direct Dialogue & Outreach
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Connect directly with our coordination team for institutional inquiries, concept paper requests, and civil
              society coalition discussions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167E83] hover:text-[#106064]"
            >
              <span>Contact Coordination Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* SECTION 4: Donor Ethics & Frequently Asked Questions */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-[#167E83]" />
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#12304A]">
              Donation Ethics & Compliance FAQ
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 space-y-2">
              <h4 className="font-semibold text-[#12304A]">
                Why are direct online payments currently inactive?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                PMSI strictly complies with Pakistani statutory requirements. Until formal non-profit statutory
                registration and official institutional bank accounts are completed, public donation collection is kept
                inactive to protect donors and uphold financial integrity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 space-y-2">
              <h4 className="font-semibold text-[#12304A]">
                Can international foundations commit grant funds now?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Foundations and philanthropic entities can engage in exploratory discussions and concept note reviews
                via our Partnership Inquiry system. Formal grant execution will take place under verified non-profit
                protocols.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 space-y-2">
              <h4 className="font-semibold text-[#12304A]">
                When will official organizational accounts be active?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Official accounts will be published immediately following the issuance of regulatory clearances. Notice
                will be published prominently across this platform and communicated to verified institutional partners.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 space-y-2">
              <h4 className="font-semibold text-[#12304A]">
                Does PMSI charge or collect fees for support requests?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No. PMSI never charges communities or beneficiaries for humanitarian assistance, education scholarships,
                or protection support. All initiatives are purely humanitarian and non-discriminatory.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: Institutional Outreach Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#12304A] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-[#167E83]/40 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Connect With Our Humanitarian Coordination Office
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              For questions regarding our proposed humanitarian programs, compliance posture, or to be notified when
              statutory donation channels open, reach out through verified institutional channels.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/partnership-inquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-md"
            >
              <span>Partnership Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
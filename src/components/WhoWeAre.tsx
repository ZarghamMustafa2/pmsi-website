import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Users2, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="py-24 bg-[#F7F9FA] text-[#12304A] border-b border-slate-200/80 bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
              Who We Are
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-6">
            Committed to Dignity, Equality and Humanitarian Action
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            Pakistan Minorities Support Initiative (PMSI) is an independent humanitarian initiative
            founded on the universal conviction that all human beings possess equal worth, inherent
            dignity, and an unalienable right to security and opportunity.
          </p>
        </div>

        {/* Narrative & Institutional Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Context Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Across Pakistan, marginalized communities confront severe socio-economic disparities and
              systemic barriers. Religious minorities—including Christian, Ahmadi, Hindu, and Sikh
              populations—alongside transgender citizens and socially disenfranchised families, frequently
              encounter disproportionate obstacles in securing legal protection, educational access, and
              equal opportunities.
            </p>

            <p>
              Compounded by recurring climate disasters and structural poverty, vulnerable households and
              orphaned children remain at acute risk. PMSI was established to address these critical
              humanitarian challenges through principled advocacy, inclusive assistance initiatives, and
              ethical collaboration grounded in strict non-partisanship and universal human dignity.
            </p>

            {/* Core Values Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#167E83]/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#167E83] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#12304A]">
                  Uncompromising Protection of Vulnerable Groups
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#167E83]/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#167E83] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#12304A]">
                  Inclusive & Equal Humanitarian Assistance
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#167E83]/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#167E83] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#12304A]">
                  Educational Access for Marginalized Children
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#167E83]/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#167E83] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#12304A]">
                  Fiscal Transparency & Ethical Stewardship
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#167E83] hover:text-[#106064] transition-colors group"
              >
                <span>Read More About Our Mission & Approach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Institutional Highlights Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#12304A] text-white shadow-xl border border-[#167E83]/30 relative overflow-hidden">
              <div
                className="absolute -top-16 -right-16 w-40 h-40 bg-[#167E83]/20 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-[#D8A85B]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#D8A85B]">
                  Our Operating Premise
                </span>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl text-slate-100 font-light italic leading-relaxed mb-6">
                "Human dignity is indivisible. A resilient, just society is built when every community is
                safeguarded, every individual is respected, and the most vulnerable are given the tools to thrive."
              </blockquote>

              <div className="pt-6 border-t border-white/10 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#167E83]/30 flex items-center justify-center text-[#D8A85B] shrink-0">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white uppercase tracking-wider">Humanitarian Stance</div>
                    <div className="text-xs text-slate-200">Ground-level, community-centered action</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#167E83]/30 flex items-center justify-center text-[#D8A85B] shrink-0">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white uppercase tracking-wider">Non-Discriminatory Aid</div>
                    <div className="text-xs text-slate-200">Support distributed strictly on need and vulnerability</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#167E83]/30 flex items-center justify-center text-[#D8A85B] shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white uppercase tracking-wider">Rights Advocacy</div>
                    <div className="text-xs text-slate-200">Constructive engagement with institutional partners</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#167E83] mb-2">
                Primary Beneficiaries
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                PMSI directly aligns its programs with religious minorities (including Christian and Ahmadi communities),
                transgender individuals, disaster-affected rural families, and orphaned youth across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

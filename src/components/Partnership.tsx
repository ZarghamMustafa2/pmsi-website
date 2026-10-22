import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Building2, Globe2, ShieldCheck, Mail, Heart } from 'lucide-react';

interface PartnershipProps {
  onExploreClick?: () => void;
}

export const Partnership: React.FC<PartnershipProps> = ({ onExploreClick }) => {
  return (
    <section id="partnership" className="py-12 sm:py-20 lg:py-24 bg-white text-[#12304A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-[#12304A] via-[#12304A] to-[#0d2235] text-white shadow-2xl border border-[#167E83]/30 relative overflow-hidden">
          {/* Subtle geometric light effect */}
          <div
            className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#167E83]/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D8A85B]/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Donor / Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <Handshake className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200">
                Institutional & Philanthropic Collaboration
              </span>
            </div>

            {/* Exact Heading from Specification */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-5">
              Partner With Us to Advance Human Dignity
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#167E83] via-[#D8A85B] to-[#167E83] mx-auto rounded-full mb-6" />

            {/* Refined Supporting Copy from Step 8 */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl mx-auto mb-10 text-balance">
              We welcome dialogue with international foundations, humanitarian organizations and institutions
              committed to protecting minority rights, supporting vulnerable communities and advancing
              equal opportunities in Pakistan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12">
              <Link
                to="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] shadow-lg shadow-[#D8A85B]/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 text-[#12304A] fill-[#12304A]" />
                <span>Donate Now</span>
              </Link>

              <Link
                to="/partner-with-us"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#116064] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#1DA0A6]/40 shadow-lg shadow-[#167E83]/30 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-5 h-5 text-[#D8A85B]" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white border border-white/30 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#167E83]" />
                <span>Contact PMSI</span>
              </Link>
            </div>

            {/* Partnership Modalities (Transparent & Professional) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left pt-10 border-t border-white/10">
              <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#D8A85B]/40 transition-colors">
                <div>
                  <Building2 className="w-6 h-6 text-[#D8A85B] mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-2">Grant & Foundation Support</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Collaborative funding arrangements for dedicated programmatic initiatives, education, and emergency aid.
                  </p>
                </div>
              </div>

              <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#1DA0A6]/40 transition-colors">
                <div>
                  <Globe2 className="w-6 h-6 text-[#1DA0A6] mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-2">International NGO Coordination</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Joint humanitarian coordination, knowledge exchange, and targeted community interventions.
                  </p>
                </div>
              </div>

              <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#D8A85B]/40 transition-colors">
                <div>
                  <ShieldCheck className="w-6 h-6 text-[#D8A85B] mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-2">Rights & Advisory Coalitions</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Civil society advocacy, legal rights literacy, and human rights safeguarding alliances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

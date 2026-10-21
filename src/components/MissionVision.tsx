import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission-vision" className="py-24 bg-[#12304A] text-white relative overflow-hidden bg-grid-dark">
      {/* Subtle atmospheric accents */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#167E83]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D8A85B]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A85B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Purpose & Horizon
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-5">
            Our Mission & Vision
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Guided by international humanitarian principles, PMSI translates ethical conviction into
            tangible protections, inclusive programs, and enduring institutional progress.
          </p>
        </div>

        {/* Dual Balanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="relative flex flex-col justify-between h-full p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-2xl hover:border-[#167E83]/80 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#167E83]/20 border border-[#167E83]/50 flex items-center justify-center text-[#1DA0A6] shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#1DA0A6]">
                      Organizational Mandate
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-300 border border-white/10 px-2.5 py-1 rounded">
                  01 / MANDATE
                </span>
              </div>

              {/* Exact Mission Statement from Specification */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#12304A] border border-white/10 mb-6 shadow-inner">
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-white font-normal leading-relaxed italic">
                  "Promoting dignity, equality, protection and meaningful opportunities for vulnerable
                  communities throughout Pakistan."
                </p>
              </div>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Our mission drives us to be present where vulnerabilities are acute. Through principled
                  humanitarian relief, educational empowerment, and community advocacy, we work to remove
                  barriers that consign minority and marginalized populations to systemic hardship.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 flex items-center gap-3 text-xs text-slate-200 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#D8A85B] shrink-0" />
              <span>Ground-level humanitarian response rooted in human dignity</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative flex flex-col justify-between h-full p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-2xl hover:border-[#D8A85B]/80 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#D8A85B]/20 border border-[#D8A85B]/50 flex items-center justify-center text-[#D8A85B] shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                      Long-Term Aspiration
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#D8A85B] border border-[#D8A85B]/20 px-2.5 py-1 rounded">
                  02 / HORIZON
                </span>
              </div>

              {/* Exact Vision Statement from Specification */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#12304A] border border-[#D8A85B]/20 mb-6 shadow-inner">
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-white font-normal leading-relaxed italic">
                  "A Pakistan where every individual, regardless of religion, identity or background,
                  has access to safety, rights, education and opportunity."
                </p>
              </div>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  We envision an inclusive society where diversity is recognized as a source of strength,
                  where justice operates equitably for every citizen, and where no child is denied a future
                  due to their faith, gender identity, or socio-economic heritage.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 flex items-center gap-3 text-xs text-slate-200 font-medium">
              <HeartHandshake className="w-4 h-4 text-[#D8A85B] shrink-0" />
              <span>A future built on equity, safety, justice, and shared opportunity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

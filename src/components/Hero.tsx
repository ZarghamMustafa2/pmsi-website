import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Users, BookOpen, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-[#12304A] text-white overflow-hidden bg-grid-dark"
    >
      {/* Subtle atmospheric ambient glow - No stock photos or placeholders */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#167E83]/25 via-[#12304A]/0 to-[#D8A85B]/15 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-[#167E83]/15 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Institutional Tagline & Scope Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-sm mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D8A85B] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200">
              Pakistan Minorities Support Initiative
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-xs sm:text-sm font-medium text-[#D8A85B]">
              Protecting Rights. Empowering Communities. Restoring Hope.
            </span>
          </div>

          {/* Primary Heading (Exact wording from specification) */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] mb-5">
            Protecting Dignity.{' '}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D8A85B]">
              Advancing Equality.
            </span>{' '}
            <span className="block mt-2 font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#D8A85B] via-[#eed19c] to-white">
              Creating Hope.
            </span>
          </h1>

          {/* Supporting Focus Statement (Clearly visible focus areas) */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#167E83]/20 border border-[#1DA0A6]/30 text-[#D8A85B] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
            <span>Minority Rights • Humanitarian Protection • Education • Inclusive Development</span>
          </div>

          {/* Refined Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
            Pakistan Minorities Support Initiative (PMSI) is dedicated to advancing the rights, dignity
            and protection of religious minorities—including Christian, Ahmadi, Hindu, and Sikh
            communities—alongside transgender inclusion, child welfare, and flood relief across Pakistan.
          </p>

          {/* Action CTAs (Exact button texts from specification) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <a
              href="#mission-vision"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#126367] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#1DA0A6]/40 shadow-lg shadow-[#167E83]/30 hover:shadow-xl hover:shadow-[#167E83]/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5 text-[#D8A85B]" />
              <span>Explore Our Mission</span>
            </a>

            <Link
              to="/partner-with-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg text-base font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white border border-white/20 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Partner With PMSI</span>
              <ArrowRight className="w-5 h-5 text-[#167E83] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Programmatic Pillars Highlight Grid (Text & Icon Architecture - No Photos) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 text-left pt-8 border-t border-white/10">
            <Link
              to="/programs/minority-rights"
              className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm hover:border-[#D8A85B] hover:bg-white/[0.08] transition-all group"
            >
              <div>
                <Shield className="w-5 h-5 text-[#D8A85B] mb-2.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-semibold text-white group-hover:text-[#D8A85B] transition-colors">
                  Minority Protection
                </div>
              </div>
              <div className="text-xs text-slate-200 mt-1.5">Dignity & Equal Rights</div>
            </Link>

            <Link
              to="/programs/transgender-inclusion"
              className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm hover:border-[#1DA0A6] hover:bg-white/[0.08] transition-all group"
            >
              <div>
                <Users className="w-5 h-5 text-[#1DA0A6] mb-2.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-semibold text-white group-hover:text-[#1DA0A6] transition-colors">
                  Inclusion & Equality
                </div>
              </div>
              <div className="text-xs text-slate-200 mt-1.5">Transgender Empowerment</div>
            </Link>

            <Link
              to="/programs/disaster-relief"
              className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm hover:border-[#D8A85B] hover:bg-white/[0.08] transition-all group"
            >
              <div>
                <HeartHandshake className="w-5 h-5 text-[#D8A85B] mb-2.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-semibold text-white group-hover:text-[#D8A85B] transition-colors">
                  Humanitarian Relief
                </div>
              </div>
              <div className="text-xs text-slate-200 mt-1.5">Disaster-Affected Families</div>
            </Link>

            <Link
              to="/programs/education"
              className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm hover:border-[#1DA0A6] hover:bg-white/[0.08] transition-all group"
            >
              <div>
                <BookOpen className="w-5 h-5 text-[#1DA0A6] mb-2.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-semibold text-white group-hover:text-[#1DA0A6] transition-colors">
                  Education Access
                </div>
              </div>
              <div className="text-xs text-slate-200 mt-1.5">Vulnerable Child Welfare</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

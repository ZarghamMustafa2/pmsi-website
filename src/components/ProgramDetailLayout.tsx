import React from 'react';
import { Link } from 'react-router-dom';
import type { ProgramData } from '../data/programsData';
import { Breadcrumb } from './Breadcrumb';
import { SEO } from './SEO';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Users2,
  Target,
  Sparkles,
  Handshake,
  Compass,
  HeartHandshake,
  Coins,
} from 'lucide-react';

interface ProgramDetailLayoutProps {
  program: ProgramData;
}

export const ProgramDetailLayout: React.FC<ProgramDetailLayoutProps> = ({ program }) => {
  const Icon = program.icon;

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title={program.title}
        description={program.summary}
      />

      {/* Program Hero Header */}
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
          <Breadcrumb
            items={[
              { label: 'Programs', href: '/programs' },
              { label: program.title },
            ]}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Icon className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                {program.category}
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Intended Humanitarian Priority</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              {program.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-slate-200 font-light italic leading-relaxed mb-6">
              "{program.introHeading}"
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
              {program.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            {/* 1. The Humanitarian Problem */}
            <section className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-700">
                    Humanitarian Context
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#12304A]">
                    The Humanitarian Challenge
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                {program.humanitarianChallenge.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* 2. The Affected Community */}
            <section className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 border border-[#167E83]/20 flex items-center justify-center text-[#167E83]">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#167E83]">
                    Focus Groups
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#12304A]">
                    Communities & Individuals Concerned
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {program.communitiesConcerned.map((community, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-[#F7F9FA] border border-slate-200/80 hover:border-[#167E83]/40 transition-colors"
                  >
                    <h3 className="text-base font-bold text-[#12304A] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#167E83]" />
                      {community.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {community.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Why Assistance Matters */}
            <section className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D8A85B]/20 border border-[#D8A85B]/40 flex items-center justify-center text-[#B8893F]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#D8A85B]">
                    Impact Imperative
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#12304A]">
                    Why Assistance Matters
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                {program.whyAssistanceMatters.map((paragraph, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-[#F7F9FA] border border-slate-200/70 text-slate-700 leading-relaxed"
                  >
                    <p>{paragraph}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. PMSI's Proposed Response: Strategic Priorities */}
            <section className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#12304A]/10 border border-[#12304A]/20 flex items-center justify-center text-[#12304A]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#167E83]">
                    PMSI's Proposed Response
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#12304A]">
                    Intended Support Priorities
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                As an establishing humanitarian initiative, PMSI has outlined these core strategic priorities
                to guide programmatic design, field needs assessments, and international stakeholder collaboration:
              </p>

              <div className="space-y-3.5">
                {program.supportPriorities.map((priority, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F7F9FA] border border-slate-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#167E83] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-[#12304A] leading-relaxed">
                      {priority}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Proposed Areas of Intervention */}
            <section className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 border border-[#167E83]/20 flex items-center justify-center text-[#167E83]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#167E83]">
                    Operational Roadmap
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#12304A]">
                    Proposed Areas of Intervention
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {program.proposedInterventions.map((intervention, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-[#F7F9FA] border border-slate-200/80 hover:border-[#167E83] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-[#167E83] mb-2 block">
                        INTERVENTION 0{index + 1}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-[#12304A] mb-2.5">
                        {intervention.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {intervention.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Intended Social Benefits */}
            <section className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-700">
                    Anticipated Outcomes
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#12304A]">
                    Intended Social Benefits
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {program.expectedSocialBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200/60 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar: Partnership & Donor Journey (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {/* 6. Potential Partnership Opportunities Card */}
            <div className="p-5 sm:p-7 rounded-2xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-xl relative overflow-hidden">
              <div
                className="absolute -top-12 -right-12 w-32 h-32 bg-[#167E83]/30 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2 mb-4">
                <Handshake className="w-5 h-5 text-[#D8A85B]" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#D8A85B]">
                  Donor Collaboration
                </span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                Partnership Opportunities
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                We invite international foundations, humanitarian agencies, and legal defense networks to partner
                with PMSI on {program.shortTitle} programming.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-white/10 mb-6">
                {program.partnershipOpportunities.map((opp, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="text-xs font-bold text-white mb-1">{opp.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{opp.description}</p>
                  </div>
                ))}
              </div>

              {/* Direct Donor Action CTAs */}
              <div className="space-y-3 pt-2">
                <Link
                  to={`/partnership-inquiry?category=${encodeURIComponent(program.category)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-md border border-[#167E83]/70 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Discuss Partnership for This Program</span>
                  <ArrowRight className="w-4 h-4 text-[#D8A85B]" />
                </Link>

                <Link
                  to="/funding-opportunities"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
                >
                  <Coins className="w-3.5 h-3.5 text-[#D8A85B]" />
                  <span>View Proposed Funding Areas</span>
                </Link>
              </div>
            </div>

            {/* Quick Navigation to Other Programs */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                All Focus Areas
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/programs/minority-rights"
                    className={`block p-2 rounded-lg transition-colors ${
                      program.slug === 'minority-rights'
                        ? 'bg-[#167E83]/10 text-[#167E83] font-bold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#12304A]'
                    }`}
                  >
                    1. Minorities Rights & Protection
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/transgender-inclusion"
                    className={`block p-2 rounded-lg transition-colors ${
                      program.slug === 'transgender-inclusion'
                        ? 'bg-[#167E83]/10 text-[#167E83] font-bold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#12304A]'
                    }`}
                  >
                    2. Transgender Inclusion & Empowerment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/disaster-relief"
                    className={`block p-2 rounded-lg transition-colors ${
                      program.slug === 'disaster-relief'
                        ? 'bg-[#167E83]/10 text-[#167E83] font-bold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#12304A]'
                    }`}
                  >
                    3. Disaster Relief & Emergency Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/child-welfare"
                    className={`block p-2 rounded-lg transition-colors ${
                      program.slug === 'child-welfare'
                        ? 'bg-[#167E83]/10 text-[#167E83] font-bold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#12304A]'
                    }`}
                  >
                    4. Orphan & Vulnerable Child Welfare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/education"
                    className={`block p-2 rounded-lg transition-colors ${
                      program.slug === 'education'
                        ? 'bg-[#167E83]/10 text-[#167E83] font-bold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#12304A]'
                    }`}
                  >
                    5. Education & Learning Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/community-welfare"
                    className={`block p-2 rounded-lg transition-colors ${
                      program.slug === 'community-welfare'
                        ? 'bg-[#167E83]/10 text-[#167E83] font-bold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#12304A]'
                    }`}
                  >
                    6. Community Welfare & Human Rights
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

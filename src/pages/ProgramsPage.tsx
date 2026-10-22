import React from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../data/programsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import { ArrowRight, Compass, Handshake } from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Humanitarian Programs & Focus Areas"
        description="Explore the six core humanitarian programs of the Pakistan Minorities Support Initiative (PMSI), addressing minority rights, transgender inclusion, flood disaster relief, child welfare, education access, and community welfare."
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
          <Breadcrumb items={[{ label: 'Humanitarian Programs' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Compass className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Programmatic Architecture
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Intended Interventions</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Our Humanitarian Programs
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              PMSI focuses on six dedicated program domains designed to tackle systemic vulnerabilities,
              defend fundamental human rights, and provide principled relief to marginalized populations across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Six Program Cards Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#12304A] mb-4">
              Core Areas of Intended Support
            </h2>
            <div className="w-16 h-1 bg-[#167E83] rounded-full mb-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Each program represents a targeted, community-informed priority aimed at addressing specific
              humanitarian deficits. Select any program below to review the context, focus communities, proposed
              interventions, and collaboration opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programsData.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.id}
                  className="group relative flex flex-col justify-between p-5 sm:p-7 md:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Top Bar with Icon & Program Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F9FA] border border-slate-200 flex items-center justify-center text-[#167E83] group-hover:bg-[#167E83] group-hover:text-white transition-colors duration-200 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#D8A85B] transition-colors">
                        PROGRAM {prog.id}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#167E83] bg-[#167E83]/10 px-2 py-0.5 rounded">
                        {prog.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#12304A] mb-3 group-hover:text-[#167E83] transition-colors">
                      {prog.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {prog.summary}
                    </p>
                  </div>

                  {/* Learn More Link opening detailed program page */}
                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      to={`/programs/${prog.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#167E83] group-hover:text-[#106064] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Institutional Partnership Invitation Banner */}
          <div className="mt-12 sm:mt-20 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D8A85B] mb-3">
                <Handshake className="w-3.5 h-3.5" />
                <span>International Collaboration</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
                Partner With Us on Program Delivery
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                PMSI actively welcomes institutional funding dialogues, technical cooperation, and joint
                programmatic initiatives with international foundations and humanitarian agencies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
              <Link
                to="/funding-opportunities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#167E83] shadow-md transition-all text-center"
              >
                <span>View Proposed Funding Areas</span>
                <ArrowRight className="w-4 h-4 text-[#D8A85B]" />
              </Link>
              <Link
                to="/partner-with-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white shadow-md transition-all text-center"
              >
                <span>Partnerships & FAQs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

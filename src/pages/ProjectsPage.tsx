import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  getUpcomingProjects,
  getOngoingProjects,
  getCompletedProjects,
  type ProjectStatus,
} from '../data/projectsData';
import {
  Sparkles,
  ArrowRight,
  Handshake,
  CheckCircle2,
  MapPin,
  Users,
  Clock,
  FolderKanban,
  CheckCircle,
  FileText,
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as ProjectStatus) || 'upcoming';
  const [activeTab, setActiveTab] = useState<ProjectStatus>(
    ['completed', 'ongoing', 'upcoming'].includes(initialTab) ? initialTab : 'upcoming'
  );

  const upcomingProjects = getUpcomingProjects();
  const ongoingProjects = getOngoingProjects();
  const completedProjects = getCompletedProjects();

  const handleTabChange = (tab: ProjectStatus) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Our Humanitarian Projects — Pakistan Minorities Support Initiative"
        description="Explore PMSI's humanitarian project priorities, community-focused initiatives, and opportunities to support meaningful change across Pakistan."
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
          <Breadcrumb items={[{ label: 'Our Projects' }]} />

          <div className="max-w-4xl">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <FolderKanban className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Project Portfolio & Priorities
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Humanitarian Action</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
              Our Humanitarian Projects
            </h1>

            {/* Exact Required Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl mb-8">
              Explore PMSI's humanitarian project priorities, community-focused initiatives, and opportunities to support meaningful change across Pakistan.
            </p>

            {/* Tab Quick Filter Bar */}
            <div className="flex flex-col sm:flex-row flex-wrap sm:inline-flex p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md gap-1.5 sm:gap-0 max-w-full">
              <button
                type="button"
                onClick={() => handleTabChange('upcoming')}
                className={`w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'upcoming'
                    ? 'bg-[#D8A85B] text-[#12304A] shadow-md font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Upcoming Projects</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                  activeTab === 'upcoming' ? 'bg-[#12304A]/20 text-[#12304A]' : 'bg-white/15 text-slate-200'
                }`}>
                  {upcomingProjects.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('ongoing')}
                className={`w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'ongoing'
                    ? 'bg-[#167E83] text-white shadow-md font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Ongoing Projects</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                  activeTab === 'ongoing' ? 'bg-white/20 text-white' : 'bg-white/15 text-slate-200'
                }`}>
                  {ongoingProjects.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('completed')}
                className={`w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'completed'
                    ? 'bg-white text-[#12304A] shadow-md font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>Completed Projects</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                  activeTab === 'completed' ? 'bg-slate-200 text-[#12304A]' : 'bg-white/15 text-slate-200'
                }`}>
                  {completedProjects.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* ========================================================================= */}
        {/* TAB 1: UPCOMING PROJECTS — FUNDING REQUIRED (MOST IMPORTANT CATEGORY)     */}
        {/* ========================================================================= */}
        {activeTab === 'upcoming' && (
          <div className="space-y-12">
            {/* Prominent Header Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12304A] via-[#12304A] to-[#164366] text-white border border-[#D8A85B]/40 shadow-xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-96 h-96 bg-[#D8A85B]/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8A85B]/20 border border-[#D8A85B]/40 text-[#D8A85B] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Funding Partnerships Sought</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                  Upcoming Humanitarian Projects
                </h2>
                <h3 className="font-serif text-xl sm:text-2xl text-[#D8A85B] italic font-normal">
                  "Your Support Can Help Turn These Plans Into Action."
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal pt-1">
                  PMSI is seeking funding partnerships to help develop and implement proposed humanitarian initiatives supporting vulnerable and marginalized communities across Pakistan.
                </p>
              </div>
            </div>

            {/* Upcoming Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#D8A85B] shadow-xs hover:shadow-xl transition-all duration-300 p-5 sm:p-7 md:p-8 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Top Row: Category & Status Badge */}
                    <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#167E83]/10 text-[#167E83] border border-[#167E83]/20">
                          {project.category}
                        </span>
                        {project.proposalAvailable && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#D8A85B]/20 text-amber-900 border border-[#D8A85B]/40">
                            Proposal Ready
                          </span>
                        )}
                      </div>
                      {/* Tasteful amber/gold funding status indicator */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-amber-50 text-amber-900 border border-amber-300 shadow-2xs shrink-0">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span>Status: Funding Required</span>
                      </span>
                    </div>

                    {/* Project Title */}
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#12304A] group-hover:text-[#167E83] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                        {project.summary}
                      </p>
                    </div>

                    {/* Metadata Specs */}
                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                      {/* Location */}
                      <div className="flex items-start gap-2 text-slate-700">
                        <MapPin className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">Intended Location: </span>
                          <span className="text-slate-600">{project.location}</span>
                        </div>
                      </div>

                      {/* Community Intended to Benefit */}
                      <div className="flex items-start gap-2 text-slate-700">
                        <Users className="w-4 h-4 text-[#D8A85B] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">Community to Benefit: </span>
                          <span className="text-slate-600 leading-relaxed">{project.communityBeneficiary}</span>
                        </div>
                      </div>

                      {/* Project Objectives Highlight */}
                      <div className="pt-2">
                        <span className="font-bold text-slate-900 block mb-1.5 uppercase tracking-wider text-[11px] text-[#12304A]">
                          Key Objectives:
                        </span>
                        <ul className="space-y-1.5 pl-1">
                          {project.objectives.slice(0, 3).map((obj, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#167E83] shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Funding Requirement Indicator */}
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/90 text-amber-950">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                          Funding Requirement:
                        </span>
                        <span className="text-xs font-semibold text-amber-950">
                          {project.fundingAmountUSD
                            ? `USD $${project.fundingAmountUSD.toLocaleString()} (Official Proposal Dossier Ready)`
                            : project.fundingRequirement}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                    {/* Primary Button: Discuss Funding Partnership */}
                    <Link
                      to={`/partnership-inquiry?project=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <Handshake className="w-4 h-4 text-[#D8A85B]" />
                      <span>Discuss Funding Partnership</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {project.proposalAvailable ? (
                      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
                        <Link
                          to={`/projects/${project.slug}/proposal`}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#12304A] bg-[#ECD29E]/50 hover:bg-[#ECD29E]/80 border border-[#D8A85B]/60 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#167E83]" />
                          <span>View Proposal</span>
                        </Link>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-slate-200/80 border border-slate-200 transition-colors"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </Link>
                      </div>
                    ) : (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-slate-200/80 border border-slate-200 transition-colors"
                      >
                        <span>View Project Details</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: ONGOING PROJECTS (GENUINE STATUS & EMPTY STATE)                   */}
        {/* ========================================================================= */}
        {activeTab === 'ongoing' && (
          <div className="space-y-8">
            {ongoingProjects.length === 0 ? (
              <div className="max-w-2xl mx-auto p-10 sm:p-14 rounded-3xl bg-white border border-slate-200 text-center space-y-5 shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-[#167E83]/10 text-[#167E83] flex items-center justify-center mx-auto border border-[#167E83]/20">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#167E83] bg-[#167E83]/10 px-3 py-1 rounded-full">
                    Implementation Transparency
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#12304A] pt-1">
                    No Ongoing Operational Projects Currently Active
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  PMSI is currently in its establishing phase, focusing on developing institutional partnerships for our proposed humanitarian initiatives. In strict accordance with our truthfulness and non-profit ethics standards, we only report active operations when formal grant agreements have been executed and field implementation is genuinely underway.
                </p>

                <div className="p-5 rounded-2xl bg-[#F7F9FA] border border-slate-200 text-left text-xs text-slate-700 space-y-2 max-w-lg mx-auto">
                  <span className="font-bold text-[#12304A] block uppercase tracking-wider text-[11px]">
                    Project Frameworks in Planning Phase:
                  </span>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                    <li><strong className="text-slate-900">Minority Rights Awareness Initiative</strong> (Status: Planning)</li>
                    <li><strong className="text-slate-900">Transgender Skills Development Program</strong> (Status: Planning)</li>
                    <li><strong className="text-slate-900">Flood Recovery Assistance Program</strong> (Status: Planning)</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200/80">
                    No unverified progress percentages, simulated milestones, or operational claims are published until genuine field operations commence.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleTabChange('upcoming')}
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#12304A] hover:bg-[#167E83] transition-all shadow-xs cursor-pointer text-center"
                  >
                    <Sparkles className="w-4 h-4 text-[#D8A85B]" />
                    <span>Explore Upcoming Projects Requiring Funding</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ongoingProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#167E83] shadow-xs hover:shadow-xl transition-all p-5 sm:p-7 md:p-8 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#167E83]/10 text-[#167E83]">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-900 border border-blue-300">
                          Status: {project.implementationStatus || 'Ongoing'}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#12304A] group-hover:text-[#167E83] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.summary}
                      </p>
                      <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                        <div className="flex items-start gap-2 text-slate-700">
                          <MapPin className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">Location: </span>
                            <span className="text-slate-600">{project.location}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <Users className="w-4 h-4 text-[#D8A85B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">Intended Beneficiaries: </span>
                            <span className="text-slate-600">{project.communityBeneficiary}</span>
                          </div>
                        </div>
                        {project.startDate && (
                          <div className="flex items-start gap-2 text-slate-700">
                            <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-slate-900">Start Date: </span>
                              <span className="text-slate-600">{project.startDate}</span>
                            </div>
                          </div>
                        )}
                        {project.verifiedProgress && (
                          <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-200/80 text-[11px] text-blue-950">
                            <span className="font-bold block text-blue-900">Verified Progress:</span>
                            <span>{project.verifiedProgress}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#12304A] hover:bg-[#167E83] transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: COMPLETED PROJECTS (GENUINE STATUS & EMPTY STATE)                 */}
        {/* ========================================================================= */}
        {activeTab === 'completed' && (
          <div className="space-y-8">
            {completedProjects.length === 0 ? (
              <div className="max-w-2xl mx-auto p-10 sm:p-14 rounded-3xl bg-white border border-slate-200 text-center space-y-5 shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center mx-auto border border-slate-200">
                  <CheckCircle className="w-8 h-8 text-slate-500" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    Audited Reporting Standard
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#12304A] pt-1">
                    No Historical Completed Projects on Record
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As an establishing humanitarian initiative currently finalizing statutory non-profit registration in Pakistan, PMSI has not yet concluded completed operational cycles. In adherence to international non-profit credibility covenants, we strictly do not invent historical projects, simulated outcomes, or fictional beneficiary totals.
                </p>

                <div className="p-5 rounded-2xl bg-[#F7F9FA] border border-slate-200 text-left text-xs text-slate-700 space-y-2 max-w-lg mx-auto">
                  <span className="font-bold text-[#12304A] block uppercase tracking-wider text-[11px]">
                    Standardized Frameworks Prepared for Future Verification:
                  </span>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                    <li><strong className="text-slate-900">Minority Children School Support</strong> (Pending Completion Records)</li>
                    <li><strong className="text-slate-900">Winter Relief for Vulnerable Families</strong> (Pending Completion Records)</li>
                    <li><strong className="text-slate-900">Community Education Awareness Program</strong> (Pending Completion Records)</li>
                  </ul>
                  <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200/80">
                    Each future published record will require documented completion dates, activities delivered, audited beneficiary registries, actual results, and supporting audit evidence.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleTabChange('upcoming')}
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#12304A] hover:bg-[#167E83] transition-all shadow-xs cursor-pointer text-center"
                  >
                    <Sparkles className="w-4 h-4 text-[#D8A85B]" />
                    <span>View Proposed Projects Open for Partnership</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-600 shadow-xs hover:shadow-xl transition-all p-5 sm:p-7 md:p-8 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-300">
                          Status: Completed
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#12304A] group-hover:text-emerald-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.summary}
                      </p>
                      <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                        <div className="flex items-start gap-2 text-slate-700">
                          <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">Location: </span>
                            <span className="text-slate-600">{project.location}</span>
                          </div>
                        </div>
                        {project.completionDate && (
                          <div className="flex items-start gap-2 text-slate-700">
                            <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-slate-900">Completion Date: </span>
                              <span className="text-slate-600">{project.completionDate}</span>
                            </div>
                          </div>
                        )}
                        {project.verifiedBeneficiaries && (
                          <div className="flex items-start gap-2 text-slate-700">
                            <Users className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-slate-900">Verified Beneficiaries: </span>
                              <span className="text-slate-600">{project.verifiedBeneficiaries}</span>
                            </div>
                          </div>
                        )}
                        {project.supportingEvidence && (
                          <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-[11px] text-emerald-950">
                            <span className="font-bold block text-emerald-900">Supporting Evidence:</span>
                            <span>{project.supportingEvidence}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#12304A] hover:bg-emerald-800 transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Institutional Inquiries Footer Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D8A85B]">
              <Handshake className="w-3.5 h-3.5" />
              <span>Bilateral Collaboration</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Propose a Thematic or Geographic Collaboration
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We welcome dialogue with international foundations, humanitarian trusts, and philanthropic bodies wishing to explore tailored concept notes for vulnerable communities in Pakistan.
            </p>
          </div>

          <Link
            to="/partnership-inquiry"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-md shrink-0 font-medium"
          >
            <span>Submit Partnership Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#12304A]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

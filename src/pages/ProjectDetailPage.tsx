import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import { getProjectBySlug } from '../data/projectsData';
import {
  Sparkles,
  ArrowRight,
  Handshake,
  CheckCircle2,
  MapPin,
  Users,
  Target,
  FileText,
  AlertCircle,
  ArrowLeft,
  Calendar,
  Layers,
  Building2,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F9FA] px-4 py-24 text-center">
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#12304A]">
            Project Not Found
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The project record you are attempting to review does not exist or may have been updated.
          </p>
          <div className="pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#12304A] hover:bg-[#167E83] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isUpcoming = project.status === 'upcoming';
  const isOngoing = project.status === 'ongoing';
  const isCompleted = project.status === 'completed';

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title={`${project.title} — Pakistan Minorities Support Initiative`}
        description={project.summary}
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
          <Breadcrumb
            items={[
              { label: 'Our Projects', href: '/projects' },
              { label: project.title },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            {/* Category & Status Indicators */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-[#D8A85B]">
                {project.category}
              </span>

              {isUpcoming && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-400/40 text-[#ECD29E]">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>
                    Status: Funding Required {project.fundingAmountUSD ? `(USD $${project.fundingAmountUSD.toLocaleString()})` : ''}
                  </span>
                </span>
              )}

              {isOngoing && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 border border-blue-400/40 text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Status: {project.implementationStatus === 'Planning' ? 'Planning Phase' : 'Ongoing'}</span>
                </span>
              )}

              {isCompleted && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 border border-emerald-400/40 text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Status: Completed & Verified</span>
                </span>
              )}

              <span className="text-xs font-mono text-slate-400 border border-white/10 px-2.5 py-1 rounded">
                Ref: {project.id}
              </span>
            </div>

            {/* Project Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              {project.title}
            </h1>

            {/* Summary */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl pt-2">
              {project.summary}
            </p>

            {/* Quick Strategic Dossier Summary */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Total Funding Required:</span>
                <span className="font-bold text-[#D8A85B] text-sm">
                  {project.fundingAmountUSD ? `USD $${project.fundingAmountUSD.toLocaleString()}` : project.fundingRequirement}
                </span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Target Beneficiaries:</span>
                <span className="font-semibold text-white">{project.communityBeneficiary}</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Location:</span>
                <span className="font-semibold text-white">{project.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Editorial Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Formal Proposal Dossier Callout Banner (if proposal available) */}
            {project.proposalAvailable && (
              <section className="bg-gradient-to-r from-[#12304A] to-[#164366] text-white p-7 sm:p-8 rounded-2xl border border-[#D8A85B]/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8A85B]/20 border border-[#D8A85B]/40 text-[#D8A85B] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official Funding Proposal Available</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Complete 14-Section Proposal Dossier
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                    Review the verified USD {project.fundingAmountUSD ? `$${project.fundingAmountUSD.toLocaleString()}` : '30,000'} line-item budget breakdown, 12-month implementation timeline, and institutional safeguarding framework.
                  </p>
                </div>
                <Link
                  to={`/projects/${project.slug}/proposal`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-md shrink-0 font-medium"
                >
                  <FileText className="w-4 h-4" />
                  <span>Read Full Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </section>
            )}

            {/* 1. Humanitarian Background */}
            <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#167E83]">
                <Layers className="w-4 h-4" />
                <span>Context & Strategic Rationale</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12304A]">
                Humanitarian Background
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.humanitarianBackground}
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
                {project.description}
              </p>
            </section>

            {/* 2. Objectives */}
            <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#167E83]">
                <Target className="w-4 h-4" />
                <span>Strategic Roadmap</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12304A]">
                Project Objectives
              </h2>
              <div className="grid grid-cols-1 gap-3.5 pt-1">
                {project.objectives.map((obj, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F7F9FA] border border-slate-200/80 flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#167E83] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium leading-relaxed">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Planned or Completed Activities */}
            <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#167E83]">
                <Calendar className="w-4 h-4" />
                <span>
                  {isCompleted
                    ? 'Delivered Interventions'
                    : isOngoing && project.implementationStatus === 'Planning'
                    ? 'Current Planning Activities'
                    : 'Proposed Educational Activities'}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12304A]">
                {isCompleted
                  ? 'Activities Delivered'
                  : isOngoing && project.implementationStatus === 'Planning'
                  ? 'Current Operational Activities (Planning Phase)'
                  : 'Proposed Educational & Community Activities'}
              </h2>
              <div className="space-y-3 pt-1">
                {(project.activitiesDelivered || project.currentActivities || project.activities).map((act, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 hover:border-[#167E83] transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#167E83]/10 text-[#167E83] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-sm text-slate-700 leading-relaxed font-normal">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Expected or Verified Outcomes */}
            <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#D8A85B]">
                <Sparkles className="w-4 h-4" />
                <span>{isCompleted ? 'Verified Social Impact' : 'Expected Outcomes & Social Impact'}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12304A]">
                {isCompleted ? 'Actual Results' : 'Expected Humanitarian Outcomes'}
              </h2>
              <div className="space-y-3 pt-1">
                {(project.actualResults || project.verifiedResults || project.expectedOutcomes || []).map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 flex items-start gap-3.5 text-amber-950"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. U.S. Corporate Philanthropy & Funding Opportunities (Informational Research Directory) */}
            {project.corporatePhilanthropy && (
              <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-8">
                {/* Header & Context */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#12304A]/10 text-[#12304A]">
                      <Building2 className="w-3.5 h-3.5 text-[#167E83]" />
                      <span>Institutional Donor Engagement</span>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-300">
                      Funding Required: USD $30,000
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12304A]">
                    {project.corporatePhilanthropy.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
                    {project.corporatePhilanthropy.description}
                  </p>
                </div>

                {/* Prominent Legal Disclaimer & Non-Affiliation Transparency Notice */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/90 border-2 border-amber-300 text-amber-950 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                    <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Prospective Research Reference & Transparency Notice</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-amber-950">
                    {project.corporatePhilanthropy.disclaimer}
                  </p>
                </div>

                {/* Research Targets Grid (Company names and official funding links as research references only) */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <h3 className="font-serif text-lg font-bold text-[#12304A]">
                      Prospective U.S. Funding Programs (Research References)
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      5 Institutional Research Targets • No Affiliation Implied
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.corporatePhilanthropy.targets.map((target, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-[#F7F9FA] border border-slate-200/90 hover:border-[#167E83] transition-all flex flex-col justify-between group space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-base sm:text-lg font-bold text-[#12304A] group-hover:text-[#167E83] transition-colors">
                              {target.name}
                            </h4>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-700 border border-slate-300 shrink-0">
                              Research Target
                            </span>
                          </div>

                          <div className="text-xs font-semibold text-[#167E83]">
                            {target.focusArea}
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {target.alignment}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-200/80">
                          <a
                            href={target.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167E83] hover:text-[#106064] hover:underline"
                          >
                            <span>Official Funding Program Information</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dedicated Action Box Emphasizing Project Alignment, USD $30,000, Activities, and Discuss Funding Partnership CTA */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#12304A] to-[#164366] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D8A85B]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Project: {project.title}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                      Funding Required: USD $30,000
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Structured across 5 proposed educational activities (A–E) and verified outcomes to support 150–200 marginalized minority children with learning materials, school access support, and supplementary academic tutoring.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Link
                      to={`/partnership-inquiry?project=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category)}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-md font-medium"
                    >
                      <Handshake className="w-4 h-4" />
                      <span>Discuss Funding Partnership</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to={`/projects/${project.slug}/proposal`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-slate-200" />
                      <span>View Full Proposal</span>
                    </Link>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Specifications & Donor CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            {/* Metadata Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="font-serif text-lg font-bold text-[#12304A] border-b border-slate-100 pb-3">
                Project Profile
              </h3>

              {/* Status */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Implementation Status
                </span>
                {isUpcoming && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Funding Required (Proposed)</span>
                  </div>
                )}
                {isOngoing && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-900 border border-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{project.implementationStatus === 'Planning' ? 'Status: Planning' : 'Ongoing Implementation'}</span>
                  </div>
                )}
                {isCompleted && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Completed & Verified</span>
                  </div>
                )}
              </div>

              {/* Start Date (if ongoing/planning) */}
              {project.startDate && (
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Inception / Start Date
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{project.startDate}</span>
                  </div>
                </div>
              )}

              {/* Completion Date (if completed) */}
              {project.completionDate && (
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Completion Date
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{project.completionDate}</span>
                  </div>
                </div>
              )}

              {/* Location */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Location
                </span>
                <div className="flex items-start gap-2 text-sm font-semibold text-[#12304A]">
                  <MapPin className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Target Beneficiaries */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Intended Beneficiaries
                </span>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <Users className="w-4 h-4 text-[#D8A85B] shrink-0 mt-0.5" />
                  <span>{project.communityBeneficiary}</span>
                </div>
              </div>

              {/* Verified Beneficiaries (if completed) */}
              {project.verifiedBeneficiaries && (
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Verified Beneficiaries
                  </span>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{project.verifiedBeneficiaries}</span>
                  </div>
                </div>
              )}

              {/* Supporting Evidence (if completed) */}
              {project.supportingEvidence && (
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block">
                    Supporting Evidence
                  </span>
                  <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                    {project.supportingEvidence}
                  </p>
                </div>
              )}

              {/* Verified Progress (if ongoing) */}
              {project.verifiedProgress && (
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/90 text-blue-950 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block">
                    Verified Progress
                  </span>
                  <p className="text-xs text-blue-950 leading-relaxed font-medium">
                    {project.verifiedProgress}
                  </p>
                </div>
              )}

              {/* Funding Requirement */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Funding Requirement
                </span>
                <span className="font-serif text-base font-bold text-[#12304A] block">
                  {project.fundingAmountUSD
                    ? `USD $${project.fundingAmountUSD.toLocaleString()}`
                    : project.fundingRequirement}
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                  {project.fundingAmountUSD
                    ? 'Formal line-item 12-month budget fully structured in the official proposal dossier.'
                    : 'Budget formulated collaboratively upon bilateral concept note review. No arbitrary estimates.'}
                </p>
              </div>
            </div>

            {/* Prominent Funding Invitation (Section 6 Requirement) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12304A] to-[#164366] text-white border border-[#D8A85B]/40 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D8A85B]">
                <Sparkles className="w-4 h-4" />
                <span>Funding Opportunity</span>
              </div>

              {/* Exact Required Heading */}
              <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                Help Bring This Humanitarian Project to Life
              </h3>

              {/* Exact Required Supporting Text */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                This proposed initiative requires financial support and institutional collaboration to move toward implementation. We welcome inquiries from foundations, humanitarian organizations and prospective funding partners interested in supporting its objectives.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                {/* Primary Button: Discuss Funding Partnership */}
                <Link
                  to={`/partnership-inquiry?project=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-md font-medium"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Discuss Funding Partnership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Secondary Button: View Project Proposal */}
                <div className="pt-1">
                  {project.proposalAvailable ? (
                    <Link
                      to={`/projects/${project.slug}/proposal`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-[#D8A85B] transition-all shadow-xs"
                    >
                      <FileText className="w-4 h-4 text-[#D8A85B]" />
                      <span>
                        View Project Proposal {project.fundingAmountUSD ? `(USD $${project.fundingAmountUSD.toLocaleString()})` : ''}
                      </span>
                    </Link>
                  ) : (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[11px] text-slate-300 block font-medium">
                        View Project Proposal:
                      </span>
                      <span className="text-[11px] text-slate-400 italic block mt-0.5">
                        {project.proposalNote || 'Proposal Document Available Upon Institutional Request'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Return Link */}
            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#167E83] hover:text-[#106064] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to All Humanitarian Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

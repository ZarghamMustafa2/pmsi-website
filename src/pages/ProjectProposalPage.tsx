import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import { getProjectBySlug } from '../data/projectsData';
import {
  ArrowLeft,
  Printer,
  Handshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const ProjectProposalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const proposal = project?.proposal;

  const handlePrint = () => {
    window.print();
  };

  if (!project || !proposal) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F9FA] px-4 py-24 text-center">
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#12304A]">
            Proposal Document Not Found
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The formal funding proposal document for this initiative is currently in review or not yet published.
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

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title={`${proposal.title} — Official Project Funding Proposal — PMSI`}
        description={`Formal Project Funding Proposal: ${proposal.title}. Total Funding Requested: USD ${proposal.totalRequestedUSD.toLocaleString()}. Submitted by Pakistan Minorities Support Initiative (PMSI).`}
      />

      {/* Hero Header */}
      <section className="pt-32 pb-14 bg-[#12304A] text-white relative overflow-hidden bg-grid-dark border-b border-white/10 print:hidden">
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 bg-[#167E83]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#D8A85B]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-4">
          <Breadcrumb
            items={[
              { label: 'Our Projects', href: '/projects' },
              { label: project.title, href: `/projects/${project.slug}` },
              { label: 'Project Proposal' },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D8A85B] text-[#12304A]">
              Official Funding Proposal
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-[#ECD29E]">
              Requested: USD ${proposal.totalRequestedUSD.toLocaleString()}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-slate-200">
              {proposal.implementationPeriod}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            {proposal.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#D8A85B] italic font-normal">
            "{proposal.tagline}"
          </p>
        </div>
      </section>

      {/* Floating Action Bar (Sticky for donor convenience) */}
      <div className="bg-white border-b border-slate-200 py-3.5 sticky top-16 z-30 shadow-xs print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#167E83] hover:text-[#106064]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Project Overview</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
              title="Print proposal document or save as PDF"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print / Save PDF</span>
            </button>

            <Link
              to={`/partnership-inquiry?project=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category)}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-xs transition-all"
            >
              <Handshake className="w-4 h-4 text-[#D8A85B]" />
              <span>Discuss Funding Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Formal Document Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 md:p-16 space-y-12 print:shadow-none print:border-none print:p-0">
          {/* Document Header Block */}
          <div className="border-b-2 border-slate-900 pb-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#167E83] block">
                  Institutional Humanitarian Dossier
                </span>
                <span className="text-sm font-bold text-slate-900">
                  PAKISTAN MINORITIES SUPPORT INITIATIVE (PMSI)
                </span>
              </div>
              <div className="text-left sm:text-right text-xs text-slate-500 font-mono">
                <div>Document Type: Project Funding Proposal</div>
                <div>Status: Proposed — Seeking Funding Partners</div>
              </div>
            </div>

            <div className="pt-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12304A] leading-tight">
                {proposal.title}
              </h2>
              <p className="font-serif text-lg text-slate-600 italic mt-1">
                "{proposal.tagline}"
              </p>
            </div>

            {/* Key Project Dossier Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#F7F9FA] border border-slate-200/90 text-xs">
              <div>
                <span className="text-slate-500 block uppercase tracking-wider text-[10px] font-bold">
                  Total Funding Requested
                </span>
                <span className="font-serif text-lg font-bold text-[#12304A] block mt-0.5">
                  USD ${proposal.totalRequestedUSD.toLocaleString()}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block uppercase tracking-wider text-[10px] font-bold">
                  Implementation Period
                </span>
                <span className="font-semibold text-slate-800 block mt-0.5">
                  {proposal.implementationPeriod}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block uppercase tracking-wider text-[10px] font-bold">
                  Country
                </span>
                <span className="font-semibold text-slate-800 block mt-0.5">
                  {proposal.country}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block uppercase tracking-wider text-[10px] font-bold">
                  Program Area
                </span>
                <span className="font-semibold text-slate-800 block mt-0.5">
                  {proposal.programArea}
                </span>
              </div>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              1. Executive Summary
            </h3>
            <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
              {proposal.executiveSummary.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Section 2: Project Background & Need */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              2. Project Background & Need
            </h3>
            <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
              {proposal.projectBackgroundNeed.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Section 3: Overall Project Goal */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              3. Overall Project Goal
            </h3>
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-amber-950 font-serif text-base sm:text-lg italic leading-relaxed">
              "{proposal.overallGoal}"
            </div>
          </section>

          {/* Section 4: Specific Objectives */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              4. Specific Objectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {proposal.specificObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F7F9FA] border border-slate-200/80 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#167E83] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {obj}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Intended Beneficiaries */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              5. Intended Beneficiaries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12304A] block">
                  Primary Beneficiaries
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {proposal.intendedBeneficiaries.primary}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12304A] block">
                  Priority Communities
                </span>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                  {proposal.intendedBeneficiaries.priorityCommunities.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
              <p>
                <strong>Geographical Coverage:</strong> {proposal.intendedBeneficiaries.geographicalCoverage}
              </p>
              <p>
                <strong>Beneficiary Target:</strong> {proposal.intendedBeneficiaries.targetDescription}
              </p>
            </div>
          </section>

          {/* Section 6: Proposed Project Activities */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              6. Proposed Project Activities
            </h3>
            <div className="space-y-4">
              {proposal.proposedActivities.map((act, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#167E83] text-white uppercase tracking-wider">
                      {act.code}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#12304A]">
                      {act.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {act.description}
                  </p>
                  {act.items && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                      {act.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#167E83] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Proposed Project Budget */}
          <section className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
                7. Proposed Project Budget
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-mono">
                Total Funding Request: USD $30,000 (Indicative 12-Month Envelope)
              </p>
            </div>

            {/* Budget Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                <thead className="bg-[#12304A] text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Budget Component
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold">
                      Proposed Amount (USD)
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {proposal.budgetTable.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {item.component}
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                        ${item.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-600">
                        {item.percentage}%
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100 font-bold border-t-2 border-slate-300">
                    <td className="px-4 py-3 text-slate-900 uppercase tracking-wider text-xs">
                      Total Project Budget
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-base text-[#12304A]">
                      $30,000
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-900">
                      100%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Budget Explanations */}
            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-lg font-bold text-[#12304A]">
                Budget Explanations
              </h4>
              <div className="space-y-3">
                {proposal.budgetExplanation.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700">
                    <span className="font-bold text-[#12304A] block mb-1">
                      {idx + 1}. {exp.component} — {exp.amount}
                    </span>
                    <p className="leading-relaxed text-slate-600">{exp.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Budget Note:</strong> {proposal.budgetNote}
            </div>
          </section>

          {/* Section 8: Proposed Implementation Timeline */}
          <section className="space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
                8. Proposed Implementation Timeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-mono">
                Indicative Duration: 12 Months
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                <thead className="bg-[#12304A] text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left font-semibold w-36">
                      Period
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Planned Activities
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {proposal.timeline.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                      <td className="px-4 py-3 font-semibold font-mono text-[#167E83] whitespace-nowrap">
                        {item.period}
                      </td>
                      <td className="px-4 py-3 text-slate-700 leading-relaxed">
                        {item.activities}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic">
              {proposal.timelineNote}
            </p>
          </section>

          {/* Section 9: Expected Outcomes & Measurement */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              9. Expected Outcomes & Measurement
            </h3>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Intended Project Outcomes:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {proposal.expectedOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Proposed Monitoring Indicators:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {proposal.proposedMonitoringIndicators.map((indicator, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8A85B] shrink-0 mt-2" />
                    <span>{indicator}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed italic">
              {proposal.monitoringNote}
            </p>
          </section>

          {/* Section 10: Child Protection & Ethical Standards */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              10. Child Protection & Ethical Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              PMSI intends to establish appropriate safeguards for all planned activities involving children. The project will prioritize:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
              {proposal.childProtectionEthicalStandards.map((std, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 11: Financial Accountability & Donor Reporting */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              11. Financial Accountability & Donor Reporting
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p>
                The proposed project will be structured around documented expenditure and responsible financial management. Before implementation, suitable arrangements will be established for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {proposal.financialAccountabilityReporting.preImplementation.map((arr, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#167E83] shrink-0 mt-0.5" />
                    <span>{arr}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9FA] border border-slate-200 space-y-2 mt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12304A] block">
                Proposed Reporting Schedule
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {proposal.financialAccountabilityReporting.reportingSchedule.map((rep, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                    <span>{rep}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 pt-1 italic">
                {proposal.financialAccountabilityReporting.scheduleNote}
              </p>
            </div>
          </section>

          {/* Section 12: Institutional Readiness & Compliance */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              12. Institutional Readiness & Compliance
            </h3>
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 space-y-3 text-xs sm:text-sm leading-relaxed">
              {proposal.institutionalReadinessCompliance.map((comp, idx) => (
                <p key={idx}>{comp}</p>
              ))}
            </div>
          </section>

          {/* Section 13: International Partnership Request */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#12304A] border-b border-slate-100 pb-2">
              13. International Partnership Request
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>Funding Requested: {proposal.partnershipRequest.fundingRequested}</strong>
              </p>
              <p>
                PMSI welcomes discussions with philanthropic foundations, humanitarian organizations, educational institutions, and other prospective partners interested in supporting inclusive education in Pakistan. Potential collaboration may cover:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {proposal.partnershipRequest.collaborationScope.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#167E83] shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 italic pt-1">
                {proposal.partnershipRequest.conditionNote}
              </p>
            </div>
          </section>

          {/* Section 14: Closing Statement */}
          <section className="space-y-4 pt-4 border-t-2 border-slate-900">
            <h3 className="font-serif text-2xl font-bold text-[#12304A]">
              14. {proposal.closingStatement.title}
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              {proposal.closingStatement.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Official Sign-off Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12304A] text-white mt-8 space-y-4 print:bg-slate-100 print:text-slate-900">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B] print:text-slate-700">
                  PAKISTAN MINORITIES SUPPORT INITIATIVE (PMSI)
                </span>
                <p className="font-serif text-sm italic text-slate-300 print:text-slate-600">
                  Protecting Rights. Empowering Communities. Restoring Hope.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 print:border-slate-300 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase text-[10px]">Project</span>
                  <span className="font-semibold text-white print:text-slate-900">{proposal.title}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase text-[10px]">Funding Request</span>
                  <span className="font-semibold text-[#D8A85B] print:text-slate-900">USD $30,000</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase text-[10px]">Status</span>
                  <span className="font-semibold text-slate-200 print:text-slate-900">Proposed — Seeking Funding Partners</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 print:hidden">
                <span className="text-xs text-slate-300">
                  Ready to explore a funding partnership?
                </span>
                <Link
                  to={`/partnership-inquiry?project=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-md font-medium"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Initiate Partnership Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

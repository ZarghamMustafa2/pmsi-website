import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  Shield,
  FileCheck2,
  Heart,
  Scale,
  Users,
  Eye,
  AlertTriangle,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';

export const TransparencyPage: React.FC = () => {
  const ethicalPrinciples = [
    {
      title: 'Human Dignity',
      icon: Heart,
      description:
        'Every person possesses inherent, inviolable worth. All humanitarian initiatives and planned interventions must preserve the dignity, autonomy, and identity of the communities we aim to support.',
    },
    {
      title: 'Equality & Non-Discrimination',
      icon: Scale,
      description:
        'Vulnerability recognizes no faith or social barriers. Assistance is planned solely on the basis of need, ensuring equal access for Christian, Ahmadi, Hindu, Sikh, transgender, and all marginalized populations.',
    },
    {
      title: 'Impartiality & Neutrality',
      icon: Shield,
      description:
        'Our humanitarian purpose remains non-partisan and independent of political or sectarian agendas. Relief priorities are determined through verifiable assessments of physical and legal vulnerability.',
    },
    {
      title: 'Responsible Assistance',
      icon: FileCheck2,
      description:
        'Aid must be culturally appropriate, locally informed, and sustainable. We adhere to the principle of "Do No Harm," ensuring interventions never unintentionally exacerbate local tensions.',
    },
    {
      title: 'Safeguarding Vulnerable Communities',
      icon: Users,
      description:
        'Uncompromising policies protect children, women, and persecuted minorities from exploitation, abuse, or neglect during any stage of program assessment and delivery.',
    },
    {
      title: 'Respect for Privacy & Data Protection',
      icon: Lock,
      description:
        'Strict standards prevent the unauthorized collection or dissemination of sensitive personal information regarding minority faith members, transgender individuals, or vulnerable youth.',
    },
  ];

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Transparency & Governance — Responsible Humanitarian Action"
        description="Review PMSI's institutional commitments to organizational governance, financial accountability, ethical humanitarian principles, child protection, and truthful legal disclosures."
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
          <Breadcrumb items={[{ label: 'Transparency & Governance' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Ethical Stewardship
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Accountability & Governance</span>
            </div>

            {/* Exact Main Heading from Specification */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Transparency, Accountability & Responsible Humanitarian Action
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              PMSI is committed to exemplary institutional governance, honest communication, and rigorous
              ethical standards across all proposed humanitarian priorities in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-10 sm:space-y-16">
        {/* Section E — Truthful Organizational Legal Disclosure (Featured First for Maximum Credibility) */}
        <section className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-amber-50/80 border border-amber-300 text-amber-950 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-200/80 border border-amber-400/60 flex items-center justify-center text-amber-900 shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-900 block mb-1">
                  Section E • Organizational Legal Disclosure
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-950">
                  Actual Legal Status & Organizational Stage
                </h2>
              </div>

              <div className="space-y-3 text-sm text-amber-900 leading-relaxed font-normal">
                <p>
                  <strong>Current Legal Status:</strong> The Pakistan Minorities Support Initiative (PMSI) is an
                  establishing humanitarian platform. <strong>PMSI has not yet completed legal registration.</strong> In
                  strict adherence to our non-negotiable policy of transparency and credibility, we do not claim to be a
                  formally registered NGO, nor do we claim to hold governmental regulatory approvals, receive foreign
                  donations, or operate completed donor-funded programs.
                </p>
                <p>
                  <strong>Pending Registration Policy:</strong> We do not misrepresent our pending legal formation as an
                  approved status. All public communications on this website describe intended humanitarian priorities,
                  proposed intervention models, and foundational ethical principles.
                </p>
                <p>
                  <strong>No Public Donation Collection:</strong> Formal donation mechanisms, financial receipting, and
                  online payment gateways will be activated exclusively after all applicable domestic legal, corporate,
                  and banking requirements have been fully satisfied. We do not solicit or accept unverified financial
                  contributions.
                </p>
                <p>
                  <strong>Verifiable Documents:</strong> PMSI does not publish fabricated registration numbers, artificial
                  certificates of registration, unverified annual reports, or fictional audit statements. All institutional
                  dialogue proceeds with full clarity regarding our establishing phase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section A — Organizational Governance */}
        <section className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Section A
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#12304A] mb-4">
              Organizational Governance
            </h2>
            <div className="w-16 h-1 bg-[#167E83] rounded-full mb-4" />
            <p className="text-slate-600 leading-relaxed text-base">
              Sound governance is the bedrock of trustworthy humanitarian action. PMSI is structuring its
              administrative architecture around clear accountability, democratic leadership, and principled decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#167E83] mb-4 shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#12304A] mb-2">
                Accountable Leadership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Separation of strategic oversight from operational coordination, ensuring clear checks,
                balances, and unbiased institutional guidance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#167E83] mb-4 shadow-sm">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#12304A] mb-2">
                Ethical Decision-Making
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Commitment to human rights covenants, anti-corruption policies, and avoidance of conflicts of
                interest at all organizational levels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#167E83] mb-4 shadow-sm">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#12304A] mb-2">
                Responsible Development
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gradual, deliberate organizational development prioritizing legal compliance, ground-level
                credibility, and institutional durability.
              </p>
            </div>
          </div>

          {/* Verified Leadership Transparency Box */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 border border-[#167E83]/20 flex items-center justify-center text-[#167E83] shrink-0 mt-0.5">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#12304A]">
                  Verified Initiative Leadership
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  PMSI is founded and coordinated by <strong>Zargham Mustafa</strong> (Founder & Initiative Lead).
                  In adherence to our strict transparency mandate, we do not publish fictional board rosters. An
                  independent multi-disciplinary advisory board is currently being convened in conjunction with our
                  non-profit statutory registration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section B — Financial Accountability */}
        <section className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Section B
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#12304A] mb-4">
              Financial Accountability
            </h2>
            <div className="w-16 h-1 bg-[#167E83] rounded-full mb-4" />
            <p className="text-slate-600 leading-relaxed text-base">
              PMSI upholds unequivocal stewardship of resources. Our planned financial architecture is designed
              to provide international partners with full visibility, verifiable records, and strict budgetary discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 space-y-3">
              <h3 className="font-serif text-lg font-semibold text-[#12304A] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#167E83]" />
                Responsible Fund Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Commitment to designated programmatic accounting, ensuring funds provided for specific
                humanitarian priorities (e.g., educational scholarships or disaster relief) are never diverted.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 space-y-3">
              <h3 className="font-serif text-lg font-semibold text-[#12304A] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#167E83]" />
                Transparent Financial Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Maintenance of detailed books of account adhering to recognized international accounting
                standards, supported by verified invoices and bank reconciliation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 space-y-3">
              <h3 className="font-serif text-lg font-semibold text-[#12304A] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#167E83]" />
                Appropriate Donor Reporting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Timely, narrative and financial milestone reporting shared with funding partners, documenting
                verifiable expenditures and grounded progress without inflated claims.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 space-y-3">
              <h3 className="font-serif text-lg font-semibold text-[#12304A] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#167E83]" />
                Independent Future Auditing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upon operational registration and formal fund administration, PMSI will engage certified chartered
                accounting firms to conduct annual independent statutory audits.
              </p>
            </div>
          </div>
        </section>

        {/* Section C — Ethical Humanitarian Principles */}
        <section className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Section C
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#12304A] mb-4">
              Ethical Humanitarian Principles
            </h2>
            <div className="w-16 h-1 bg-[#167E83] rounded-full mb-4" />
            <p className="text-slate-600 leading-relaxed text-base">
              Six universal ethical principles guide every programmatic assessment, community interaction, and
              institutional relationship undertaken by PMSI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-7 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 hover:border-[#167E83] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#167E83] mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#12304A] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section D — Child & Community Protection */}
        <section className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Section D
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#12304A] mb-4">
              Child & Community Protection
            </h2>
            <div className="w-16 h-1 bg-[#167E83] rounded-full mb-4" />
            <p className="text-slate-600 leading-relaxed text-base">
              Vulnerable populations face heightened risks of exploitation and retaliation. PMSI embeds strict
              safeguarding protocols across all intended programs to guarantee protection and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#12304A] text-white border border-[#167E83]/40 space-y-3">
              <h3 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#D8A85B]" />
                Child Safeguarding Protocols
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mandatory background screenings for all educational personnel, strict prohibitions against
                photographing children in vulnerable situations, and immediate reporting mechanisms for any suspected
                child labor, physical harm, or institutional abuse.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#12304A] text-white border border-[#167E83]/40 space-y-3">
              <h3 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-[#1DA0A6]" />
                Vulnerable Minority & Beneficiary Protection
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Protecting the anonymity and personal safety of religious minority members (Christian, Ahmadi, Hindu,
                Sikh) and transgender citizens. We strictly avoid publishing identifying addresses, facial photographs,
                or sensitive personal disclosures that could expose individuals to localized harm.
              </p>
            </div>
          </div>
        </section>

        {/* Section F — Non-Discrimination Policy */}
        <section className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Section F
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#12304A] mb-4">
              Non-Discrimination & Equal Treatment
            </h2>
            <div className="w-16 h-1 bg-[#167E83] rounded-full mb-4" />
            <p className="text-slate-600 leading-relaxed text-base">
              PMSI operates on the strict conviction that humanitarian support must never be conditional upon religious
              affiliation, ethnicity, social caste, or gender identity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-[#12304A]">Needs-Based Aid Delivery</h4>
              <p>
                All humanitarian assistance, educational sponsorships, and emergency flood relief packages are distributed
                strictly on verified vulnerability criteria. No beneficiary is ever prioritized or excluded on the basis of
                faith or creed.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-[#12304A]">Respect for Religious Identity</h4>
              <p>
                We do not condition aid upon religious conformity or participation in any faith activities. We defend the
                freedom of conscience and peaceful worship of Christian, Ahmadi, Hindu, Sikh, and all communities.
              </p>
            </div>
          </div>
        </section>

        {/* Section G — Partnership Inquiry & Institutional Procedures */}
        <section className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Section G
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#12304A] mb-4">
              Partnership Inquiry & Collaboration Procedures
            </h2>
            <div className="w-16 h-1 bg-[#167E83] rounded-full mb-4" />
            <p className="text-slate-600 leading-relaxed text-base">
              To ensure full compliance and institutional integrity, international organizations and foundations engage
              with PMSI through a clear, transparent four-stage exploratory framework:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#167E83] uppercase tracking-wider block mb-2">Stage 01</span>
                <h4 className="font-serif text-base font-bold text-[#12304A] mb-2">Initial Inquiry</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  International partner submits formal interest via the Partnership Inquiry portal or official correspondence.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#167E83] uppercase tracking-wider block mb-2">Stage 02</span>
                <h4 className="font-serif text-base font-bold text-[#12304A] mb-2">Concept Dialogue</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bilateral review of proposed project scopes, target beneficiary contexts, safeguarding standards, and terms of reference.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#167E83] uppercase tracking-wider block mb-2">Stage 03</span>
                <h4 className="font-serif text-base font-bold text-[#12304A] mb-2">Due Diligence Review</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mutual transparency sharing covering organizational stage, compliance status, and prospective governance architecture.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#167E83] uppercase tracking-wider block mb-2">Stage 04</span>
                <h4 className="font-serif text-base font-bold text-[#12304A] mb-2">Formal Execution</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Execution of formal grant agreements and fund disbursement occurs upon verified completion of statutory non-profit banking registration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-2">
              Interested in Institutional Dialogue?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              We welcome engagement with international donors, philanthropic foundations, and human rights bodies
              committed to responsible humanitarian action.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
            <Link
              to="/partnership-inquiry"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#125e62] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#167E83] text-center"
            >
              Submit Partnership Inquiry
            </Link>
            <Link
              to="/funding-opportunities"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white text-center flex items-center justify-center gap-2"
            >
              <span>View Proposed Funding Areas</span>
              <ArrowRight className="w-4 h-4 text-[#167E83]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  Handshake,
  ShieldCheck,
  Scale,
  GraduationCap,
  LifeBuoy,
  Users,
  Building,
  AlertCircle,
  Eye,
  Lock,
  Compass,
  ChevronDown,
  ArrowRight,
  HelpCircle,
  FileText,
} from 'lucide-react';

export const PartnerWithUsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const collaborationAreas = [
    {
      title: 'Minority Rights & Protection',
      slug: 'minority-rights',
      icon: Scale,
      category: 'Legal & Civil Rights',
      description:
        'Collaborate to establish legal defense funds, pro-bono lawyer networks, emergency community referral mechanisms, and human rights monitoring for religious minority communities.',
    },
    {
      title: 'Education & Child Welfare',
      slug: 'education',
      icon: GraduationCap,
      category: 'Youth Empowerment',
      description:
        'Support multi-year educational sponsorships, provision of uniforms and learning supplies, community school facility upgrades, and child protection programs.',
    },
    {
      title: 'Disaster Relief & Recovery',
      slug: 'disaster-relief',
      icon: LifeBuoy,
      category: 'Emergency & Climate Response',
      description:
        'Partner on rapid-response food packages, mobile clean water filtration, transitional shelter kits, and post-flood agricultural livelihood recovery.',
    },
    {
      title: 'Transgender Inclusion',
      slug: 'transgender-inclusion',
      icon: Users,
      category: 'Socio-Economic Rights',
      description:
        'Fund accredited vocational training, micro-enterprise seed funding, inclusive workplace dialogues, and sensitized primary health consultations.',
    },
    {
      title: 'Community Development',
      slug: 'community-welfare',
      icon: Building,
      category: 'Civic Resilience',
      description:
        'Strengthen grassroots welfare committees, organize local interfaith peace dialogues, and expand civic and legal literacy in under-resourced settlements.',
    },
  ];

  const partnershipForms = [
    {
      title: 'Project-Based Partnerships',
      icon: TargetIcon,
      description:
        'Structured collaboration focused on specific, measurable humanitarian deliverables within a defined timeline, geographic corridor, or community focus.',
    },
    {
      title: 'Institutional Funding Discussions',
      icon: Building,
      description:
        'Engaging with institutional donors, bilateral development programs, and charitable foundations on sustainable multi-year programmatic funding.',
    },
    {
      title: 'Humanitarian Collaboration',
      icon: Handshake,
      description:
        'Coordinated ground-level response during climate emergencies, flood crises, and localized humanitarian challenges with international NGOs.',
    },
    {
      title: 'Educational Support Partnerships',
      icon: GraduationCap,
      description:
        'Alliances with academic bodies, educational trusts, and scholarship funds to finance tuition and materials for marginalized youth.',
    },
    {
      title: 'Community Development Programs',
      icon: Compass,
      description:
        'Joint initiatives aimed at community capacity building, grassroots legal literacy, interfaith harmony, and infrastructure advocacy.',
    },
  ];

  const responsibilityPillars = [
    {
      title: 'Programmatic Transparency',
      icon: Eye,
      description:
        'Clear planning milestones, honest communication regarding project challenges, and detailed programmatic accounting for all collaborative funds.',
    },
    {
      title: 'Beneficiary Protection & Safeguarding',
      icon: ShieldCheck,
      description:
        'Zero-tolerance policies toward exploitation, strict child safeguarding standards, and respectful preservation of beneficiary privacy and dignity.',
    },
    {
      title: 'Non-Partisan & Needs-Based Delivery',
      icon: Scale,
      description:
        'Uncompromising adherence to international humanitarian principles: humanity, neutrality, impartiality, and operational independence.',
    },
    {
      title: 'Ethical Stewardship',
      icon: Lock,
      description:
        'Strict fiscal discipline, regular programmatic reviews, and dedicated compliance with anti-corruption and donor ethics policies.',
    },
  ];

  const faqItems = [
    {
      question: "What is PMSI's humanitarian mission?",
      answer:
        'The Pakistan Minorities Support Initiative (PMSI) is dedicated to advancing human dignity, protecting equal rights, expanding educational access, and providing principled humanitarian assistance for vulnerable and marginalized populations across Pakistan.',
    },
    {
      question: 'Which communities does PMSI aim to support?',
      answer:
        'PMSI focuses on communities confronting acute socio-economic and legal vulnerabilities. This encompasses religious minority populations—including Christian, Ahmadi, Hindu, Sikh, and other faith communities—alongside transgender individuals (Khwajasira community), disaster-affected families, and orphaned and vulnerable children.',
    },
    {
      question: "What are PMSI's priority areas in Pakistan?",
      answer:
        'PMSI concentrates its intended humanitarian programming across six core domains: (1) Minorities Rights & Protection, (2) Transgender Inclusion & Empowerment, (3) Disaster Relief & Emergency Support, (4) Orphan & Vulnerable Child Welfare, (5) Education & Learning Opportunities, and (6) Community Welfare & Human Rights.',
    },
    {
      question: 'How can international organizations explore collaboration?',
      answer:
        'International foundations, charitable trusts, bilateral development programs, and humanitarian NGOs can initiate dialogue through our dedicated Partnership Inquiry Portal. We engage on structured project proposals, educational sponsorship initiatives, and emergency relief planning aligned with institutional donor mandates.',
    },
    {
      question: 'How can potential partners request further information?',
      answer:
        'Partners may submit a formal expression of interest through our online Partnership Inquiry Portal or via our general Contact Page. Our coordination team reviews inquiries to schedule introductory virtual briefings and share relevant concept notes.',
    },
    {
      question: 'Where can visitors find organizational and transparency information?',
      answer:
        'Complete details regarding our governance structure, ethical principles, child safeguarding policies, and truthful legal status disclosure are available on our dedicated Transparency & Governance page. Our data handling procedures are outlined in our Privacy Policy.',
    },
  ];

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="International Partnerships — Collaborate With PMSI"
        description="Partner with the Pakistan Minorities Support Initiative (PMSI) to advance human dignity, protect minority rights, and support vulnerable communities across Pakistan."
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
          <Breadcrumb items={[{ label: 'International Partnerships' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Handshake className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Institutional Engagement
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Donors & Philanthropies</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Partner With PMSI to Build a More Inclusive Pakistan
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl mb-8">
              We welcome opportunities to connect with humanitarian organizations, philanthropic
              foundations and institutions committed to protecting human dignity, promoting equal
              rights and expanding opportunities for vulnerable communities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/partnership-inquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#167E83] shadow-lg transition-all"
              >
                <span>Submit Partnership Inquiry</span>
                <ArrowRight className="w-4 h-4 text-[#D8A85B]" />
              </Link>
              <Link
                to="/funding-opportunities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white shadow-md transition-all"
              >
                <span>Explore Proposed Funding Areas</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section A: Why Partner With PMSI? */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                  Value of Collaboration
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#12304A] leading-tight">
                Why Partner With PMSI?
              </h2>

              <p>
                International philanthropic capital and humanitarian cooperation achieve their greatest impact
                when paired with grounded, culturally cognizant, and ethically principled leadership.
              </p>

              <p>
                Across Pakistan, religious minority communities—including Christian, Ahmadi, Hindu, and Sikh
                populations—together with transgender citizens, displaced flood survivors, and orphaned children,
                frequently occupy the outer margins of formal civic services. International foundations often face
                challenges in identifying independent, non-sectarian partners dedicated specifically to these
                intersectional vulnerabilities.
              </p>

              <p>
                PMSI bridges this divide. We combine an unwavering commitment to international human rights norms
                with deep grassroots understanding. Our proposed operating model emphasizes non-discriminatory
                assistance, transparent project planning, and direct community ownership, providing institutional
                donors with a credible, values-aligned gateway for transformative social investment in Pakistan.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-8 rounded-2xl bg-[#12304A] text-white border border-[#167E83]/30 shadow-xl">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4">
                  Our Institutional Baseline
                </h3>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D8A85B] mt-1.5 shrink-0" />
                    <span>Focus on acute vulnerability and human rights defense.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D8A85B] mt-1.5 shrink-0" />
                    <span>Direct community involvement in program assessment and design.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D8A85B] mt-1.5 shrink-0" />
                    <span>Honest, verifiable reporting without fabricated impact statistics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D8A85B] mt-1.5 shrink-0" />
                    <span>Strict compliance with international child safeguarding standards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Areas for Potential Collaboration (5 Categories) */}
      <section className="py-20 bg-[#F7F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Programmatic Domains
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-4">
              Areas for Potential Collaboration
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We structure institutional partnership dialogues around five high-priority humanitarian categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F9FA] border border-slate-200 flex items-center justify-center text-[#167E83] shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#167E83] bg-[#167E83]/10 px-2 py-0.5 rounded">
                        {area.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#12304A] mb-3">
                      {area.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/programs/${area.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167E83] hover:text-[#106064]"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section C: Partnership Opportunities (5 Forms) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Engagement Models
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-4">
              Partnership Opportunities
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We welcome dialogue across several structured engagement modalities to match your institution’s
              philanthropic goals, grantmaking cycles, or humanitarian mandates:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipForms.map((form, idx) => {
              const Icon = form.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#F7F9FA] border border-slate-200/90 hover:border-[#167E83] transition-all duration-300 hover:shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#167E83] mb-5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#12304A] mb-2.5">
                    {form.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {form.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section D: Responsible Collaboration */}
      <section className="py-20 bg-[#12304A] text-white border-b border-white/10 relative overflow-hidden bg-grid-dark">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
                Ethical Governance
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Responsible Collaboration
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              As an establishing initiative, PMSI pledges strict adherence to transparent governance,
              rigorous risk assessment, and ethical stewardship in every institutional relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-[#167E83]/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#167E83]/20 border border-[#167E83]/40 flex items-center justify-center text-[#1DA0A6] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5 text-xs text-slate-300 max-w-4xl">
            <AlertCircle className="w-5 h-5 text-[#D8A85B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Institutional Integrity Notice:</strong> PMSI is dedicated to honest engagement.
              We do not present unverified past accomplishments, artificial statistics, or unconfirmed
              regulatory certificates. All collaboration agreements are developed through transparent,
              bilaterally verified terms of reference.
            </p>
          </div>
        </div>
      </section>

      {/* Section E: Public Website FAQ Section */}
      <section id="faq" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#12304A] leading-tight mb-4">
              Institutional Partnership FAQs
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] mx-auto rounded-full mb-6" />

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Clear, transparent answers to common inquiries from international foundations, overseas
              charitable institutions, and prospective humanitarian partners.
            </p>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden bg-[#F7F9FA] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-[#12304A] hover:text-[#167E83] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#167E83]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Link to Transparency & Governance */}
          <div className="mt-10 p-5 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#167E83]" />
              <span>Looking for detailed legal disclosure and governance policies?</span>
            </div>
            <Link
              to="/transparency"
              className="font-semibold text-[#167E83] hover:text-[#106064] underline shrink-0"
            >
              Visit Transparency & Governance Page
            </Link>
          </div>
        </div>
      </section>

      {/* Section F: Direct Partnership Inquiry Invitation CTA */}
      <section className="py-20 bg-[#F7F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D8A85B] mb-4">
                <Handshake className="w-4 h-4" />
                <span>Begin Institutional Dialogue</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
                Ready to Explore a Humanitarian Partnership?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Connect directly with PMSI leadership to discuss proposed project collaborations,
                institutional grant support, or joint humanitarian assessments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link
                to="/partnership-inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#167E83] shadow-lg transition-all"
              >
                <span>Submit Partnership Inquiry</span>
                <ArrowRight className="w-4 h-4 text-[#D8A85B]" />
              </Link>
              <Link
                to="/funding-opportunities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white shadow-md transition-all"
              >
                <span>View Proposed Funding Areas</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper target icon
const TargetIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

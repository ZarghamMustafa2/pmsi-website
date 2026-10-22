import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  ShieldCheck,
  GraduationCap,
  LifeBuoy,
  Users,
  Heart,
  Globe2,
  ArrowRight,
  Handshake,
  CheckCircle2,
  AlertCircle,
  Building,
  Sparkles,
  Compass,
  MapPin,
  Layers,
} from 'lucide-react';

export const FundingOpportunitiesPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const fundingCategories = [
    {
      id: '01',
      slug: 'minority-rights',
      title: 'Religious Minority Protection',
      categoryParam: 'Minority Rights & Protection',
      icon: ShieldCheck,
      status: 'Proposed',
      statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
      humanitarianChallenge:
        'Socio-economic marginalization, legal vulnerability, and systemic discrimination faced by religious minorities in Pakistan.',
      targetCommunity:
        'Christian, Ahmadi, Hindu, Sikh, and other minority communities facing institutional marginalization.',
      proposedLocation: 'Punjab, Sindh & Nationwide Advocacy',
      description:
        'Targeted support to uphold legal safeguards, fundamental freedoms, and civic security for religious minority communities confronting discrimination across Pakistan.',
      intendedActivities: [
        'Pro-bono legal counsel access and legal defense coordination',
        'Civil registration and national documentation assistance (CNIC / voter rolls)',
        'Rapid referral and emergency safety accommodation pathways',
        'Civic literacy and constitutional rights awareness workshops',
      ],
      expectedOutcomes:
        'Strengthened civic resilience, reduced arbitrary harassment, and secured legal rights for vulnerable minority households.',
      implementationApproach:
        'Grassroots community consultations partnered with certified pro-bono legal networks and local welfare committees.',
      budgetNote:
        'Tailored collaboratively with institutional grantmakers based on agreed terms of reference; no arbitrary targets.',
      partnershipType: 'Institutional grants, legal aid trusts & multilateral human rights bodies',
    },
    {
      id: '02',
      slug: 'education',
      title: 'Education for Vulnerable Children',
      categoryParam: 'Education & Child Welfare',
      icon: GraduationCap,
      status: 'Under Planning',
      statusColor: 'bg-blue-100 text-blue-900 border-blue-300',
      humanitarianChallenge:
        'Extremely high drop-out rates among children of informal laborers and impoverished minority families due to poverty and social exclusion.',
      targetCommunity:
        'Disadvantaged minority youth, children of informal laborers, and out-of-school minors.',
      proposedLocation: 'Punjab & Urban Fringe Settlements',
      description:
        'Strategic funding allocations to eliminate financial barriers to schooling, equip community learning centers, and ensure disadvantaged minority youth can remain enrolled in accredited education.',
      intendedActivities: [
        'Direct academic scholarships covering tuition, textbooks, and uniforms',
        'Community after-school tutoring and literacy support sessions',
        'Vocational transitional guidance for adolescent youths',
        'Teacher sensitization on non-discriminatory classroom environments',
      ],
      expectedOutcomes:
        'Sustained primary and secondary school retention, improved literacy rates, and enhanced intergenerational mobility.',
      implementationApproach:
        'Direct coordination with certified local non-discriminatory schools and community monitoring committees.',
      budgetNote:
        'Budget formulated on per-child annual educational cost model in partnership with sponsoring foundation.',
      partnershipType: 'Philanthropic foundations, educational trusts & bilateral development agencies',
    },
    {
      id: '03',
      slug: 'disaster-relief',
      title: 'Flood Relief & Disaster Preparedness',
      categoryParam: 'Disaster Relief',
      icon: LifeBuoy,
      status: 'Proposed',
      statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
      humanitarianChallenge:
        'Acute devastation from recurring monsoon floods, waterborne diseases, loss of shelter, and lack of pre-positioned humanitarian aid in remote rural regions.',
      targetCommunity:
        'Impoverished rural households, agrarian laborers, and disaster-displaced families in flood-prone districts.',
      proposedLocation: 'Rural Sindh & Southern Punjab',
      description:
        'Preparedness financing and emergency response collaboration to provide immediate relief and long-term climate resilience for rural households vulnerable to recurring monsoon deluges.',
      intendedActivities: [
        'Pre-positioning clean water filtration kits and emergency WASH supplies',
        'Emergency food parcel distribution during peak flood inundation',
        'Transitional weather-resistant emergency shelter assistance',
        'Post-disaster livelihood rehabilitation for agrarian day laborers',
      ],
      expectedOutcomes:
        'Mitigated mortality and waterborne disease outbreaks; rapid restoration of dignified living conditions for disaster victims.',
      implementationApproach:
        'Needs-based impartial distribution in close consultation with local community elders, strictly irrespective of religious affiliation.',
      budgetNote:
        'Contingency and scalable intervention budgets prepared for donor review based on crisis intensity.',
      partnershipType: 'Humanitarian funding mechanisms, international disaster relief NGOs & emergency funds',
    },
    {
      id: '04',
      slug: 'transgender-inclusion',
      title: 'Transgender Inclusion & Empowerment',
      categoryParam: 'Transgender Inclusion',
      icon: Users,
      status: 'Under Planning',
      statusColor: 'bg-blue-100 text-blue-900 border-blue-300',
      humanitarianChallenge:
        'Systemic social ostracization, familial abandonment, denial of mainstream employment, and pervasive violence against transgender citizens in Pakistan.',
      targetCommunity:
        'Transgender individuals, socially excluded khawajasiras, and marginalized gender-diverse youth.',
      proposedLocation: 'Major Urban Centers (Lahore, Rawalpindi, Karachi)',
      description:
        'Dedicated philanthropic funding to advance socio-economic dignity, accredited vocational training, healthcare access, and societal inclusion for transgender citizens navigating persistent exclusion.',
      intendedActivities: [
        'Market-relevant vocational apprenticeships (culinary, digital skills, tailoring)',
        'Legal identity documentation support and anti-discrimination advocacy',
        'Safe-space community peer support and mental health counseling',
        'Facilitating non-discriminatory healthcare consultations and medical access',
      ],
      expectedOutcomes:
        'Sustainable economic independence through formal livelihoods, enhanced legal protection, and reduced vulnerability to street harassment.',
      implementationApproach:
        'Community-led peer coordination ensuring programs are directed and informed by transgender advocates themselves.',
      budgetNote:
        'Project milestones and modular budgets structured upon formal grant agreement.',
      partnershipType: 'Human rights funds, inclusion foundations & diplomatic democracy funds',
    },
    {
      id: '05',
      slug: 'child-welfare',
      title: 'Orphan & Vulnerable Child Safeguarding',
      categoryParam: 'Education & Child Welfare',
      icon: Heart,
      status: 'Proposed',
      statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
      humanitarianChallenge:
        'High vulnerability of orphaned, abandoned, and street children to bonded labor, child marriage, and severe nutritional deficiencies without protective safety nets.',
      targetCommunity:
        'Orphaned minors, children without familial support, and street-connected youth.',
      proposedLocation: 'Punjab & Sindh Urban Outskirts',
      description:
        'Comprehensive child safeguarding programs providing continuous education, nutritional health, pediatric monitoring, and emotional stability for orphaned and abandoned youth.',
      intendedActivities: [
        'Full educational sponsorship and nutritional security packages',
        'Regular pediatric health checkups and seasonal clothing support',
        'Strict child safeguarding protocols to prevent child labor exploitation',
        'Safe after-school developmental mentorship centers',
      ],
      expectedOutcomes:
        'Shielded from hazardous child labor; healthy cognitive development, emotional security, and guaranteed school completion.',
      implementationApproach:
        'Direct guardian support with independent child safeguarding verification protocols.',
      budgetNote:
        'Sponsorship cost sheets shared transparently with institutional partners upon concept note review.',
      partnershipType: 'Child welfare trusts, charitable family foundations & institutional philanthropies',
    },
    {
      id: '06',
      slug: 'community-welfare',
      title: 'Community Welfare & Human Rights',
      categoryParam: 'Community Development',
      icon: Globe2,
      status: 'Proposed',
      statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
      humanitarianChallenge:
        'Entrenched inter-communal mistrust, lack of institutional representation for minorities, and absence of grassroots community dialogue mechanisms.',
      targetCommunity:
        'Vulnerable multi-faith peri-urban settlements and marginalized rural communities.',
      proposedLocation: 'Selected High-Vulnerability Districts Nationwide',
      description:
        'Grassroots empowerment initiatives that foster interfaith harmony, legal rights awareness, civic literacy, and community-led solutions in socioeconomically marginalized settlements.',
      intendedActivities: [
        'Interfaith peacebuilding forums bringing together diverse faith leaders',
        'Community-led legal literacy workshops on citizen rights and public entitlements',
        'Capacity building for localized minority welfare committees',
        'Advocacy coalitions with national human rights networks',
      ],
      expectedOutcomes:
        'Strengthened social cohesion, de-escalation of communal tensions, and empowered community leadership capable of peaceful self-advocacy.',
      implementationApproach:
        'Facilitated local committee meetings with balanced multi-faith representation and independent facilitation.',
      budgetNote:
        'Custom program designs formulated in alignment with international donor strategic frameworks.',
      partnershipType: 'Peacebuilding foundations, democratic governance grants & civil society alliances',
    },
  ];

  const filteredCategories =
    selectedStatus === 'All'
      ? fundingCategories
      : fundingCategories.filter((c) => c.status === selectedStatus);

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Funding Opportunities — Supporting Communities. Advancing Human Dignity."
        description="Explore proposed humanitarian funding areas with the Pakistan Minorities Support Initiative (PMSI) covering minority rights, education, flood relief, transgender inclusion, and child welfare."
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
          <Breadcrumb items={[{ label: 'Funding Opportunities' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                Institutional Funding & Cooperation
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">International Donors</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Supporting Communities. Advancing Human Dignity.
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl mb-8">
              Explore opportunities to support inclusive humanitarian initiatives focused on minority
              rights, education, child welfare, disaster recovery and community empowerment in Pakistan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                to="/partnership-inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#167E83] shadow-lg transition-all text-center"
              >
                <span>Submit Partnership Inquiry</span>
                <ArrowRight className="w-4 h-4 text-[#D8A85B]" />
              </Link>
              <Link
                to="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white shadow-md transition-all text-center"
              >
                <Compass className="w-4 h-4 text-[#167E83]" />
                <span>Explore All Six Humanitarian Programs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status Framework & Transparency Banner */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 border border-[#167E83]/20 flex items-center justify-center text-[#167E83] shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#12304A] mb-1">
                  Rigorous Project & Funding Transparency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                  In strict compliance with international nonprofit standards, PMSI categorizes all initiatives
                  honestly. We do not invent fake donation counters, fabricated donor lists, or completed results.
                  Budgets are designed collaboratively upon bilateral concept note review.
                </p>
              </div>
            </div>

            <Link
              to="/transparency"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167E83] hover:text-[#106064] shrink-0"
            >
              <span>Review Transparency Commitments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Status Classification Legend */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-700">
              <Layers className="w-4 h-4 text-[#167E83]" />
              <span>Project Classification Standards:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
                Proposed (Open for Concept Review)
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-900 border border-blue-300">
                Under Planning (TOR & Assessment in Progress)
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-500 border border-slate-200">
                Funded / In Progress (Active Grant Executions Only)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Six Proposed Funding Opportunities */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                  Project Prospectus
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#12304A] leading-tight">
                Proposed Humanitarian Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mt-3 mb-2" />
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Explore project briefs prepared for bilateral discussion with international foundations,
                human rights trusts, and bilateral grantmakers.
              </p>
            </div>

            {/* Quick Status Filter */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-slate-500">Filter Status:</span>
              <div className="inline-flex rounded-xl bg-slate-200/70 p-1 text-xs">
                {['All', 'Proposed', 'Under Planning'].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                      selectedStatus === status
                        ? 'bg-white text-[#12304A] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-[#12304A]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="group relative flex flex-col justify-between p-5 sm:p-7 md:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="space-y-5">
                    {/* Header: Icon, ID & Status Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F9FA] border border-slate-200 flex items-center justify-center text-[#167E83] group-hover:bg-[#167E83] group-hover:text-white transition-colors duration-200 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cat.statusColor}`}>
                          Status: {cat.status}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {cat.id}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#12304A] group-hover:text-[#167E83] transition-colors leading-snug">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                        {cat.description}
                      </p>
                    </div>

                    {/* Structured Transparency Fields */}
                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900 block mb-0.5">Target Community:</span>
                        <span className="text-slate-600 leading-relaxed">{cat.targetCommunity}</span>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#167E83] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">Proposed Location: </span>
                          <span className="text-slate-600">{cat.proposedLocation}</span>
                        </div>
                      </div>

                      <div>
                        <span className="font-bold text-slate-900 block mb-0.5">Humanitarian Challenge:</span>
                        <p className="text-slate-600 leading-relaxed italic">{cat.humanitarianChallenge}</p>
                      </div>

                      {/* Intended Activities */}
                      <div className="pt-2">
                        <span className="font-bold text-[#D8A85B] uppercase tracking-wider block mb-2">
                          Intended Activities:
                        </span>
                        <ul className="space-y-1.5 pl-1">
                          {cat.intendedActivities.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#167E83] shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expected Outcomes */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="font-bold text-[#12304A] block mb-0.5">Expected Social Outcomes:</span>
                        <span className="text-slate-600 leading-relaxed">{cat.expectedOutcomes}</span>
                      </div>

                      {/* Implementation & Budget */}
                      <div className="text-[11px] text-slate-500 space-y-1 pt-1">
                        <div>
                          <strong>Implementation Approach:</strong> {cat.implementationApproach}
                        </div>
                        <div>
                          <strong>Budgetary Framework:</strong> {cat.budgetNote}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-2.5">
                    <Link
                      to={`/partnership-inquiry?category=${encodeURIComponent(cat.categoryParam)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-md transition-all duration-200"
                    >
                      <Handshake className="w-4 h-4 text-[#D8A85B]" />
                      <span>Request Concept Note & TOR</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to={`/programs/${cat.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#167E83] hover:bg-[#167E83]/10 transition-colors"
                    >
                      <span>Explore Detailed Program Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Institutional Next Steps Banner */}
          <div className="mt-12 sm:mt-20 p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D8A85B] mb-3">
                <Building className="w-3.5 h-3.5" />
                <span>Bilateral Program Formulation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
                Custom Institutional Project Proposals
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Does your foundation or humanitarian funding body maintain specific thematic or geographic priorities
                in Pakistan? We invite your coordination team to initiate an exploratory discussion.
              </p>
            </div>

            <Link
              to="/partnership-inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white shadow-md transition-all shrink-0 font-medium text-center"
            >
              <span>Submit Partnership Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#167E83]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

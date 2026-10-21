import React from 'react';
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
} from 'lucide-react';

export const FundingOpportunitiesPage: React.FC = () => {
  const fundingCategories = [
    {
      id: '01',
      slug: 'minority-rights',
      title: 'Religious Minority Protection',
      categoryParam: 'Minority Rights & Protection',
      icon: ShieldCheck,
      badge: 'Proposed Funding Area',
      description:
        'Targeted support to uphold legal safeguards, fundamental freedoms, and civic security for Christian, Ahmadi, Hindu, Sikh, and all religious minority communities confronting discrimination across Pakistan.',
      priorities: [
        'Equality and human rights awareness initiatives',
        'Community protection priorities and rapid referral networks',
        'Educational and social inclusion advocacy',
        'Potential rights-based partnerships with pro-bono legal networks',
      ],
    },
    {
      id: '02',
      slug: 'education',
      title: 'Education for Vulnerable Children',
      categoryParam: 'Education & Child Welfare',
      icon: GraduationCap,
      badge: 'Proposed Funding Area',
      description:
        'Strategic funding allocations to eliminate financial barriers to schooling, equip community learning centers, and ensure disadvantaged minority youth can remain enrolled in accredited education.',
      priorities: [
        'Expanding educational access for out-of-school minors',
        'Provision of essential learning resources, books, and uniforms',
        'Targeted support for disadvantaged students facing drop-out risks',
        'Educational development initiatives and teacher sensitization',
      ],
    },
    {
      id: '03',
      slug: 'disaster-relief',
      title: 'Flood Relief & Recovery',
      categoryParam: 'Disaster Relief',
      icon: LifeBuoy,
      badge: 'Proposed Funding Area',
      description:
        'Preparedness financing and emergency response collaboration to provide immediate relief and long-term climate resilience for rural households vulnerable to recurring monsoon deluges.',
      priorities: [
        'Emergency relief planning and pre-positioned supplies',
        'Essential supplies: life-saving nutrition, WASH, and clean water filtration',
        'Transitional shelter and post-flood recovery initiatives',
        'Building community resilience and rural infrastructure rehabilitation',
      ],
    },
    {
      id: '04',
      slug: 'transgender-inclusion',
      title: 'Transgender Inclusion',
      categoryParam: 'Transgender Inclusion',
      icon: Users,
      badge: 'Proposed Funding Area',
      description:
        'Dedicated philanthropic funding to advance socio-economic dignity, accredited vocational training, healthcare access, and societal inclusion for transgender citizens navigating persistent exclusion.',
      priorities: [
        'Equal opportunities and anti-discrimination legal recourse',
        'Educational inclusion and continuing adult literacy',
        'Market-relevant skills development and vocational apprenticeships',
        'Community empowerment, healthcare access, and safe drop-in spaces',
      ],
    },
    {
      id: '05',
      slug: 'child-welfare',
      title: 'Orphan & Child Welfare',
      categoryParam: 'Education & Child Welfare',
      icon: Heart,
      badge: 'Proposed Funding Area',
      description:
        'Comprehensive child safeguarding programs providing continuous education, nutritional health, pediatric monitoring, and emotional stability for orphaned and abandoned youth.',
      priorities: [
        'Full academic sponsorships covering tuition, uniforms, and books',
        'Strict child protection, safeguarding protocols, and labor prevention',
        'Basic welfare priorities including pediatric care and nutritional hampers',
        'Safe development opportunities and after-school mentorship spaces',
      ],
    },
    {
      id: '06',
      slug: 'community-welfare',
      title: 'Community Development',
      categoryParam: 'Community Development',
      icon: Globe2,
      badge: 'Proposed Funding Area',
      description:
        'Grassroots empowerment initiatives that foster interfaith harmony, legal rights awareness, civic literacy, and community-led solutions in socioeconomically marginalized settlements.',
      priorities: [
        'Principled humanitarian assistance delivered on basis of acute need',
        'Social inclusion and interfaith peacebuilding forums',
        'Community-led development through localized welfare committees',
        'Sustainable opportunities for long-term economic self-reliance',
      ],
    },
  ];

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Funding Opportunities — Supporting Communities. Advancing Human Dignity."
        description="Explore proposed funding areas and international partnership opportunities with the Pakistan Minorities Support Initiative (PMSI) covering minority rights, education, flood relief, transgender inclusion, and child welfare."
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

            {/* Exact Main Heading from Specification */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Supporting Communities. Advancing Human Dignity.
            </h1>

            {/* Exact Supporting Description from Specification */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl mb-8">
              Explore opportunities to support inclusive humanitarian initiatives focused on minority
              rights, education, child welfare, disaster recovery and community empowerment in Pakistan.
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
                to="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white shadow-md transition-all"
              >
                <Compass className="w-4 h-4 text-[#167E83]" />
                <span>Explore All Six Humanitarian Programs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Guidance & Ethics Banner */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 border border-[#167E83]/20 flex items-center justify-center text-[#167E83] shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#12304A] mb-1">
                  Transparent Funding Framework
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  PMSI presents these categories as <strong>Proposed Funding Areas</strong> for exploratory
                  collaboration with institutional grantmakers and charitable foundations. In alignment with our
                  credibility guidelines, we do not invent arbitrary donation targets or completed statistics. All
                  program budgets are tailored collaboratively based on mutual terms of reference.
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
        </div>
      </section>

      {/* Six Proposed Funding Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Funding Architecture
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#12304A] leading-tight mb-4">
              Proposed Funding Areas
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We welcome dialogue with international foundations, bilateral donor agencies, and overseas
              charitable institutions across these six humanitarian domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundingCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Header: Icon & Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#F7F9FA] border border-slate-200 flex items-center justify-center text-[#167E83] group-hover:bg-[#167E83] group-hover:text-white transition-colors duration-200 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#167E83] bg-[#167E83]/10 px-2 py-0.5 rounded border border-[#167E83]/20">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#12304A] mb-3 group-hover:text-[#167E83] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {cat.description}
                    </p>

                    {/* Proposed Support Priorities */}
                    <div className="pt-4 border-t border-slate-100 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8A85B] mb-3">
                        Proposed Support Priorities
                      </h4>
                      <ul className="space-y-2.5">
                        {cat.priorities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#167E83] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dual Action CTAs for smooth donor journey */}
                  <div className="pt-6 border-t border-slate-100 space-y-2.5">
                    <Link
                      to={`/partnership-inquiry?category=${encodeURIComponent(cat.categoryParam)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-md transition-all duration-200"
                    >
                      <Handshake className="w-4 h-4 text-[#D8A85B]" />
                      <span>Discuss Partnership</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to={`/programs/${cat.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#167E83] hover:bg-[#167E83]/10 transition-colors"
                    >
                      <span>Explore Program Details & Context</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Institutional Next Steps Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#12304A] text-white border border-[#167E83]/40 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D8A85B] mb-3">
                <Building className="w-3.5 h-3.5" />
                <span>Bilateral Program Formulation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
                Custom Institutional Project Proposals
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Does your foundation or funding trust have specific geographic, demographic, or sectoral mandates?
                We invite your coordination team to initiate an exploratory discussion.
              </p>
            </div>

            <Link
              to="/partnership-inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white shadow-md transition-all shrink-0 font-medium"
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

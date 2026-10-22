import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  LifeBuoy,
  Heart,
  GraduationCap,
  Globe2,
  ArrowRight,
} from 'lucide-react';

export const FocusAreas: React.FC = () => {
  const focusCards = [
    {
      id: '01',
      slug: 'minority-rights',
      title: 'Minority Rights & Protection',
      category: 'Protection & Justice',
      icon: ShieldCheck,
      description:
        'Upholding legal safeguards, constitutional rights, and physical security for Christian, Ahmadi, Hindu, Sikh, and all religious minority communities confronting discrimination across Pakistan.',
      tag: 'Legal & Civic Safety',
    },
    {
      id: '02',
      slug: 'transgender-inclusion',
      title: 'Transgender Inclusion & Empowerment',
      category: 'Inclusion & Dignity',
      icon: Users,
      description:
        'Advancing socio-economic dignity, vocational capacity, healthcare access, and legal recognition for transgender citizens navigating persistent exclusion and prejudice.',
      tag: 'Socio-Economic Rights',
    },
    {
      id: '03',
      slug: 'disaster-relief',
      title: 'Flood Relief & Humanitarian Assistance',
      category: 'Emergency Response',
      icon: LifeBuoy,
      description:
        'Delivering vital emergency supplies, clean drinking water, temporary shelter, and livelihood rehabilitation to vulnerable families affected by recurring flood crises.',
      tag: 'Disaster Relief',
    },
    {
      id: '04',
      slug: 'child-welfare',
      title: 'Orphan & Child Welfare',
      category: 'Child Protection',
      icon: Heart,
      description:
        'Securing safe living conditions, nutritional support, health monitoring, and emotional stability for orphaned and highly vulnerable children without familial safety nets.',
      tag: 'Youth Safeguarding',
    },
    {
      id: '05',
      slug: 'education',
      title: 'Education & Equal Opportunity',
      category: 'Human Capital',
      icon: GraduationCap,
      description:
        'Removing economic barriers to quality education through scholarships, learning materials, school access, and skills training for marginalized minority children.',
      tag: 'Equitable Access',
    },
    {
      id: '06',
      slug: 'community-welfare',
      title: 'Community Welfare & Human Rights',
      category: 'Welfare & Advocacy',
      icon: Globe2,
      description:
        'Fostering community resilience, interfaith harmony, legal literacy, and systemic human rights advocacy to safeguard vulnerable citizens at every institutional level.',
      tag: 'Community Resilience',
    },
  ];

  return (
    <section id="focus-areas" className="py-12 sm:py-20 lg:py-24 bg-white text-[#12304A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
              Our Programmatic Scope
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-5">
            Key Humanitarian Focus Areas
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            PMSI focuses on measurable, community-centered humanitarian assistance across six core
            domains where institutional vulnerability and humanitarian need are most critical.
          </p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {focusCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between p-5 sm:p-7 md:p-8 rounded-2xl bg-[#F7F9FA] border border-slate-200/90 hover:border-[#167E83] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#12304A]/5 hover:-translate-y-1"
              >
                {/* Top Bar with Number & Category Tag */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#167E83] group-hover:bg-[#167E83] group-hover:text-white group-hover:border-[#167E83] transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#D8A85B] transition-colors">
                      {card.id}
                    </span>
                  </div>

                  <div className="mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#167E83] bg-[#167E83]/10 px-2.5 py-0.5 rounded border border-[#167E83]/20">
                      {card.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#12304A] mb-3 group-hover:text-[#167E83] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tag & Learn More Link */}
                <div className="pt-5 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-600 font-medium">{card.tag}</span>
                  <Link
                    to={`/programs/${card.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#167E83] group-hover:text-[#106064] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Donor Journey Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12">
          <Link
            to="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#167E83] hover:bg-[#106064] shadow-md transition-all text-center"
          >
            <span>View All Programs & Priorities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/funding-opportunities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#167E83] bg-[#167E83]/10 hover:bg-[#167E83]/20 border border-[#167E83]/30 transition-all text-center"
          >
            <span>Explore Proposed Funding Areas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

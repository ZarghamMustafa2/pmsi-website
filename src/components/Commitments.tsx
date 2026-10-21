import React from 'react';
import { HeartHandshake, Shield, Scale, FileCheck } from 'lucide-react';

export const Commitments: React.FC = () => {
  const commitments = [
    {
      number: '01',
      title: 'Human Dignity',
      icon: HeartHandshake,
      subtitle: 'Inviolable Worth of Every Person',
      description:
        'Every individual possesses intrinsic, inviolable worth. All initiatives are designed with deep reverence for the personal dignity, autonomy, and rights of the communities we serve.',
    },
    {
      number: '02',
      title: 'Equality & Inclusion',
      icon: Scale,
      subtitle: 'Universal Non-Discriminatory Access',
      description:
        'Vulnerability knows no sectarian boundaries. We counter exclusion by ensuring equitable, non-discriminatory access to relief, protection, and opportunities for minorities and marginalized citizens.',
    },
    {
      number: '03',
      title: 'Community Protection',
      icon: Shield,
      subtitle: 'Safeguarding Vulnerable Groups',
      description:
        'Safeguarding the safety, civil protection, and wellbeing of vulnerable children, displaced families, and marginalized minority communities is fundamental to our operational mandate.',
    },
    {
      number: '04',
      title: 'Transparency & Accountability',
      icon: FileCheck,
      subtitle: 'Rigorous Ethical Stewardship',
      description:
        'We uphold rigorous institutional governance, transparent reporting, and clear accountability toward our international funding partners, institutional donors, and the communities we support.',
    },
  ];

  return (
    <section id="commitments" className="py-24 bg-[#F7F9FA] text-[#12304A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
              Institutional Ethics
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-5">
            Our Commitments
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Four enduring principles govern every facet of PMSI’s humanitarian actions, community
            partnerships, and institutional engagements across Pakistan.
          </p>
        </div>

        {/* Editorial Layout: 4 Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#12304A]/5 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-light text-slate-400 group-hover:text-[#D8A85B] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#F7F9FA] border border-slate-200 flex items-center justify-center text-[#167E83] group-hover:bg-[#167E83] group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#12304A] mb-1.5 group-hover:text-[#167E83] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#D8A85B] uppercase tracking-wider mb-3.5">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center">
                  <div className="w-6 h-0.5 bg-slate-200 group-hover:w-12 group-hover:bg-[#167E83] transition-all duration-300 rounded" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

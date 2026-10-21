import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  Heart,
  Scale,
  Users,
  GraduationCap,
  HeartHandshake,
  FileCheck2,
  Target,
  Eye,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Handshake,
  Compass,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: 'Human Dignity',
      icon: Heart,
      description:
        'Affirming the intrinsic, inviolable worth of every individual, ensuring all humanitarian assistance is delivered with profound respect and empathy.',
    },
    {
      title: 'Religious Freedom & Equality',
      icon: Scale,
      description:
        'Advocating for the rights, civic equality, and peaceful practice of religious beliefs for Christian, Ahmadi, Hindu, Sikh, and all faith communities.',
    },
    {
      title: 'Inclusion & Diversity',
      icon: Users,
      description:
        'Embracing pluralism by proactively dismantling barriers for marginalized communities, including transgender individuals and disadvantaged social groups.',
    },
    {
      title: 'Education & Empowerment',
      icon: GraduationCap,
      description:
        'Viewing accredited learning and vocational capacity as fundamental human rights that enable intergenerational socioeconomic mobility.',
    },
    {
      title: 'Humanitarian Compassion',
      icon: HeartHandshake,
      description:
        'Responding with urgency, care, and impartiality to vulnerable families facing sudden natural disasters, flood crises, and deep poverty.',
    },
    {
      title: 'Transparency & Accountability',
      icon: FileCheck2,
      description:
        'Upholding the highest standards of programmatic integrity, ethical stewardship, and honest communication with partners and communities.',
    },
  ];

  const approachPillars = [
    {
      title: 'Community Participation & Local Ownership',
      icon: Users,
      description:
        'Humanitarian programs are most effective when designed in collaboration with the people they aim to support. PMSI prioritizes listening to community leaders, women organizers, and local advocates to ensure interventions directly address genuine ground realities.',
    },
    {
      title: 'Responsible & Ethical Partnerships',
      icon: Handshake,
      description:
        'We seek meaningful, accountable alliances with international foundations, civil society networks, and humanitarian institutions that share our foundational commitment to universal dignity, non-discrimination, and sustainable community advancement.',
    },
    {
      title: 'Inclusive & Non-Discriminatory Programming',
      icon: Scale,
      description:
        'Assistance must never be conditional upon religious affiliation, ethnic background, or gender identity. Our proposed frameworks are strictly needs-based and structured to reach populations traditionally marginalized from mainstream development aid.',
    },
    {
      title: 'Rigorous Safeguarding & Protection',
      icon: ShieldCheck,
      description:
        'Protecting vulnerable children, displaced households, and minority citizens from harm, exploitation, or discrimination is fundamental. We embed strict child protection and institutional safeguarding protocols throughout all planned operations.',
    },
    {
      title: 'Sustainable Long-Term Development',
      icon: Compass,
      description:
        'While emergency humanitarian assistance provides vital life-saving relief, our approach integrates long-term pathways through quality education, livelihood capacity building, and institutional advocacy to foster enduring self-reliance.',
    },
  ];

  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="About PMSI — Advancing Human Dignity and Equal Opportunities"
        description="Learn about the Pakistan Minorities Support Initiative (PMSI), our humanitarian mission, vision, core values, and approach to supporting vulnerable communities across Pakistan."
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
          <Breadcrumb items={[{ label: 'About Us' }]} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                About PMSI
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Institutional Foundation</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Advancing Human Dignity and Equal Opportunities Across Pakistan
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
              Pakistan Minorities Support Initiative (PMSI) is dedicated to defending human rights,
              strengthening vulnerable populations, expanding educational opportunity, and providing principled
              humanitarian assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Section A: About PMSI Narrative */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                  Our Humanitarian Purpose
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#12304A] leading-tight">
                Standing for Equal Protection, Fundamental Rights, and Dignified Relief
              </h2>

              <p>
                The Pakistan Minorities Support Initiative (PMSI) was established with a singular, clear mandate:
                to serve as an independent humanitarian voice and supportive framework for Pakistan’s most vulnerable,
                underserved, and socially marginalized communities.
              </p>

              <p>
                In many parts of Pakistan, socio-economic barriers intersect with deep-rooted systemic disparities.
                Religious minorities—including Christian, Ahmadi, Hindu, Sikh, and other faith communities—frequently
                navigate heightened vulnerabilities in securing civic safety, legal defense, and equitable employment.
                Similarly, transgender individuals face entrenched societal prejudice and economic exclusion, while
                recurrent climate disasters leave impoverished rural families and orphaned children without essential
                safety nets.
              </p>

              <p>
                PMSI operates as an ethical, non-partisan initiative dedicated to bridging these gaps. By linking
                grassroots community understanding with international humanitarian principles, we aim to deliver
                actionable support, defend constitutional safeguards, and foster a more just and inclusive Pakistan.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-[#12304A] text-white border border-[#167E83]/30 shadow-xl relative overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 bg-[#167E83]/20 rounded-full blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4">
                  Institutional Mandate
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  PMSI exists to uphold human rights, expand educational pathways, provide disaster relief,
                  and ensure that every citizen, regardless of religion or identity, can live free from fear
                  and deprivation.
                </p>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-[#D8A85B] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Non-Partisan & Non-Discriminatory</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#D8A85B] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Needs-Based Humanitarian Support</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#D8A85B] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>International Donor Accountability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B & C: Mission & Vision */}
      <section className="py-20 bg-[#F7F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Section B: Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#167E83]/10 border border-[#167E83]/20 flex items-center justify-center text-[#167E83]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#167E83]">
                      Our Mission
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#12304A]">
                      Humanitarian Action
                    </h3>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#F7F9FA] border border-slate-200/80 mb-6">
                  <p className="font-serif text-lg sm:text-xl text-slate-800 font-light italic leading-relaxed">
                    "Promote minority rights, inclusive education, equal opportunities, community
                    protection and humanitarian assistance for vulnerable populations."
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We translate this mission into structured priorities across legal protection, disaster relief,
                  child safeguarding, and educational sponsorship, working to dismantle barriers that consign
                  marginalized individuals to generational hardship.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#167E83]">
                <ShieldCheck className="w-4 h-4" />
                <span>Empowering communities across Pakistan</span>
              </div>
            </div>

            {/* Section C: Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#D8A85B]/20 border border-[#D8A85B]/30 flex items-center justify-center text-[#B8893F]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#B8893F]">
                      Our Vision
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#12304A]">
                      An Inclusive Horizon
                    </h3>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#F7F9FA] border border-slate-200/80 mb-6">
                  <p className="font-serif text-lg sm:text-xl text-slate-800 font-light italic leading-relaxed">
                    "A Pakistan where every individual, regardless of faith, gender identity or
                    socioeconomic background, can live with dignity, safety and equal opportunity."
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We aspire to a future where religious diversity is respected as a national strength,
                  where justice is universally accessible, and where no individual is denied basic rights
                  or educational possibilities because of who they are.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#B8893F]">
                <Sparkles className="w-4 h-4" />
                <span>Building a resilient, pluralistic society</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Our Core Values (Six-item layout) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Guiding Principles
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-5">
              Our Core Values
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] mx-auto rounded-full mb-6" />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Six foundational commitments inform every decision, program design, and partnership we cultivate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#F7F9FA] border border-slate-200/80 hover:border-[#167E83] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#167E83] mb-6 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#12304A] mb-3">
                      {value.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {value.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>VALUE 0{idx + 1}</span>
                    <span className="w-8 h-0.5 bg-slate-200 rounded" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section E: Our Humanitarian Approach */}
      <section className="py-20 bg-[#F7F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Operational Methodology
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-5">
              Our Humanitarian Approach
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We ground our planned initiatives in international best practices, ensuring ethical delivery,
              community stewardship, and transparent cooperation with global partners.
            </p>
          </div>

          <div className="space-y-6">
            {approachPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#167E83]/60 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#167E83]/10 border border-[#167E83]/20 flex items-center justify-center text-[#167E83] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#D8A85B] uppercase tracking-wider block mb-1">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#12304A] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#12304A] text-white border border-[#167E83]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                Explore Our Programs & Priorities
              </h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Learn more about our intended areas of work or connect with our leadership to explore institutional
                collaboration opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
              <Link
                to="/programs"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#125e62] hover:from-[#1DA0A6] hover:to-[#167E83] border border-[#167E83] text-center"
              >
                View Humanitarian Programs
              </Link>
              <Link
                to="/partner-with-us"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-white text-center flex items-center justify-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-[#167E83]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

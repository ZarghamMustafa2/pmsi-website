import React from 'react';
import { Link } from 'react-router-dom';
import { getUpcomingProjects } from '../data/projectsData';
import {
  FolderKanban,
  ArrowRight,
  Handshake,
  MapPin,
  Users,
} from 'lucide-react';

export const HomeProjectsSection: React.FC = () => {
  const upcomingProjects = getUpcomingProjects().slice(0, 3);

  return (
    <section id="projects-section" className="py-24 bg-[#F7F9FA] text-[#12304A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#167E83]/10 border border-[#167E83]/20 mb-4">
              <FolderKanban className="w-4 h-4 text-[#167E83]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#167E83]">
                Project Portfolio
              </span>
            </div>

            {/* Exact Required Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#12304A] leading-tight mb-4">
              Our Humanitarian Projects
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#167E83] to-[#D8A85B] rounded-full mb-4" />

            {/* Exact Required Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Discover our humanitarian priorities and explore opportunities to support proposed initiatives.
            </p>
          </div>

          {/* Exact Required Button */}
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#12304A] hover:bg-[#167E83] transition-all shadow-md shrink-0 font-medium"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#D8A85B] shadow-xs hover:shadow-xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Top Row: Category & Status */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#167E83]/10 text-[#167E83]">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-amber-50 text-amber-900 border border-amber-300 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>Funding Required</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#12304A] group-hover:text-[#167E83] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {project.summary}
                  </p>
                </div>

                {/* Metadata */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
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
                      <span className="font-bold text-slate-900">Target Community: </span>
                      <span className="text-slate-600 leading-relaxed">{project.communityBeneficiary}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/80 text-[11px] text-amber-950 font-medium">
                    Funding Requirement: {project.fundingRequirement}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <Link
                  to={`/partnership-inquiry?project=${encodeURIComponent(project.title)}&category=${encodeURIComponent(project.category)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#167E83] to-[#12585c] hover:from-[#1DA0A6] hover:to-[#167E83] shadow-xs transition-all"
                >
                  <Handshake className="w-3.5 h-3.5 text-[#D8A85B]" />
                  <span>Discuss Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#12304A] bg-[#F7F9FA] hover:bg-slate-200/80 border border-slate-200 transition-colors"
                >
                  <span>View Project Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

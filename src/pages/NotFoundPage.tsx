import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import {
  FileQuestion,
  Home,
  FolderKanban,
  HeartHandshake,
  ShieldCheck,
  Mail,
  ArrowRight,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { PMSI_CONTACT } from '../data/contactData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F7F9FA] min-h-screen text-[#12304A]">
      <SEO
        title="Page Not Found (404) — Pakistan Minorities Support Initiative"
        description="The requested page could not be found. Navigate through Pakistan Minorities Support Initiative (PMSI) verified humanitarian programs, projects, and governance pages."
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
          <Breadcrumb items={[{ label: '404 - Page Not Found' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <FileQuestion className="w-4 h-4 text-[#D8A85B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D8A85B]">
                HTTP 404
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs text-slate-300">Resource Unavailable</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
              Page Not Found
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              The page you are looking for may have been moved, renamed, or is currently unavailable.
              Please verify the address or navigate via our verified sections below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Guidance Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Primary Action Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 md:p-12 text-center max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-800 flex items-center justify-center mx-auto shadow-2xs">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#12304A]">404</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12304A]">
              Looking for something specific?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Explore PMSI&apos;s verified humanitarian priorities, community initiatives, or contact our secretariat for direct assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#12304A] hover:bg-[#167E83] transition-colors shadow-xs"
            >
              <Home className="w-4 h-4 text-[#D8A85B]" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-colors shadow-xs"
            >
              <FolderKanban className="w-4 h-4 text-[#12304A]" />
              <span>Our Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PMSI_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>

        {/* Directory of Primary Sections */}
        <div className="space-y-6">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#12304A]">
              Explore Main Website Sections
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select one of our primary public pages to continue browsing:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Link 1: Programs */}
            <Link
              to="/programs"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#167E83]/10 text-[#167E83] flex items-center justify-center shrink-0 group-hover:bg-[#167E83] group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#12304A] group-hover:text-[#167E83] transition-colors">
                  Our Programs
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Six strategic pillars protecting rights, education, and humanitarian relief.
                </p>
              </div>
            </Link>

            {/* Link 2: Featured Project */}
            <Link
              to="/projects/education-support-minority-children/proposal"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-[#D8A85B] group-hover:text-[#12304A] transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#12304A] group-hover:text-[#167E83] transition-colors">
                  Education Support Proposal
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  USD 30,000 project funding dossier for minority children schooling.
                </p>
              </div>
            </Link>

            {/* Link 3: Partner With Us */}
            <Link
              to="/partner-with-us"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#12304A]/10 text-[#12304A] flex items-center justify-center shrink-0 group-hover:bg-[#12304A] group-hover:text-white transition-colors">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#12304A] group-hover:text-[#167E83] transition-colors">
                  Partner With Us
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Frameworks for institutional funders, grantmakers, and diaspora partners.
                </p>
              </div>
            </Link>

            {/* Link 4: Transparency */}
            <Link
              to="/transparency"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#12304A] group-hover:text-[#167E83] transition-colors">
                  Transparency & Governance
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Governance standards, registration status, and ethical accountability.
                </p>
              </div>
            </Link>

            {/* Link 5: Contact Page */}
            <Link
              to="/contact"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#12304A] group-hover:text-[#167E83] transition-colors">
                  Contact PMSI
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified communications desk, WhatsApp link, and institutional inquiries.
                </p>
              </div>
            </Link>

            {/* Link 6: Donate & Support */}
            <Link
              to="/donate"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#167E83] hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center shrink-0 group-hover:bg-rose-700 group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#12304A] group-hover:text-[#167E83] transition-colors">
                  Donate & Support
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transitional contribution methods and regulatory status transparency.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

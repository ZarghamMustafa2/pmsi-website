import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ArrowUp, Shield, Heart } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e2438] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Organization Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" showSubtitle={true} />

            <div className="pt-2">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#D8A85B] block mb-2">
                Pakistan Minorities Support Initiative (PMSI)
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
                Dedicated to advancing human rights, strengthening vulnerable communities,
                expanding educational opportunities and promoting humanitarian support across Pakistan.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
                <Shield className="w-3.5 h-3.5 text-[#167E83]" />
                <span>Independent • Humanitarian • Non-Discriminatory</span>
              </div>

              <Link
                to="/donate"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] transition-all shadow-sm"
              >
                <Heart className="w-3 h-3 fill-[#12304A]" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>

          {/* Quick Internal Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8A85B]">
              Institutional Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-[#D8A85B] font-bold hover:underline flex items-center gap-1.5 transition-colors">
                  <Heart className="w-3.5 h-3.5 fill-[#D8A85B]" />
                  <span>Donate Now</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  About PMSI
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Humanitarian Programs
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Humanitarian Projects
                </Link>
              </li>
              <li>
                <Link to="/funding-opportunities" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Funding Opportunities
                </Link>
              </li>
              <li>
                <Link to="/transparency" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Transparency & Governance
                </Link>
              </li>
              <li>
                <Link to="/partnership-inquiry" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Partnership Inquiry Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Contact PMSI
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-200 hover:text-[#D8A85B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Focus Areas List with Links to Detailed Pages (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8A85B]">
              Programmatic Domains
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>
                <Link
                  to="/programs/minority-rights"
                  className="flex items-center gap-2 hover:text-[#D8A85B] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                  <span>Minority Rights & Protection</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/transgender-inclusion"
                  className="flex items-center gap-2 hover:text-[#D8A85B] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                  <span>Transgender Inclusion & Empowerment</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/disaster-relief"
                  className="flex items-center gap-2 hover:text-[#D8A85B] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                  <span>Disaster Relief & Emergency Support</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/child-welfare"
                  className="flex items-center gap-2 hover:text-[#D8A85B] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                  <span>Orphan & Vulnerable Child Welfare</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/education"
                  className="flex items-center gap-2 hover:text-[#D8A85B] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                  <span>Education & Learning Opportunities</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/community-welfare"
                  className="flex items-center gap-2 hover:text-[#D8A85B] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#167E83]" />
                  <span>Community Welfare & Human Rights</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back-to-top */}
        <div className="pt-10 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © {CURRENT_YEAR} Pakistan Minorities Support Initiative (PMSI). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/transparency" className="hover:text-[#D8A85B] transition-colors">
              Legal Disclosure
            </Link>
            <Link to="/privacy-policy" className="hover:text-[#D8A85B] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#D8A85B] transition-colors">
              Contact
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

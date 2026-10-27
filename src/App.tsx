import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Code-split route pages for optimized performance & fast initial paint
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage').then((m) => ({ default: m.ProgramsPage })));
const ProgramDetailPage = lazy(() => import('./pages/ProgramDetailPage').then((m) => ({ default: m.ProgramDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const ProjectProposalPage = lazy(() => import('./pages/ProjectProposalPage').then((m) => ({ default: m.ProjectProposalPage })));
const PartnerWithUsPage = lazy(() => import('./pages/PartnerWithUsPage').then((m) => ({ default: m.PartnerWithUsPage })));
const FundingOpportunitiesPage = lazy(() => import('./pages/FundingOpportunitiesPage').then((m) => ({ default: m.FundingOpportunitiesPage })));
const PartnershipInquiryPage = lazy(() => import('./pages/PartnershipInquiryPage').then((m) => ({ default: m.PartnershipInquiryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const TransparencyPage = lazy(() => import('./pages/TransparencyPage').then((m) => ({ default: m.TransparencyPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const DonatePage = lazy(() => import('./pages/DonatePage').then((m) => ({ default: m.DonatePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const PageLoadingFallback: React.FC = () => (
  <div
    className="min-h-[50vh] flex flex-col items-center justify-center p-8"
    role="status"
    aria-label="Loading page content"
  >
    <div className="w-10 h-10 border-3 border-[#167E83]/20 border-t-[#167E83] rounded-full animate-spin" />
    <span className="mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
      Loading...
    </span>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F9FA] text-[#12304A]">
        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Section A — Professional Header (Persistent across all routes) */}
        <Header />

        {/* Route-driven main content with Suspense boundary */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              {/* Route: Home */}
              <Route path="/" element={<HomePage />} />

              {/* Route: About Us */}
              <Route path="/about" element={<AboutPage />} />

              {/* Route: Our Programs Overview */}
              <Route path="/programs" element={<ProgramsPage />} />

              {/* Six Detailed Program Routes */}
              <Route path="/programs/:slug" element={<ProgramDetailPage />} />

              {/* Route: Our Humanitarian Projects */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/projects/:slug/proposal" element={<ProjectProposalPage />} />

              {/* Route: International Partnerships */}
              <Route path="/partner-with-us" element={<PartnerWithUsPage />} />

              {/* Phase 3 Routes */}
              {/* Route: Funding Opportunities */}
              <Route path="/funding-opportunities" element={<FundingOpportunitiesPage />} />

              {/* Route: Partnership Inquiry System */}
              <Route path="/partnership-inquiry" element={<PartnershipInquiryPage />} />

              {/* Route: Contact Us */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Route: Transparency & Governance */}
              <Route path="/transparency" element={<TransparencyPage />} />

              {/* Route: Privacy Policy */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

              {/* Route: Donate Now */}
              <Route path="/donate" element={<DonatePage />} />

              {/* Catch-all dedicated 404 page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Section H — Footer (Persistent across all routes) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

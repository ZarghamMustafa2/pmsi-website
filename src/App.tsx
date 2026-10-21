import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { PartnerWithUsPage } from './pages/PartnerWithUsPage';
import { FundingOpportunitiesPage } from './pages/FundingOpportunitiesPage';
import { PartnershipInquiryPage } from './pages/PartnershipInquiryPage';
import { ContactPage } from './pages/ContactPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DonatePage } from './pages/DonatePage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F9FA] text-[#12304A]">
        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Section A — Professional Header (Persistent across all routes) */}
        <Header />

        {/* Route-driven main content */}
        <main className="flex-grow">
          <Routes>
            {/* Route: Home */}
            <Route path="/" element={<HomePage />} />

            {/* Route: About Us */}
            <Route path="/about" element={<AboutPage />} />

            {/* Route: Our Programs Overview */}
            <Route path="/programs" element={<ProgramsPage />} />

            {/* Six Detailed Program Routes */}
            <Route path="/programs/:slug" element={<ProgramDetailPage />} />

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

            {/* Catch-all fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Section H — Footer (Persistent across all routes) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

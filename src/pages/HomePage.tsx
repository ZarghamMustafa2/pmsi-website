import React from 'react';
import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { FocusAreas } from '../components/FocusAreas';
import { MissionVision } from '../components/MissionVision';
import { Commitments } from '../components/Commitments';
import { Partnership } from '../components/Partnership';
import { ContactSection } from '../components/ContactSection';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Protecting Rights. Empowering Communities. Restoring Hope."
        description="Pakistan Minorities Support Initiative (PMSI) is dedicated to advancing human rights, equality, dignity, educational opportunity and humanitarian protection for vulnerable communities across Pakistan."
      />
      {/* Section B — Hero Section */}
      <Hero />

      {/* Section C — Who We Are */}
      <WhoWeAre />

      {/* Section D — Our Focus Areas */}
      <FocusAreas />

      {/* Section E — Our Mission & Vision */}
      <MissionVision />

      {/* Section F — Our Commitments */}
      <Commitments />

      {/* Section G — International Partnership */}
      <Partnership />

      {/* Contact & Institutional Inquiries */}
      <ContactSection />
    </>
  );
};

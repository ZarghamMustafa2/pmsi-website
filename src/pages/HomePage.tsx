import React from 'react';
import { Hero } from '../components/Hero';
import { FocusAreas } from '../components/FocusAreas';
import { HomeProjectsSection } from '../components/HomeProjectsSection';
import { MissionVision } from '../components/MissionVision';
import { Partnership } from '../components/Partnership';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Protecting Rights. Empowering Communities. Restoring Hope."
        description="Pakistan Minorities Support Initiative (PMSI) is dedicated to advancing human rights, equality, dignity, educational opportunity and humanitarian protection for vulnerable communities across Pakistan."
      />
      {/* 1. Brief Introduction */}
      <Hero />

      {/* 2. Focus Areas */}
      <FocusAreas />

      {/* 3. Featured Projects */}
      <HomeProjectsSection />

      {/* 4. Mission Summary */}
      <MissionVision />

      {/* 5. Partnership CTA */}
      <Partnership />
    </>
  );
};

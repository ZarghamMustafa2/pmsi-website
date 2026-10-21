import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { programsData } from '../data/programsData';
import { ProgramDetailLayout } from '../components/ProgramDetailLayout';
import { ArrowLeft } from 'lucide-react';

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F9FA] px-4 py-24 text-center">
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
          <h2 className="font-serif text-2xl font-bold text-[#12304A] mb-3">
            Program Not Found
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            The humanitarian program you are looking for does not exist or may have been updated.
          </p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#167E83] hover:bg-[#106064] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Programs</span>
          </Link>
        </div>
      </div>
    );
  }

  return <ProgramDetailLayout program={program} />;
};

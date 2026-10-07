import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Zap, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Mail,
  Linkedin
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
  onToggleRecruiterMode: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  data,
  onToggleRecruiterMode,
  onOpenResume,
}) => {
  return (
    <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-stone-200 bg-white">
      {/* Subtle top indicator bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Unboxed breadcrumb / affiliation */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 mb-4 tracking-wide uppercase">
            <span className="text-stone-900 font-semibold">{data.degree}</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>{data.college}</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-stone-400" />
              {data.location}
            </span>
          </div>

          {/* Primary Name & Headline */}
          <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] mb-5">
            {data.name}
          </h1>

          <p className="text-lg sm:text-xl text-stone-800 font-medium leading-snug mb-4">
            {data.tagline}
          </p>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 font-normal">
            {data.summary}
          </p>

          {/* Call to Actions (No dead links, functional buttons) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-medium rounded transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Explore Business Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-medium rounded border border-stone-300 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-stone-700" />
              <span>View ATS Resume</span>
            </button>

            <button
              onClick={onToggleRecruiterMode}
              className="px-4 py-2.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>15-Sec Recruiter Fast Track</span>
            </button>
          </div>

          {/* Truth & Evidence Guarantee Banner (Unboxed, clean) */}
          <div className="pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 font-semibold">Evidence-First Portfolio</strong>
                <span>All claims backed by coursework, case studies, or campus roles.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 font-semibold">Vedanta College BBA</strong>
                <span>Rigorous study across Finance, Marketing, Economics & Operations.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 font-semibold">Verified Contact Channel</strong>
                <a 
                  href={`mailto:${data.email}`}
                  className="hover:underline text-stone-900 font-medium block truncate"
                >
                  {data.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

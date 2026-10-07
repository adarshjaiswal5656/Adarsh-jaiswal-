import React from 'react';
import { 
  Compass, 
  Target, 
  TrendingUp, 
  HelpCircle, 
  CheckCircle2, 
  Layers,
  GraduationCap
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface AboutSectionProps {
  data: PortfolioData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            01. Background & Philosophy
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            About Adarsh Jaiswal
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            A transparent look into my academic journey, core intellectual interests, and the deliberate approach I take toward early-career business problems.
          </p>
        </div>

        {/* Narrative & The 5 Core Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story & Approach */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200 space-y-4">
              <h3 className="font-serif-title text-xl font-bold text-stone-900">
                Grounding Business Theory in Real Evidence
              </h3>
              <p>
                As a Bachelor of Business Administration (BBA) student at <strong>Vedanta College</strong>, I have approached my studies with an active focus on practical application. Rather than simply memorizing management frameworks, I look for ways to stress-test them through case study deconstructions, spreadsheet modeling, and campus operations.
              </p>
              <p>
                I believe early-career professionals should be defined by their intellectual curiosity, analytical honesty, and willingness to do the foundational legwork. Whether dissecting quick-commerce unit economics or reorganizing college seminar logistics, I prioritize precision, clear communication, and measurable outcomes.
              </p>
              
              <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-4 text-xs font-medium text-stone-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Learning First</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Evidence-Driven</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Fabrication</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Growth Mindset</span>
                </div>
              </div>
            </div>

            {/* Growth Journey Formula */}
            <div className="bg-stone-100/80 p-5 rounded-lg border border-stone-200">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                My Professional Progression Model
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-800">
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Continuous Learning</span>
                <span className="text-stone-400">→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Hands-on Practice</span>
                <span className="text-stone-400">→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Concrete Evidence</span>
                <span className="text-stone-400">→</span>
                <span className="bg-white px-2.5 py-1 rounded border border-stone-200">Measurable Growth</span>
                <span className="text-stone-400">→</span>
                <span className="bg-stone-900 text-white px-2.5 py-1 rounded">Business Value</span>
              </div>
            </div>
          </div>

          {/* Quick-Answers Card for Visitors & Recruiters */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-lg border border-stone-200 space-y-5">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Quick Strategic Summary
              </div>

              {/* Q1: Who is Adarsh? */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-stone-600" />
                  <span>Who is Adarsh?</span>
                </div>
                <p className="text-xs text-stone-600">
                  A motivated BBA student at Vedanta College building rigorous capabilities in business strategy, financial analysis, and operational planning.
                </p>
              </div>

              {/* Q2: What does Adarsh know? */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-stone-600" />
                  <span>What does Adarsh know?</span>
                </div>
                <p className="text-xs text-stone-600">
                  Financial accounting basics, microeconomics, market segmentation, spreadsheet data modeling (Excel), and operational process auditing.
                </p>
              </div>

              {/* Q3: What can Adarsh do? */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-stone-600" />
                  <span>What can Adarsh do?</span>
                </div>
                <p className="text-xs text-stone-600">
                  Build sensitivity tables, execute structured customer surveys, map workflow bottlenecks, coordinate campus event logistics, and present findings clearly.
                </p>
              </div>

              {/* Q4: What is Adarsh interested in? */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-stone-600" />
                  <span>What is Adarsh interested in?</span>
                </div>
                <p className="text-xs text-stone-600">
                  Corporate valuation, market research, supply chain dynamics, FMCG & retail consumer patterns, and strategy consulting methodology.
                </p>
              </div>

              {/* Q5: Why contact Adarsh? */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-stone-600" />
                  <span>Why contact Adarsh?</span>
                </div>
                <p className="text-xs text-stone-600">
                  Reliable diligence, high coachability, clear writing, and readiness to bring structured analytical energy to internship or trainee projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

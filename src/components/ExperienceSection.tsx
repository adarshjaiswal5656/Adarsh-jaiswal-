import React from 'react';
import { 
  Users, 
  Calendar, 
  CheckCircle2, 
  Building2,
  Award
} from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            05. Campus Leadership & Execution
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Collegiate Governance & Team Leadership
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Hands-on organizational experience coordinating campus business associations, cross-batch case reviews, and academic symposium logistics at Vedanta College.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-stone-100">
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    {exp.type}
                  </div>
                  <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-stone-900">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-stone-800 mt-0.5">
                    {exp.organization}
                  </div>
                </div>

                <div className="text-xs text-stone-500 font-medium flex items-center gap-1.5 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
                    Key Responsibilities
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-stone-400 font-mono-code text-[11px] mt-0.5">•</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200/80">
                  <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
                    Measurable Outcomes
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {exp.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

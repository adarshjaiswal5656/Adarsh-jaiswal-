import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Award,
  CheckCircle,
  FileCheck
} from 'lucide-react';
import { EducationItem } from '../types/portfolio';

interface EducationSectionProps {
  education: EducationItem;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 sm:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            02. Academic Foundation
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Education & Coursework
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Formal undergraduate business education providing theoretical foundations in commerce, finance, strategy, and operational frameworks.
          </p>
        </div>

        {/* Primary Education Card */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 text-stone-500 text-xs font-semibold uppercase tracking-wider mb-1">
                <GraduationCap className="w-4 h-4 text-stone-700" />
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-950">
                {education.degree}
              </h3>
              <div className="text-base font-semibold text-stone-800 mt-1">
                {education.institution}
              </div>
              <div className="text-xs text-stone-500 mt-1 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  {education.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-700 font-medium">{education.specialization}</span>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-200/80 text-stone-800 text-xs font-medium rounded">
                <Calendar className="w-3.5 h-3.5 text-stone-600" />
                <span>{education.period}</span>
              </div>
              <div className="text-xs text-emerald-700 font-medium mt-1.5 flex items-center md:justify-end gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>{education.status}</span>
              </div>
            </div>
          </div>

          {/* Core Subjects / Coursework */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4 text-stone-700" />
              <span>Core Academic Curriculum</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {education.coursework.map((subject, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded border border-stone-200 text-xs font-medium text-stone-800 flex items-start gap-2 shadow-2xs"
                >
                  <span className="text-stone-400 font-mono-code text-[11px] mt-0.5">0{idx + 1}.</span>
                  <span>{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights & Rigor */}
          <div className="pt-4 border-t border-stone-200/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider mb-3">
              <FileCheck className="w-4 h-4 text-stone-700" />
              <span>Departmental Engagement & Academic Highlights</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {education.academicHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="bg-white p-4 rounded border border-stone-200 text-xs text-stone-600 leading-relaxed"
                >
                  <span className="block font-semibold text-stone-900 mb-1">
                    Highlight #{idx + 1}
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

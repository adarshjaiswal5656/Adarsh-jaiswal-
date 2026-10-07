import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  BookOpen,
  Trophy,
  ShieldAlert
} from 'lucide-react';
import { CertificationItem, AchievementItem } from '../types/portfolio';

interface CertificationsSectionProps {
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  achievements,
}) => {
  return (
    <section className="py-16 sm:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Column 1: Certifications & Coursework */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                06. Professional Development
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-2">
                Coursework & Certifications
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Self-directed coursework reinforcing financial fundamentals, spreadsheet rigor, and market strategy.
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => {
                const isCompleted = cert.status === 'Completed';

                return (
                  <div
                    key={cert.id}
                    className="p-5 rounded-lg border border-stone-200 bg-stone-50/70 hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-sm sm:text-base font-bold text-stone-950">
                        {cert.name}
                      </h3>
                      {/* Unboxed Status */}
                      <span className={`text-xs font-medium shrink-0 flex items-center gap-1 ${
                        isCompleted ? 'text-emerald-700' : 'text-amber-700'
                      }`}>
                        {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                        <span>{cert.status}</span>
                      </span>
                    </div>

                    <div className="text-xs text-stone-600 mb-3 flex items-center gap-2">
                      <span>{cert.issuer}</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="text-stone-500">{cert.dateOrStatus}</span>
                    </div>

                    {/* Skills learned */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-600">
                      <span className="font-semibold text-stone-800">Core Areas:</span>
                      {cert.skillsLearned.map((s, idx) => (
                        <span key={idx}>
                          <span>{s}</span>
                          {idx < cert.skillsLearned.length - 1 && <span className="text-stone-300 ml-1.5">/</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Genuine Achievements */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                07. Verified Recognition
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-2">
                Academic & Campus Honors
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Recognitions earned across collegiate presentations, case analyses, and organizational duties.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-5 rounded-lg border border-stone-200 bg-white shadow-2xs space-y-2"
                >
                  <div className="flex items-start gap-2.5">
                    <Trophy className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 leading-snug">
                        {ach.title}
                      </h3>
                      <div className="text-xs text-stone-500 mt-0.5 flex items-center gap-1.5">
                        <span>{ach.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{ach.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-stone-600 leading-relaxed pl-6.5">
                    {ach.description}
                  </p>

                  <div className="pl-6.5 text-[11px] text-stone-500 font-medium">
                    Verified Context: <span className="text-stone-700">{ach.verifiableContext}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

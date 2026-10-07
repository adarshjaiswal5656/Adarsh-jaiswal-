import React, { useState } from 'react';
import { 
  Briefcase, 
  Cpu, 
  Users, 
  BookOpen, 
  ArrowUpRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'business' | 'technical' | 'soft' | 'learning'>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Verified Skills', count: skills.length },
    { key: 'business', label: 'Business & Strategy', count: skills.filter(s => s.category === 'business').length },
    { key: 'technical', label: 'Technical & Tools', count: skills.filter(s => s.category === 'technical').length },
    { key: 'soft', label: 'Execution & Soft Skills', count: skills.filter(s => s.category === 'soft').length },
    { key: 'learning', label: 'Currently Learning', count: skills.filter(s => s.category === 'learning').length },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            03. Evidence-Backed Competencies
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Skills & Practical Proof
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Strictly adhering to the <strong className="text-stone-900">Claim + Evidence + Outcome</strong> formula. Every skill listed below is substantiated by coursework, research papers, or campus operations.
          </p>
        </div>

        {/* Category Filter Controls (Functional segmented buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg max-w-fit mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === cat.key
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-1.5 text-[10px] text-stone-400 font-mono-code">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => {
            const isLearning = skill.category === 'learning';

            return (
              <div
                key={skill.id}
                className={`p-5 rounded-lg border transition-all ${
                  isLearning
                    ? 'bg-amber-50/40 border-amber-200/80 hover:border-amber-300'
                    : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                }`}
              >
                {/* Header row: Skill Title + Unboxed Category Metadata */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="text-base font-bold text-stone-900 tracking-tight">
                    {skill.name}
                  </h3>
                  
                  {/* Clean unboxed metadata separator */}
                  <div className="text-[11px] font-medium text-stone-500 shrink-0 flex items-center gap-1.5">
                    <span className="capitalize">{skill.category}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className={isLearning ? 'text-amber-700 font-semibold' : 'text-stone-700'}>
                      {skill.proficiency || (isLearning ? 'In Progress' : 'Practicing')}
                    </span>
                  </div>
                </div>

                {/* Claim */}
                <div className="text-xs text-stone-800 mb-3 font-medium">
                  {skill.claim}
                </div>

                {/* Evidence & Outcome breakdown */}
                <div className="space-y-2 pt-3 border-t border-stone-100 text-xs text-stone-600">
                  <div>
                    <span className="font-semibold text-stone-900 block text-[11px] uppercase tracking-wider mb-0.5">
                      Verifiable Evidence
                    </span>
                    <p className="leading-relaxed">{skill.evidence}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block text-[11px] uppercase tracking-wider mb-0.5">
                      Result / Practical Output
                    </span>
                    <p className="leading-relaxed text-stone-700 font-medium">{skill.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Anti-Fabrication Guarantee footer note */}
        <div className="mt-8 p-4 bg-white rounded border border-stone-200 text-xs text-stone-500 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            <strong className="text-stone-800">No Inflated Seniority Guarantee:</strong> As an undergraduate BBA student, I do not claim decade-long mastery or inflated enterprise certifications. Skills marked "In Progress" reflect active weekly study and online academic curriculum.
          </p>
        </div>
      </div>
    </section>
  );
};

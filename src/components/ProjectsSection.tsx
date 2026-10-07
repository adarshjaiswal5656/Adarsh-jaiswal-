import React, { useState } from 'react';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Wrench, 
  CheckCircle2, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.type.toLowerCase().includes(filter.toLowerCase()));

  const filterOptions = [
    { key: 'all', label: 'All Projects & Cases', count: projects.length },
    { key: 'case study', label: 'Business Case Studies', count: projects.filter(p => p.type === 'Case Study').length },
    { key: 'academic', label: 'Academic Coursework', count: projects.filter(p => p.type === 'Academic Project').length },
    { key: 'simulation', label: 'Simulations & Competitions', count: projects.filter(p => p.type === 'Business Simulation').length },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 max-w-3xl">
          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            04. Evidence & Application
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Projects, Case Studies & Research
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Rigorous business analyses addressing logistics unit economics, working capital dynamics, and operational bottleneck resolution.
          </p>
        </div>

        {/* Filter Controls (Allowed functional segmented buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg max-w-fit mb-8 border border-stone-200">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === opt.key
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              <span>{opt.label}</span>
              <span className="ml-1.5 text-[10px] text-stone-400 font-mono-code">({opt.count})</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-stone-400 transition-all shadow-2xs group"
            >
              <div>
                {/* Unboxed Metadata (NO PILLS) */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-stone-800">{project.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.duration}</span>
                  {project.isHypotheticalOrAcademic && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-800 font-medium">Hypothetical Case</span>
                    </>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-stone-950 leading-snug mb-2 group-hover:text-stone-800">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Problem Statement */}
                <div className="bg-white p-3.5 rounded border border-stone-200/80 mb-4 text-xs text-stone-700 leading-relaxed">
                  <strong className="text-stone-900 block font-semibold mb-1">Objective / Problem:</strong>
                  {project.objective}
                </div>

                {/* Key Result Highlight */}
                <div className="space-y-1.5 mb-5 text-xs">
                  <strong className="text-stone-900 block font-semibold uppercase tracking-wider text-[11px]">
                    Key Deliverable & Finding:
                  </strong>
                  <div className="flex items-start gap-2 text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{project.resultsAndOutcome[0]}</span>
                  </div>
                </div>

                {/* Tools Used (Clean unboxed text) */}
                <div className="text-xs text-stone-500 flex flex-wrap items-center gap-1.5 mb-6">
                  <span className="font-semibold text-stone-700">Tools:</span>
                  {project.toolsUsed.map((tool, idx) => (
                    <span key={idx}>
                      <span className="text-stone-700">{tool}</span>
                      {idx < project.toolsUsed.length - 1 && <span className="text-stone-300 ml-1.5">/</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Role: {project.role}</span>
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-stone-600 transition-colors py-1 group/btn"
                >
                  <span>Read Full Case Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

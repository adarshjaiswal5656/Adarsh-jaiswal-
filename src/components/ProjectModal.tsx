import React, { useEffect } from 'react';
import { 
  X, 
  Target, 
  HelpCircle, 
  Search, 
  Lightbulb, 
  Wrench, 
  TrendingUp, 
  GraduationCap, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white border border-stone-200 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>{project.type}</span>
            <span aria-hidden="true">·</span>
            <span>{project.duration}</span>
            {project.isHypotheticalOrAcademic && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Hypothetical Case Simulation
                </span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 id="modal-project-title" className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-950 leading-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base text-stone-600 font-medium">
              {project.subtitle}
            </p>
            <div className="mt-3 text-xs text-stone-500 flex flex-wrap gap-4">
              <div><strong className="text-stone-900 font-semibold">My Role:</strong> {project.role}</div>
              <div><strong className="text-stone-900 font-semibold">Timeline:</strong> {project.duration}</div>
            </div>
          </div>

          {/* Objective & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wide mb-2">
                <Target className="w-4 h-4 text-stone-700" />
                <span>Primary Objective</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wide mb-2">
                <HelpCircle className="w-4 h-4 text-stone-700" />
                <span>The Core Challenge</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Research & Analysis Methodology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider">
              <Search className="w-4 h-4 text-stone-700" />
              <span>Research Methodology & Analysis</span>
            </div>
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
              {project.researchAndAnalysis}
            </div>
          </div>

          {/* Strategy & Execution */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-stone-700" />
              <span>Strategy Formulation & Execution</span>
            </div>
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
              {project.strategyAndExecution}
            </div>
          </div>

          {/* Tools & Frameworks Used */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4 text-stone-700" />
              <span>Tools & Frameworks Applied</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-stone-700">
              {project.toolsUsed.map((tool, idx) => (
                <span key={idx} className="bg-stone-100 border border-stone-200 px-3 py-1 rounded font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Measurable Outcomes */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-emerald-700" />
              <span>Measurable Outcomes & Deliverables</span>
            </div>
            <ul className="space-y-2 bg-emerald-50/40 border border-emerald-200/80 p-4 rounded-lg">
              {project.resultsAndOutcome.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-stone-700" />
              <span>Key Intellectual Takeaways</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-stone-700 bg-stone-50 p-4 rounded-lg border border-stone-200">
              {project.keyLearnings.map((learn, idx) => (
                <li key={idx} className="leading-relaxed">{learn}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-stone-50 px-6 py-4 border-t border-stone-200 flex items-center justify-between">
          <div className="text-xs text-stone-500">
            Adarsh Jaiswal · BBA Vedanta College
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs font-medium rounded transition-colors"
          >
            Close Deep-Dive
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { 
  Clock, 
  FileText, 
  Mail, 
  ArrowRight, 
  CheckCircle, 
  Briefcase, 
  Sparkles,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { PortfolioData, ProjectItem } from '../types/portfolio';

interface RecruiterScanViewProps {
  data: PortfolioData;
  onOpenResume: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onExitRecruiterMode: () => void;
}

export const RecruiterScanView: React.FC<RecruiterScanViewProps> = ({
  data,
  onOpenResume,
  onSelectProject,
  onExitRecruiterMode,
}) => {
  const topProjects = data.projects.slice(0, 2);

  return (
    <div className="bg-stone-900 text-stone-100 py-10 px-4 sm:px-6 rounded-xl my-8 border border-stone-800 shadow-xl transition-all">
      <div className="max-w-5xl mx-auto">
        {/* Recruiter header bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>15-Second Recruiter Fast-Track Briefing</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-medium bg-stone-100 hover:bg-white text-stone-900 rounded transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full ATS Resume</span>
            </button>
            <button
              onClick={onExitRecruiterMode}
              className="text-xs text-stone-400 hover:text-stone-200 transition-colors underline underline-offset-4"
            >
              Return to Standard View
            </button>
          </div>
        </div>

        {/* 15-second grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Column 1: Candidate Overview */}
          <div className="space-y-4">
            <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              01. Candidate Profile
            </div>
            <div>
              <h2 className="text-xl font-serif-title font-bold text-white mb-1">
                {data.name}
              </h2>
              <div className="text-xs text-amber-300 font-medium flex items-center gap-1.5 mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{data.degree}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Undergraduate at <span className="text-white font-medium">{data.college}</span>, Mumbai. Combining business economics, financial modeling, and structured problem-solving.
              </p>
            </div>

            <div className="bg-stone-800/80 p-3.5 rounded border border-stone-700/60 space-y-2">
              <div className="text-[11px] font-semibold text-stone-300 uppercase tracking-wide">
                Target Opportunities
              </div>
              <ul className="text-xs text-stone-300 space-y-1">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Business Analyst Intern</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Market Research & Strategy Intern</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Operations / Management Trainee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Core Competencies & Proof */}
          <div className="space-y-4">
            <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              02. Practical Capabilities + Proof
            </div>
            <div className="space-y-3">
              <div className="border-l-2 border-amber-400/80 pl-3">
                <div className="text-xs font-semibold text-white">
                  Financial & Spreadsheets Modeling
                </div>
                <div className="text-[11px] text-stone-300 mt-0.5">
                  Built dynamic working capital & unit economics sensitivity models using advanced Excel functions (XLOOKUP, SUMIFS, sensitivity tables).
                </div>
              </div>

              <div className="border-l-2 border-emerald-400/80 pl-3">
                <div className="text-xs font-semibold text-white">
                  Market Research & GTM Analysis
                </div>
                <div className="text-[11px] text-stone-300 mt-0.5">
                  Executed primary consumer surveys (65+ respondents) and secondary channel margin analysis for Indian retail logistics.
                </div>
              </div>

              <div className="border-l-2 border-blue-400/80 pl-3">
                <div className="text-xs font-semibold text-white">
                  Process & Event Operations
                </div>
                <div className="text-[11px] text-stone-300 mt-0.5">
                  Optimized Vedanta College management symposium check-in workflow, cutting peak queue wait time by ~35%.
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Top Projects & Direct Outreach */}
          <div className="space-y-4">
            <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
              03. Top Evidence & Outreach
            </div>
            <div className="space-y-2.5">
              {topProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectProject(p)}
                  className="w-full text-left p-3 rounded bg-stone-800/60 hover:bg-stone-800 border border-stone-700/50 hover:border-amber-400/60 transition-all group"
                >
                  <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1">
                    <span>{p.type}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <div className="text-xs font-semibold text-white line-clamp-1 group-hover:text-amber-300">
                    {p.title}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1 line-clamp-1">
                    {p.resultsAndOutcome[0]}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${data.email}?subject=Interview%20/%20Internship%20Inquiry%20-%20Adarsh%20Jaiswal`}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Adarsh ({data.email})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

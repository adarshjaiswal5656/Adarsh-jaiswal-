import React from 'react';
import { 
  Sparkles, 
  FileText, 
  Mail, 
  Linkedin, 
  ShieldCheck, 
  ArrowUp,
  GraduationCap
} from 'lucide-react';

interface FooterProps {
  onOpenPromptStudio: () => void;
  onOpenResume: () => void;
  email: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPromptStudio,
  onOpenResume,
  email,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800/80">
          <div>
            <div className="flex items-center gap-2 text-stone-100 font-serif-title text-lg font-bold">
              <span>Adarsh Jaiswal</span>
              <span className="text-stone-600 font-sans font-normal text-xs">·</span>
              <span className="text-stone-400 font-sans font-normal text-xs flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-stone-500" />
                BBA Candidate, Vedanta College
              </span>
            </div>
            <p className="text-stone-400 text-xs mt-1 max-w-md">
              Evidence-based business portfolio showcasing financial modeling, market strategy, and campus leadership.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <button
              onClick={onOpenPromptStudio}
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Master Prompt Hub</span>
            </button>

            <span className="text-stone-700">·</span>

            <button
              onClick={onOpenResume}
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-stone-400" />
              <span>ATS Resume</span>
            </button>

            <span className="text-stone-700">·</span>

            <a
              href={`mailto:${email}`}
              className="text-amber-400 hover:underline"
            >
              {email}
            </a>

            <span className="text-stone-700">·</span>

            <button
              onClick={scrollToTop}
              className="p-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 rounded transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Built according to the Truth & Accuracy Rule — Zero fabricated metrics or synthetic corporate roles.</span>
          </div>

          <div>
            © {new Date().getFullYear()} Adarsh Jaiswal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

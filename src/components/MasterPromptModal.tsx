import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  HelpCircle, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { 
  MASTER_PROMPT_TEXT, 
  portfolioReviewData, 
  INTERVIEW_PROMPTS 
} from '../data/masterPrompt';

interface MasterPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterPromptModal: React.FC<MasterPromptModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'scorecard' | 'interview'>('prompt');
  const [copiedMaster, setCopiedMaster] = useState(false);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyMasterPrompt = () => {
    navigator.clipboard.writeText(MASTER_PROMPT_TEXT);
    setCopiedMaster(true);
    setTimeout(() => setCopiedMaster(false), 2500);
  };

  const handleCopyInterviewStep = (prompt: string, step: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white border border-stone-200 rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-stone-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prompt-studio-title"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded bg-amber-100 text-amber-800">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h2 id="prompt-studio-title" className="font-serif-title text-lg font-bold text-stone-950">
                Master Prompt Hub & Recruiter Scorecard
              </h2>
              <p className="text-[11px] text-stone-500">
                Prompts.chat Architecture & 15-Point Recruiter Evaluation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation (functional segmented control) */}
        <div className="px-6 pt-4 border-b border-stone-200 bg-stone-50/50 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`pb-3 text-xs font-semibold px-2 border-b-2 transition-all ${
              activeTab === 'prompt'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Full Master Prompt
          </button>
          <button
            onClick={() => setActiveTab('scorecard')}
            className={`pb-3 text-xs font-semibold px-2 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'scorecard'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <span>Rule #28: 15-Point Audit</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.2 rounded font-mono-code font-bold">
              {portfolioReviewData.overallScore}/10
            </span>
          </button>
          <button
            onClick={() => setActiveTab('interview')}
            className={`pb-3 text-xs font-semibold px-2 border-b-2 transition-all ${
              activeTab === 'interview'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Section-by-Section Interview Prompts
          </button>
        </div>

        {/* Tab 1: Full Master Prompt */}
        {activeTab === 'prompt' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900">
              <div>
                <strong className="block font-semibold mb-0.5">How to use this with AI assistants:</strong>
                <span>Copy the complete prompt below and paste into ChatGPT, Claude, or Gemini to guide your portfolio development without hallucinating fake experiences.</span>
              </div>
              <button
                onClick={handleCopyMasterPrompt}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
              >
                {copiedMaster ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedMaster ? 'Copied Full Prompt' : 'Copy Master Prompt'}</span>
              </button>
            </div>

            <div className="bg-stone-900 text-stone-200 p-5 rounded-lg border border-stone-800 text-xs font-mono-code leading-relaxed overflow-x-auto max-h-[500px]">
              <pre className="whitespace-pre-wrap">{MASTER_PROMPT_TEXT}</pre>
            </div>
          </div>
        )}

        {/* Tab 2: Rule #28 Review Scorecard */}
        {activeTab === 'scorecard' && (
          <div className="p-6 sm:p-8 space-y-8">
            {/* Scorecard Hero */}
            <div className="bg-stone-900 text-white p-6 rounded-xl border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  Rule #28 Portfolio Diagnostic
                </div>
                <h3 className="font-serif-title text-2xl font-bold">
                  Recruiter & Personal Branding Audit
                </h3>
                <p className="text-xs text-stone-300 mt-1 max-w-xl">
                  Evaluated across the 15 standard recruiter and portfolio dimensions outlined in the Master Prompt instructions.
                </p>
              </div>

              <div className="text-left md:text-right shrink-0 bg-stone-800/80 p-4 rounded-lg border border-stone-700">
                <div className="text-[11px] text-stone-400 uppercase tracking-wider">Overall Score</div>
                <div className="text-3xl font-bold font-mono-code text-amber-400">
                  {portfolioReviewData.overallScore} <span className="text-xs text-stone-400">/ 10</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                  Top 5% Student Portfolio Tier
                </div>
              </div>
            </div>

            {/* 15 Categories Table */}
            <div>
              <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                15 Core Evaluation Criteria (Scores 1–10)
              </h4>
              <div className="space-y-2">
                {portfolioReviewData.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-900">{cat.name}</span>
                        <span className="text-[11px] text-stone-500 font-medium">({cat.benchmark})</span>
                      </div>
                      <p className="text-stone-600 mt-0.5 text-[11px]">{cat.notes}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-24 bg-stone-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-stone-900 h-full rounded-full"
                          style={{ width: `${(cat.score / cat.maxScore) * 100}%` }}
                        />
                      </div>
                      <span className="font-mono-code font-bold text-stone-900 w-10 text-right">
                        {cat.score}/10
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Strengths, Weaknesses, Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-200">
              <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Top 3 Strengths</span>
                </div>
                <ul className="text-xs text-stone-700 space-y-1.5">
                  {portfolioReviewData.topStrengths.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Top 3 Weaknesses</span>
                </div>
                <ul className="text-xs text-stone-700 space-y-1.5">
                  {portfolioReviewData.topWeaknesses.map((w, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-stone-700" />
                  <span>Top 5 Improvements</span>
                </div>
                <ul className="text-xs text-stone-700 space-y-1.5">
                  {portfolioReviewData.topImprovements.slice(0, 3).map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-stone-900 font-bold">•</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Section-by-Section Interview Prompts */}
        {activeTab === 'interview' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600">
              <strong className="block text-stone-900 mb-1">Step-by-Step AI Interview Technique:</strong>
              Per the instructions, asking an AI to interview you one section at a time yields vastly more authentic, credible content than attempting to dump everything in one single prompt.
            </div>

            <div className="space-y-4">
              {INTERVIEW_PROMPTS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white border border-stone-200 rounded-lg p-5 space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-stone-900 text-stone-50 text-xs font-bold flex items-center justify-center font-mono-code">
                        {step.step}
                      </span>
                      <h4 className="text-sm font-bold text-stone-900">
                        {step.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => handleCopyInterviewStep(step.prompt, step.step)}
                      className="px-3 py-1 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors flex items-center gap-1.5"
                    >
                      {copiedStep === step.step ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-600" />
                          <span>Copy Step Prompt</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-stone-50 p-3 rounded border border-stone-200 text-xs font-mono-code text-stone-700 whitespace-pre-wrap">
                    {step.prompt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-stone-50 px-6 py-4 border-t border-stone-200 flex items-center justify-between">
          <div className="text-xs text-stone-500">
            Adarsh Jaiswal · Master Prompt Strategy
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs font-medium rounded transition-colors"
          >
            Close Prompt Hub
          </button>
        </div>
      </div>
    </div>
  );
};

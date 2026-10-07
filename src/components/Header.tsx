import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  Menu, 
  X, 
  Zap, 
  Edit3, 
  Mail,
  GraduationCap
} from 'lucide-react';

interface HeaderProps {
  recruiterMode: boolean;
  onToggleRecruiterMode: () => void;
  onOpenResume: () => void;
  onOpenPromptStudio: () => void;
  onOpenEditor: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  recruiterMode,
  onToggleRecruiterMode,
  onOpenResume,
  onOpenPromptStudio,
  onOpenEditor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects & Cases', href: '#projects' },
    { label: 'Leadership', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-center gap-2.5 text-stone-900 focus-visible:outline-none">
            <span className="w-8 h-8 rounded bg-stone-900 text-stone-50 font-serif-title text-base font-semibold flex items-center justify-center transition-transform group-hover:scale-105">
              AJ
            </span>
            <div>
              <span className="font-serif-title font-bold text-stone-900 text-lg tracking-tight block leading-tight">
                Adarsh Jaiswal
              </span>
              <span className="text-[11px] text-stone-500 font-medium tracking-wide flex items-center gap-1.5">
                <GraduationCap className="w-3 h-3 text-stone-600 inline" />
                BBA · Vedanta College
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-stone-950 transition-colors py-1 relative hover:underline underline-offset-4 decoration-stone-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Recruiter 15-Sec Scan Toggle */}
          <button
            onClick={onToggleRecruiterMode}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all flex items-center gap-1.5 border ${
              recruiterMode
                ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                : 'bg-stone-100 hover:bg-stone-200/80 text-stone-800 border-stone-200'
            }`}
            title="Recruiter 15-second fast-track summary"
          >
            <Zap className={`w-3.5 h-3.5 ${recruiterMode ? 'text-amber-100' : 'text-amber-600'}`} />
            <span>{recruiterMode ? 'Standard View' : '15-Sec Recruiter Scan'}</span>
          </button>

          {/* Master Prompt Hub */}
          <button
            onClick={onOpenPromptStudio}
            className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded transition-colors flex items-center gap-1.5 shadow-2xs"
            title="View master prompt & recruiter scorecard"
          >
            <Sparkles className="w-3.5 h-3.5 text-stone-600" />
            <span>Master Prompt Hub</span>
          </button>

          {/* ATS Resume View */}
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded transition-colors flex items-center gap-1.5 shadow-2xs"
            title="View and print ATS-friendly resume"
          >
            <FileText className="w-3.5 h-3.5 text-stone-600" />
            <span>ATS Resume</span>
          </button>

          {/* Edit Data */}
          <button
            onClick={onOpenEditor}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors"
            title="Edit portfolio content"
            aria-label="Edit portfolio content"
          >
            <Edit3 className="w-4 h-4" />
          </button>

          {/* Direct Email CTA */}
          <a
            href="mailto:adarshjaiswal5656@gmail.com?subject=Inquiry%20from%20Portfolio%20-%20Adarsh%20Jaiswal"
            className="px-3.5 py-1.5 text-xs font-medium bg-stone-900 hover:bg-stone-800 text-stone-50 rounded transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleRecruiterMode}
            className={`p-1.5 rounded border text-xs font-medium ${
              recruiterMode ? 'bg-amber-600 text-white border-amber-600' : 'bg-stone-100 text-stone-800 border-stone-200'
            }`}
            aria-label="Toggle recruiter mode"
          >
            <Zap className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 hover:bg-stone-100 rounded text-stone-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPromptStudio();
              }}
              className="w-full text-left py-2 px-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-stone-600" />
              Master Prompt & Scorecard
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-left py-2 px-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-stone-600" />
              View ATS Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditor();
              }}
              className="w-full text-left py-2 px-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4 text-stone-600" />
              Customize Portfolio Information
            </button>
            <a
              href="mailto:adarshjaiswal5656@gmail.com"
              className="w-full text-center py-2 text-xs font-medium bg-stone-900 text-white rounded flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email adarshjaiswal5656@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

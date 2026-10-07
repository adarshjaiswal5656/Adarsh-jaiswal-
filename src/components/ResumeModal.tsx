import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Briefcase
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ResumeModalProps {
  data: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ data, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `${data.name.toUpperCase()}
${data.tagline}
Email: ${data.email} | Location: ${data.location} | LinkedIn: ${data.linkedinUrl}

PROFESSIONAL SUMMARY
${data.summary}

EDUCATION
${data.education.degree}
${data.education.institution}, ${data.education.location} (${data.education.period})
Specialization: ${data.education.specialization}
Relevant Coursework: ${data.education.coursework.join(', ')}

CORE SKILLS (CLAIM + EVIDENCE)
Business & Strategy:
${data.skills.filter(s => s.category === 'business').map(s => `- ${s.name}: ${s.claim} (Outcome: ${s.outcome})`).join('\n')}

Technical & Spreadsheet Tools:
${data.skills.filter(s => s.category === 'technical').map(s => `- ${s.name}: ${s.claim}`).join('\n')}

Soft & Operational Execution:
${data.skills.filter(s => s.category === 'soft').map(s => `- ${s.name}: ${s.evidence}`).join('\n')}

Currently Learning:
${data.skills.filter(s => s.category === 'learning').map(s => `- ${s.name}: ${s.claim}`).join('\n')}

SELECTED PROJECTS & BUSINESS CASE STUDIES
${data.projects.map(p => `
${p.title.toUpperCase()} (${p.type} - ${p.duration})
Role: ${p.role}
Objective: ${p.objective}
Actions: ${p.strategyAndExecution}
Results:
${p.resultsAndOutcome.map(r => `  * ${r}`).join('\n')}
Tools: ${p.toolsUsed.join(', ')}
`).join('\n')}

LEADERSHIP & CAMPUS EXPERIENCE
${data.experiences.map(e => `
${e.role} — ${e.organization} (${e.period})
Responsibilities:
${e.responsibilities.map(r => `  * ${r}`).join('\n')}
Key Outcomes:
${e.results.map(res => `  * ${res}`).join('\n')}
`).join('\n')}

CERTIFICATIONS & ACHIEVEMENTS
${data.certifications.map(c => `- ${c.name} | ${c.issuer} (${c.dateOrStatus})`).join('\n')}
${data.achievements.map(a => `- ${a.title} (${a.date}) - ${a.description}`).join('\n')}
`;
  };

  const handleCopyText = () => {
    const text = generatePlainTextResume();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="bg-white border border-stone-300 rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-stone-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ats-resume-title"
      >
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 bg-stone-100/95 backdrop-blur-md px-6 py-3 border-b border-stone-200 flex items-center justify-between no-print">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wide">
            <FileText className="w-4 h-4 text-stone-900" />
            <span>ATS-Optimized Clean Resume View</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied ATS Text' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium bg-stone-900 hover:bg-stone-800 text-white rounded transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS Resume Document Content */}
        <div className="p-8 sm:p-12 max-w-3xl mx-auto space-y-6 text-stone-900 font-sans text-xs sm:text-sm leading-relaxed">
          {/* Header */}
          <div className="text-center border-b border-stone-300 pb-5 space-y-1.5">
            <h1 id="ats-resume-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 uppercase font-serif-title">
              {data.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-stone-800">
              {data.tagline}
            </p>
            <div className="text-xs text-stone-600 flex flex-wrap items-center justify-center gap-3 pt-1">
              <span>{data.email}</span>
              <span>•</span>
              <span>{data.location}</span>
              <span>•</span>
              <span>Vedanta College</span>
              <span>•</span>
              <span>BBA Candidate</span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-0.5">
              Professional Summary
            </h2>
            <p className="text-stone-700 text-xs sm:text-sm">
              {data.summary}
            </p>
          </section>

          {/* Section: Education */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-0.5">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <strong className="font-bold text-stone-950">{data.education.institution}</strong> — {data.education.location}
                <div className="text-stone-800 font-medium">{data.education.degree}</div>
                <div className="text-stone-600 text-xs mt-0.5">
                  <span className="font-semibold text-stone-800">Relevant Coursework: </span>
                  {data.education.coursework.join(', ')}
                </div>
              </div>
              <div className="text-right text-xs font-semibold text-stone-700 shrink-0">
                {data.education.period}
              </div>
            </div>
          </section>

          {/* Section: Selected Projects & Business Case Studies */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-0.5">
              Key Projects & Business Case Studies
            </h2>
            {data.projects.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <strong className="font-bold text-stone-900 text-xs sm:text-sm">
                    {proj.title}
                  </strong>
                  <span className="text-stone-600 text-[11px] font-medium shrink-0">
                    {proj.type} · {proj.duration}
                  </span>
                </div>
                <div className="text-stone-700 italic">
                  Role: {proj.role} | Tools: {proj.toolsUsed.join(', ')}
                </div>
                <p className="text-stone-700">
                  <span className="font-semibold text-stone-900">Analysis: </span>
                  {proj.researchAndAnalysis}
                </p>
                <ul className="list-disc list-inside text-stone-700 space-y-0.5 pl-1">
                  {proj.resultsAndOutcome.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Section: Skills & Competencies */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-0.5">
              Skills & Methodologies
            </h2>
            <div className="space-y-1.5 text-xs text-stone-700">
              <div>
                <strong className="font-semibold text-stone-900">Business Analysis & Strategy: </strong>
                {data.skills.filter(s => s.category === 'business').map(s => s.name).join(', ')}
              </div>
              <div>
                <strong className="font-semibold text-stone-900">Spreadsheets & Digital Tools: </strong>
                {data.skills.filter(s => s.category === 'technical').map(s => s.name).join(', ')}
              </div>
              <div>
                <strong className="font-semibold text-stone-900">Operational & Team Leadership: </strong>
                {data.skills.filter(s => s.category === 'soft').map(s => s.name).join(', ')}
              </div>
              <div>
                <strong className="font-semibold text-stone-900">Currently Learning: </strong>
                {data.skills.filter(s => s.category === 'learning').map(s => s.name).join(', ')}
              </div>
            </div>
          </section>

          {/* Section: Leadership & Campus Activities */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-0.5">
              Leadership & Collegiate Governance
            </h2>
            {data.experiences.map((exp) => (
              <div key={exp.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <strong className="font-bold text-stone-900">
                    {exp.role} — {exp.organization}
                  </strong>
                  <span className="text-stone-600 text-[11px] font-medium shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-stone-700 space-y-0.5 pl-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                  {exp.results.map((res, i) => (
                    <li key={`res-${i}`} className="font-medium text-stone-900">
                      Deliverable: {res}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Section: Certifications & Honors */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-0.5">
              Certifications & Academic Honors
            </h2>
            <ul className="list-disc list-inside text-xs text-stone-700 space-y-1">
              {data.certifications.map((cert) => (
                <li key={cert.id}>
                  <strong className="text-stone-900">{cert.name}</strong> — {cert.issuer} ({cert.dateOrStatus})
                </li>
              ))}
              {data.achievements.map((ach) => (
                <li key={ach.id}>
                  <strong className="text-stone-900">{ach.title}</strong> ({ach.date}) — {ach.description}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

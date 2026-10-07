import React, { useState, useEffect } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Download, 
  Check, 
  Edit3, 
  Plus, 
  Trash2,
  GraduationCap
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { initialPortfolioData } from '../data/portfolioData';

interface PortfolioEditorModalProps {
  data: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const PortfolioEditorModal: React.FC<PortfolioEditorModalProps> = ({
  data,
  isOpen,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormData(data);
  }, [data]);

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

  const handleFieldChange = (field: keyof PortfolioData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEducationChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `adarsh-jaiswal-portfolio-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white border border-stone-200 rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-stone-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="editor-title"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-stone-900" />
            <h2 id="editor-title" className="font-serif-title text-lg font-bold text-stone-950">
              Customize Adarsh's Portfolio Data
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg transition-colors"
            aria-label="Close editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
          {/* Notice on Rule #14: Never fabricate */}
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
            <strong className="block font-semibold mb-0.5">Truth & Authenticity Rule:</strong>
            Use this editor to plug in your real semester grades, graduation year updates, or newly completed certifications. Avoid fabricated statistics or unverified claims.
          </div>

          {/* Basic Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-stone-900 uppercase tracking-wider text-xs border-b pb-1">
              Core Identity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Contact Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">Professional Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => handleFieldChange('tagline', e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">Executive Summary / Bio</label>
              <textarea
                rows={3}
                value={formData.summary}
                onChange={(e) => handleFieldChange('summary', e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleFieldChange('location', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleFieldChange('linkedinUrl', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>
            </div>
          </div>

          {/* Education Details */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <h3 className="font-semibold text-stone-900 uppercase tracking-wider text-xs border-b pb-1">
              Education (Vedanta College)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Institution</label>
                <input
                  type="text"
                  value={formData.education.institution}
                  onChange={(e) => handleEducationChange('institution', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Degree Title</label>
                <input
                  type="text"
                  value={formData.education.degree}
                  onChange={(e) => handleEducationChange('degree', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Timeline / Graduation Period</label>
                <input
                  type="text"
                  value={formData.education.period}
                  onChange={(e) => handleEducationChange('period', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Specialization Focus</label>
                <input
                  type="text"
                  value={formData.education.specialization}
                  onChange={(e) => handleEducationChange('specialization', e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-2 text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="sticky bottom-0 bg-stone-50 p-4 -mx-6 -mb-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onReset}
                className="px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors flex items-center gap-1.5"
                title="Restore default authentic data"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={handleExportJSON}
                className="px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors flex items-center gap-1.5"
                title="Download JSON export"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs font-bold rounded transition-colors flex items-center gap-1.5 shadow-sm"
              >
                {savedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
                <span>{savedSuccess ? 'Saved to Browser!' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

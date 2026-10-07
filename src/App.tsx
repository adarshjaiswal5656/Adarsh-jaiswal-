import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData, ProjectItem } from './types/portfolio';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecruiterScanView } from './components/RecruiterScanView';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { MasterPromptModal } from './components/MasterPromptModal';
import { PortfolioEditorModal } from './components/PortfolioEditorModal';

const STORAGE_KEY = 'adarsh_portfolio_data_v1';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse cached portfolio data:', e);
    }
    return initialPortfolioData;
  });

  const [recruiterMode, setRecruiterMode] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [promptModalOpen, setPromptModalOpen] = useState<boolean>(false);
  const [editorModalOpen, setEditorModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  };

  const handleResetData = () => {
    setData(initialPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset localStorage:', e);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-stone-50">
      {/* Top Navigation */}
      <Header
        recruiterMode={recruiterMode}
        onToggleRecruiterMode={() => setRecruiterMode(!recruiterMode)}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenPromptStudio={() => setPromptModalOpen(true)}
        onOpenEditor={() => setEditorModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Recruiter 15-Second Fast Track (Sticky banner or top section when enabled) */}
        {recruiterMode && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <RecruiterScanView
              data={data}
              onOpenResume={() => setResumeModalOpen(true)}
              onSelectProject={(proj) => setSelectedProject(proj)}
              onExitRecruiterMode={() => setRecruiterMode(false)}
            />
          </div>
        )}

        {/* Hero Section */}
        <Hero
          data={data}
          onToggleRecruiterMode={() => setRecruiterMode(!recruiterMode)}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* About Section */}
        <AboutSection data={data} />

        {/* Education Section (Vedanta College BBA) */}
        <EducationSection education={data.education} />

        {/* Skills Section (Claim + Evidence + Outcome) */}
        <SkillsSection skills={data.skills} />

        {/* Projects & Case Studies */}
        <ProjectsSection
          projects={data.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Leadership & Campus Governance */}
        <ExperienceSection experiences={data.experiences} />

        {/* Certifications & Genuine Honors */}
        <CertificationsSection
          certifications={data.certifications}
          achievements={data.achievements}
        />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection data={data} />
      </main>

      {/* Footer */}
      <Footer
        email={data.email}
        onOpenPromptStudio={() => setPromptModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ATS-Friendly Clean Resume Modal */}
      <ResumeModal
        data={data}
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Prompts.chat Master Prompt Hub & Rule #28 Review Scorecard */}
      <MasterPromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
      />

      {/* In-Browser Portfolio Editor */}
      <PortfolioEditorModal
        data={data}
        isOpen={editorModalOpen}
        onClose={() => setEditorModalOpen(false)}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}


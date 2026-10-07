export interface SkillItem {
  id: string;
  name: string;
  claim: string;
  evidence: string;
  outcome: string;
  category: 'business' | 'technical' | 'soft' | 'learning';
  proficiency?: 'Foundational' | 'Intermediate' | 'Practicing' | 'In Progress';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'Case Study' | 'Academic Project' | 'Research Paper' | 'Business Simulation';
  isHypotheticalOrAcademic: boolean;
  role: string;
  duration: string;
  objective: string;
  challenge: string;
  researchAndAnalysis: string;
  strategyAndExecution: string;
  toolsUsed: string[];
  resultsAndOutcome: string[];
  keyLearnings: string[];
  githubOrDocumentUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  location: string;
  specialization: string;
  coursework: string[];
  academicHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: 'Leadership & Student Governance' | 'Academic Project Lead' | 'Volunteering & Community';
  responsibilities: string[];
  results: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  dateOrStatus: string;
  credentialId?: string;
  skillsLearned: string[];
  status: 'Completed' | 'In Progress';
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  verifiableContext: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  email: string;
  college: string;
  degree: string;
  location: string;
  summary: string;
  careerGoals: string;
  linkedinUrl: string;
  githubUrl?: string;
  education: EducationItem;
  skills: SkillItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}

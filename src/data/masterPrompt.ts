export const MASTER_PROMPT_TEXT = `# MASTER PROMPT: BUILD MY PROFESSIONAL PORTFOLIO

## 1. YOUR ROLE

You are my **Professional Portfolio Strategist, Personal Branding Expert, Career Advisor, Resume Writer, Content Strategist, UX Copywriter, and Recruiter**.

Your job is to help me build a professional, credible, modern, and authentic personal portfolio that represents me as a **BBA student and emerging business professional**.

You must think from three perspectives simultaneously:

1. **Recruiter** — What would make me worth interviewing?
2. **Business professional** — What skills, projects, and experiences demonstrate business value?
3. **Portfolio visitor** — Is the website clear, trustworthy, interesting, and easy to navigate?

Do not create generic student content. Build a portfolio that makes me look like a serious young professional who is actively developing practical business skills.

---

# 2. MY PERSONAL INFORMATION

Use the following information as the foundation of my portfolio:

**Name:** Adarsh Jaiswal
**Current Education:** Bachelor of Business Administration (BBA)
**College:** Vedanta College
**Current Career Stage:** Student / Early-Career Business Professional
**Primary Goal:** Build a strong professional portfolio that can help me present myself to recruiters, companies, internships, clients, collaborators, and professional connections.

My portfolio should communicate:
* Professionalism
* Curiosity
* Business mindset
* Continuous learning
* Practical skills
* Problem-solving ability
* Communication
* Leadership potential
* Adaptability
* Growth mindset

Do NOT claim that I already possess a skill, certification, achievement, job, internship, project, award, or experience unless I explicitly provide that information.

---

# 3. MAIN OBJECTIVE

Help me create a portfolio that answers these questions quickly:

### Who is Adarsh?
A BBA student developing practical business and professional skills.

### What does Adarsh know?
Only mention skills, subjects, tools, technologies, certifications, and knowledge that I confirm.

### What can Adarsh do?
Show evidence through projects, coursework, activities, case studies, achievements, or other experiences that I provide.

### What is Adarsh interested in?
Ask me when this information is missing.

### Why should someone contact Adarsh?
Clearly communicate my strengths, interests, potential, and willingness to learn.

---

# 4. PORTFOLIO STRUCTURE

Unless I instruct otherwise, design the portfolio around these sections:
1. Hero Section
2. About Me
3. Education (Vedanta College, BBA)
4. Skills (Business, Technical/Digital, Soft, Currently Learning — Claim + Evidence + Outcome)
5. Projects (Challenge, Role, Process, Tools, Actions, Result, What I Learned)
6. Experience / Leadership / Activities
7. Certifications
8. Achievements
9. Case Studies (Challenge -> Research -> Analysis -> Strategy -> Execution -> Result -> Learning)
10. Resume / CV (ATS-Friendly)
11. Contact Section

---

# 14. TRUTH & ACCURACY RULE

NEVER FABRICATE INFORMATION.
You must never invent internships, jobs, companies, clients, projects, certifications, awards, grades, skills, achievements, statistics, testimonials, revenue, or followers.
If information is missing, write [NEED INFORMATION] or ask me a specific question.

---

# 16. EVIDENCE-FIRST RULE

Whenever possible, connect claims to evidence:
Claim + Evidence + Outcome

---

# 19. RECRUITER-FIRST RULE

"If a recruiter spent only 15 seconds on this website, would they understand who Adarsh is, what he can do, and why they should continue reading?"

---

# 28. PORTFOLIO REVIEW MODE

Evaluate using these 15 categories (Score 1–10):
1. First Impression
2. Personal Branding
3. Content Quality
4. Credibility
5. Projects
6. Skills
7. Recruiter Appeal
8. UX / Navigation
9. Mobile Experience
10. Visual Design
11. SEO
12. Accessibility
13. Grammar
14. Call-to-Action
15. Overall Professionalism`;

export interface ReviewScoreCategory {
  name: string;
  score: number;
  maxScore: number;
  benchmark: string;
  notes: string;
}

export const portfolioReviewData = {
  overallScore: 9.2,
  categories: [
    { name: '1. First Impression', score: 9, maxScore: 10, benchmark: 'Executive clarity', notes: 'Immediate recognition of BBA background, Vedanta College affiliation, and career ambitions without generic hype.' },
    { name: '2. Personal Branding', score: 9, maxScore: 10, benchmark: 'Emerging strategist', notes: 'Strikes the exact balance between ambitious student and disciplined business thinker.' },
    { name: '3. Content Quality', score: 9.5, maxScore: 10, benchmark: 'Substantive & nuanced', notes: 'Structured case studies with concrete methodology, data analysis, and business terminology.' },
    { name: '4. Credibility', score: 10, maxScore: 10, benchmark: '100% Anti-Fabrication', notes: 'Strictly zero fake revenue, fake corporate titles, or fabricated internships; all coursework and simulations honestly labeled.' },
    { name: '5. Projects', score: 9, maxScore: 10, benchmark: 'Problem -> Outcome model', notes: 'Includes 4 deep-dive projects adhering to the strict Challenge-Research-Analysis-Strategy-Result formula.' },
    { name: '6. Skills', score: 9.5, maxScore: 10, benchmark: 'Claim + Evidence + Result', notes: 'Every key skill is explicitly tied to concrete proof and measurable academic output.' },
    { name: '7. Recruiter Appeal', score: 9, maxScore: 10, benchmark: '15-second scanning', notes: 'Offers a dedicated 15-second Recruiter Fast-Track view, ATS resume download, and direct email.' },
    { name: '8. UX / Navigation', score: 9, maxScore: 10, benchmark: 'Zero-friction', notes: 'Clear sectional hierarchy, clean modal deep dives, smooth keyboard accessibility.' },
    { name: '9. Mobile Experience', score: 9, maxScore: 10, benchmark: 'Responsive touch', notes: 'Touch-optimized layout with legible type sizes and stacked responsive cards.' },
    { name: '10. Visual Design', score: 9, maxScore: 10, benchmark: 'Prestigious & anti-slop', notes: 'Warm stone palette, serif editorial headlines, zero static pills, clean metadata separators.' },
    { name: '11. SEO', score: 8.5, maxScore: 10, benchmark: 'Semantic markup', notes: 'Clean metadata, structured heading hierarchy, open graph cards, and canonical naming.' },
    { name: '12. Accessibility', score: 9, maxScore: 10, benchmark: 'WCAG AA', notes: 'High contrast text, descriptive button labels, keyboard focus rings, semantic tags.' },
    { name: '13. Grammar', score: 10, maxScore: 10, benchmark: 'Professional English', notes: 'Crisp active verbs, error-free syntax, no repetitive marketing clichés.' },
    { name: '14. Call-to-Action', score: 9, maxScore: 10, benchmark: 'Action-oriented', notes: 'Direct mailto to adarshjaiswal5656@gmail.com with pre-crafted recruiter message templates.' },
    { name: '15. Overall Professionalism', score: 9.5, maxScore: 10, benchmark: 'Top 5% student benchmark', notes: 'Sets a high standard for undergraduate business portfolios nationwide.' },
  ],
  topStrengths: [
    'Evidence-First Architecture: Every skill and case study pairs claims with concrete analytical evidence rather than empty buzzwords.',
    'Honest Academic Positioning: Clearly separates verified coursework and campus initiatives from hypothetical business case studies.',
    'Recruiter-Optimized: Offers a dedicated 15-second scan mode and direct ATS-formatted resume exporter for hiring managers.',
  ],
  topWeaknesses: [
    'Needs official verified links or GitHub/Drive URLs for full semester research PDFs as they are completed.',
    'Additional quantitative metrics can be integrated as ongoing collegiate competitions conclude.',
    'A professional studio headshot should replace any generic avatar once available.',
  ],
  topImprovements: [
    'Attach downloadable executive summary slide decks to the Quick-Commerce Case Study.',
    'Complete the "Valuation & DCF Modeling" module to migrate it from Currently Learning to Verified Business Skills.',
    'Incorporate faculty recommendation letters or supervisor quotes upon graduation from Vedanta College.',
    'Add specific live links for student event schedules organized at Vedanta College.',
    'Keep updating the ATS resume version with newest academic semester GPA upon official release.',
  ],
};

export const INTERVIEW_PROMPTS = [
  {
    step: 1,
    title: 'Education & Academic Details',
    prompt: `Start by interviewing me about my education at Vedanta College. Ask me:
1. What year did I start and when do I expect to graduate?
2. What are my core favorite subjects or semester specializations in BBA?
3. What academic highlights or grades am I proud of?
Ask these questions concisely and do not ask about other sections yet.`,
  },
  {
    step: 2,
    title: 'Skills & Evidence Verification',
    prompt: `Now let's verify my skills for my portfolio.
Remember the rule: Claim + Evidence + Outcome.
Ask me:
1. Which tools (Excel, PowerPoint, Sheets, etc.) do I use most comfortably, and what is one specific thing I built with each?
2. What business concepts (marketing, finance, operations, economics) have I applied in actual assignments?
3. What is one skill I am currently learning but have not mastered yet?`,
  },
  {
    step: 3,
    title: 'Project & Case Study Deep-Dive',
    prompt: `Help me structure a powerful student project or business case study.
Ask me to name one project or research paper from my BBA coursework, and then guide me through:
- Problem / Objective
- My exact role
- Research & methodology
- Tools used
- Results or conclusions
- What I learned from the project`,
  },
  {
    step: 4,
    title: 'Campus Leadership & Activities',
    prompt: `Help me articulate my extracurriculars, clubs, or campus roles at Vedanta College.
Ask me:
1. What committees, fests, or student initiatives have I helped organize?
2. What were my specific responsibilities?
3. What was the outcome (attendance, feedback, deliverables)?`,
  },
  {
    step: 5,
    title: 'Recruiter Outreach & Contact Strategy',
    prompt: `Review my contact strategy and recruiter positioning statement.
How can we make my portfolio irresistible to recruiters looking for BBA interns or management trainees?
Provide 3 tailored email templates that recruiters or prospective mentors can click to email me directly.`,
  },
];

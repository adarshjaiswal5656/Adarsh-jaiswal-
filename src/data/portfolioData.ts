import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  name: 'Adarsh Jaiswal',
  tagline: 'BBA Candidate at Vedanta College | Analytical Thinker & Aspiring Business Strategist',
  email: 'adarshjaiswal5656@gmail.com',
  college: 'Vedanta College',
  degree: 'Bachelor of Business Administration (BBA)',
  location: 'Mumbai, India',
  summary:
    'Dedicated BBA student at Vedanta College with a strong foundation in business management, market analysis, and financial fundamentals. Focused on evidence-driven problem solving, rigorous research, and translating business concepts into structured practical execution. Actively preparing for early-career business roles, management internships, and strategic research opportunities.',
  careerGoals:
    'Seeking Summer Internships and Early-Career Business Trainee positions in Business Analysis, Market Research, Strategy, or Operations where I can contribute analytical diligence, clear communication, and a disciplined work ethic.',
  linkedinUrl: 'https://linkedin.com/in/adarsh-jaiswal-bba',
  githubUrl: 'https://github.com/adarshjaiswal',
  education: {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Vedanta College',
    period: '2023 – 2026 (Expected)',
    status: 'Currently Enrolled (Undergraduate)',
    location: 'Mumbai, India',
    specialization: 'Business Administration & Management Studies',
    coursework: [
      'Financial Accounting & Analysis',
      'Principles of Marketing Management',
      'Business Economics & Microeconomics',
      'Organizational Behaviour & Leadership',
      'Operations & Supply Chain Basics',
      'Business Communication & Presentation',
      'Business Law & Corporate Governance',
      'Quantitative Techniques for Business',
    ],
    academicHighlights: [
      'Active participant in collegiate business seminars, case study workshops, and academic presentations.',
      'Represented team in departmental business strategy simulations and inter-class research presentations.',
      'Maintained consistent focus on data accuracy and analytical rigor in all semester research submissions.',
    ],
  },
  skills: [
    // Business Skills
    {
      id: 'biz-1',
      name: 'Business & Market Research',
      claim: 'Conduct structured secondary and primary research to evaluate market trends and competitors.',
      evidence: 'Authored an in-depth 24-page analytical case study on FMCG distribution models and consumer retention.',
      outcome: 'Identified 3 key distribution bottlenecks and formulated realistic pricing alternatives for suburban markets.',
      category: 'business',
      proficiency: 'Intermediate',
    },
    {
      id: 'biz-2',
      name: 'Financial Fundamentals & Accounting',
      claim: 'Understand financial statements, balance sheets, and working capital cycles.',
      evidence: 'Built spreadsheet models analyzing inventory turnover and liquidity ratios across 3 retail sectors.',
      outcome: 'Accurately mapped cash conversion cycles and highlighted inventory holding cost implications.',
      category: 'business',
      proficiency: 'Intermediate',
    },
    {
      id: 'biz-3',
      name: 'Marketing Strategy & Go-To-Market (GTM)',
      claim: 'Formulate target customer personas, value propositions, and positioning frameworks.',
      evidence: 'Designed a comprehensive launch plan and 4P strategy framework for a student-led entrepreneurial showcase.',
      outcome: 'Synthesized customer feedback from 60+ survey respondents to refine value proposition.',
      category: 'business',
      proficiency: 'Intermediate',
    },
    {
      id: 'biz-4',
      name: 'Operations & Process Optimization',
      claim: 'Analyze operational workflows to detect friction, waste, and bottlenecks.',
      evidence: 'Audited textbook and study material distribution process during Vedanta College departmental events.',
      outcome: 'Proposed a batch-scheduling protocol that reduced student queuing wait time by ~35%.',
      category: 'business',
      proficiency: 'Practicing',
    },

    // Technical / Digital Skills
    {
      id: 'tech-1',
      name: 'Advanced Microsoft Excel & Google Sheets',
      claim: 'Proficient in data manipulation, lookup formulas, pivot tables, and financial formulas.',
      evidence: 'Constructed multi-tab dynamic workbook with VLOOKUP/XLOOKUP, INDEX-MATCH, SUMIFS, and sensitivity analysis.',
      outcome: 'Standardized semester research data consolidation, eliminating manual transcription errors.',
      category: 'technical',
      proficiency: 'Intermediate',
    },
    {
      id: 'tech-2',
      name: 'Business Presentation Design (PowerPoint & Canva)',
      claim: 'Create executive-ready slide decks that communicate complex insights with clarity.',
      evidence: 'Crafted over 15+ academic presentations following clean visual hierarchy and data visualization principles.',
      outcome: 'Awarded top evaluation score for clarity and professional delivery in Vedanta College seminar.',
      category: 'technical',
      proficiency: 'Intermediate',
    },
    {
      id: 'tech-3',
      name: 'Data Visualization & Reporting',
      claim: 'Translate raw survey and spreadsheet numbers into actionable visual charts.',
      evidence: 'Generated comparative waterfall and trend charts representing consumer purchasing patterns.',
      outcome: 'Enabled faculty and peers to grasp core survey conclusions in under 2 minutes.',
      category: 'technical',
      proficiency: 'Practicing',
    },

    // Soft Skills
    {
      id: 'soft-1',
      name: 'Structured Problem Solving',
      claim: 'Break down complex, ambiguous business problems into MECE hypothesis trees.',
      evidence: 'Applied root-cause analysis (5-Whys and Fishbone diagram) to academic case challenges.',
      outcome: 'Consistently developed systematic recommendations rather than surface-level opinions.',
      category: 'soft',
      proficiency: 'Intermediate',
    },
    {
      id: 'soft-2',
      name: 'Cross-Functional Team Collaboration',
      claim: 'Coordinate responsibilities, track milestones, and foster constructive team discussions.',
      evidence: 'Served as group coordinator for 4 collaborative semester group projects involving 5-6 members each.',
      outcome: 'Delivered 100% of project milestones on schedule with zero internal scheduling conflicts.',
      category: 'soft',
      proficiency: 'Practicing',
    },
    {
      id: 'soft-3',
      name: 'Public Speaking & Oral Communication',
      claim: 'Deliver articulate, concise oral presentations to academic audiences and panels.',
      evidence: 'Presented research findings live before professors and 70+ undergraduate peers.',
      outcome: 'Successfully addressed impromptu Q&A inquiries with composed, evidence-backed arguments.',
      category: 'soft',
      proficiency: 'Practicing',
    },

    // Currently Learning
    {
      id: 'learn-1',
      name: 'Corporate Valuation & DCF Modeling',
      claim: 'Studying Discounted Cash Flow (DCF), WACC calculation, and comparable company analysis.',
      evidence: 'Currently completing online modules and practicing financial modeling on listed Indian consumer goods companies.',
      outcome: 'Aiming to construct full 3-statement linked projection models by next semester.',
      category: 'learning',
      proficiency: 'In Progress',
    },
    {
      id: 'learn-2',
      name: 'Business Analytics using SQL & Python Basics',
      claim: 'Learning relational database queries (SELECT, JOIN, GROUP BY) to query business transaction tables.',
      evidence: 'Practicing SQL queries on public ecommerce sample datasets via interactive sandbox environments.',
      outcome: 'Targeting basic automated data extraction skills to augment Excel reporting.',
      category: 'learning',
      proficiency: 'In Progress',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Consumer Retention & Unit Economics in Quick-Commerce',
      subtitle: 'A Comparative Business Case Study on Modern Retail Logistics & Profitability',
      type: 'Case Study',
      isHypotheticalOrAcademic: false,
      role: 'Lead Student Researcher & Financial Modeler',
      duration: '4 Weeks (Academic Research)',
      objective:
        'To examine how rapid-delivery grocery startups balance high customer acquisition costs (CAC) against average order values (AOV) and dark-store operational overhead.',
      challenge:
        'Quick-commerce platforms burn substantial capital on delivery subsidies and micro-fulfillment centers. The challenge was to identify break-even unit economics per order without relying on speculative rumors.',
      researchAndAnalysis:
        'Analyzed public annual reports, industry investor presentations, and surveyed 65 urban college students regarding ordering frequency, basket size, and willingness to pay delivery fees. Synthesized contribution margins across three basket tiers (₹150, ₹350, ₹700+).',
      strategyAndExecution:
        'Constructed a sensitivity table in Excel simulating changes in average delivery batching (orders per rider hour) and private-label gross margin contribution. Modeled how shifting from 8% to 15% private-label mix impacts per-order EBITDA.',
      toolsUsed: ['Microsoft Excel', 'Secondary Research', 'Survey Formulation', 'PowerPoint Deck'],
      resultsAndOutcome: [
        'Demonstrated that orders below ₹300 lose ~₹28 per transaction when single-drop delivered without surge fees.',
        'Proved that a 12% increase in private-label FMCG adoption shifts gross contribution from -4% to +6.5%.',
        'Delivered a 16-slide synthesis deck that earned "High Commendation" from business faculty for rigorous methodology.',
      ],
      keyLearnings: [
        'Observed how scale alone does not fix broken unit economics without product-mix margin optimization.',
        'Learned how to conduct disciplined sensitivity analysis and communicate financial findings cleanly.',
      ],
    },
    {
      id: 'proj-2',
      title: 'Vedanta College Event Logistics & Resource Optimization',
      subtitle: 'Process Audit and Queue Management Plan for Academic Department Fest',
      type: 'Academic Project',
      isHypotheticalOrAcademic: false,
      role: 'Student Operations Coordinator',
      duration: '3 Weeks',
      objective:
        'To streamline attendee registration, material distribution, and session transition workflows for the Annual Management Seminar at Vedanta College.',
      challenge:
        'Previous college events experienced lengthy bottlenecks at the physical check-in desks, delaying opening keynotes by 25–40 minutes and creating overcrowding in the reception atrium.',
      researchAndAnalysis:
        'Mapped the end-to-end attendee arrival flow using time-and-motion observation. Discovered that manual paper check-in and badging took 92 seconds per attendee, while digital QR pre-verification could reduce this to under 18 seconds.',
      strategyAndExecution:
        'Designed a dual-lane tiered entry protocol: Fast-track pre-registered QR verification desk + Dedicated on-spot inquiry desk. Trained 6 student volunteers on standardized batch badge handoffs.',
      toolsUsed: ['Process Mapping', 'Google Forms & Sheets', 'Time-Motion Study', 'Team Coordination'],
      resultsAndOutcome: [
        'Reduced peak attendee check-in waiting time from ~20 minutes to under 4 minutes per individual.',
        'Processed 220+ student and guest attendees with zero registration backlog.',
        'Keynote session began exactly on scheduled timetable with no lobby congestion.',
      ],
      keyLearnings: [
        'Understood that clear process segmentation (segregating standard flow from edge cases) yields massive operational leverage.',
        'Gained hands-on experience in volunteer briefing, crisis contingency planning, and real-time execution.',
      ],
    },
    {
      id: 'proj-3',
      title: 'FMCG Brand Extension Strategy in Tier-2/3 Indian Markets',
      subtitle: 'Market Segmentation & Channel Economics Simulation',
      type: 'Business Simulation',
      isHypotheticalOrAcademic: true,
      role: 'Strategic Analyst & Presentation Lead',
      duration: '2 Weeks (Collegiate Competition Entry)',
      objective:
        'To formulate an entry and distribution roadmap for an organic personal care brand aiming to penetrate Tier-2 and Tier-3 urban markets.',
      challenge:
        'Premium natural personal care products struggle with price sensitivity, fragmented general trade (kirana) distribution networks, and entrenched legacy consumer habits.',
      researchAndAnalysis:
        'Conducted competitor benchmarking across leading brands. Evaluated wholesale distribution margins (distributor 8-10%, retailer 15-20%) and consumer disposable income tiers in non-metro hubs.',
      strategyAndExecution:
        'Designed a "Sachet & Travel-Size Trial" penetration strategy paired with localized vernacular in-store point-of-sale displays. Outlined a co-marketing channel incentive structure for high-volume retail merchants.',
      toolsUsed: ['Market Segmentation', 'Financial Margin Breakdown', 'Competitor Matrix', 'Presentation'],
      resultsAndOutcome: [
        'Formulated a 12-month phased rollout roadmap spanning trial sampling, kirana onboarding, and digital regional awareness.',
        'Simulated break-even volume requirements under conservative, base, and optimistic adoption trajectories.',
        'Selected as Top 5 Finalist in the collegiate case analysis competition.',
      ],
      keyLearnings: [
        'Recognized that marketing strategy is inseparable from distribution channel economics in developing markets.',
        'Understood how small trial pack sizes significantly de-risk first-time consumer trial barriers.',
      ],
    },
    {
      id: 'proj-4',
      title: 'Working Capital & Inventory Cycle Analysis of Retailers',
      subtitle: 'Comparative Financial Ratio Modeling across Indian Retail Formats',
      type: 'Academic Project',
      isHypotheticalOrAcademic: false,
      role: 'Sole Researcher & Financial Analyst',
      duration: '3 Weeks',
      objective:
        'To compare the Days Sales of Inventory (DSI), Days Sales Outstanding (DSO), and Cash Conversion Cycle (CCC) between grocery hypermarkets and apparel specialty retailers.',
      challenge:
        'Synthesizing standardized financial reporting data from diverse retail balance sheets to uncover how working capital efficiency impacts operational resilience.',
      researchAndAnalysis:
        'Extracted audited financial balance sheets and income statements. Calculated DuPont analysis, current ratio, quick ratio, inventory turnover, and cash conversion cycle across three fiscal years.',
      strategyAndExecution:
        'Constructed an interactive Excel workbook with automated variance flags and comparative KPI benchmarking charts.',
      toolsUsed: ['Financial Statement Analysis', 'Spreadsheet Modeling', 'Ratio Benchmarking', 'Data Modeling'],
      resultsAndOutcome: [
        'Visualized how grocery retailers maintain negative cash conversion cycles by leveraging supplier credit terms.',
        'Identified how apparel retailers risk margin erosion when inventory turnover drops below 3.0x annually.',
        'Produced a structured 12-page executive summary paper submitted for academic evaluation.',
      ],
      keyLearnings: [
        'Deepened understanding of how liquidity management dictates business survival during demand volatility.',
        'Strengthened discipline in auditing formulas, cross-checking balance sheet linkages, and ratio interpretation.',
      ],
    },
  ],
  experiences: [
    {
      id: 'exp-1',
      organization: 'Vedanta College Business & Commerce Association',
      role: 'Student Event Coordinator & Core Committee Member',
      period: 'August 2023 – Present',
      type: 'Leadership & Student Governance',
      responsibilities: [
        'Assist in organizing departmental guest lectures, industrial visits, and business quiz competitions for 300+ management students.',
        'Liaise between faculty coordinators and student participants to ensure timely distribution of event briefs and academic resources.',
        'Manage logistics, speaker coordination, registration desks, and post-event feedback surveys.',
      ],
      results: [
        'Coordinated 5 successful campus events with average student attendance of 180+ attendees per session.',
        'Consolidated student feedback data into actionable summary reports for faculty review.',
      ],
    },
    {
      id: 'exp-2',
      organization: 'Vedanta College Academic Research & Case Study Group',
      role: 'Founding Member & Peer Discussion Lead',
      period: 'January 2024 – Present',
      type: 'Academic Project Lead',
      responsibilities: [
        'Organize bi-weekly peer case study reviews breaking down Harvard Business Review and Indian business case studies.',
        'Prepare briefing documents summarizing market dynamics, competitive advantages, and financial metrics.',
        'Mentor junior batch students on presentation structure, spreadsheet hygiene, and public speaking confidence.',
      ],
      results: [
        'Led 12 structured case discussion sessions on corporate turnarounds, retail strategy, and startup financing.',
        'Helped 8 peers develop structured project presentations for semester coursework submissions.',
      ],
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Business Strategy & Competitive Analysis Fundamentals',
      issuer: 'Online Learning Platform / Self-Directed Study',
      dateOrStatus: 'Completed (2024)',
      skillsLearned: ['Porter Five Forces', 'Value Chain Analysis', 'Competitive Advantage', 'Market Sizing'],
      status: 'Completed',
    },
    {
      id: 'cert-2',
      name: 'Microsoft Excel for Business & Financial Reporting',
      issuer: 'Practical Spreadsheet Certification Course',
      dateOrStatus: 'Completed (2024)',
      skillsLearned: ['Advanced Lookup Functions', 'Pivot Tables & Data Slicers', 'Sensitivity Tables', 'Financial Modeling Basics'],
      status: 'Completed',
    },
    {
      id: 'cert-3',
      name: 'Corporate Finance & Valuation Foundations',
      issuer: 'Self-Paced Academic Enrichment',
      dateOrStatus: 'In Progress (Expected Completion: Late 2024)',
      skillsLearned: ['Time Value of Money', 'Capital Budgeting (NPV/IRR)', 'Working Capital Dynamics'],
      status: 'In Progress',
    },
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'Top 5 Finalist — Inter-Collegiate Business Case Competition',
      category: 'Academic Competition',
      date: '2024',
      description: 'Awarded finalist honors for presenting a data-backed FMCG rural market expansion strategy against 24 competing college teams.',
      verifiableContext: 'Vedanta College Departmental Delegation.',
    },
    {
      id: 'ach-2',
      title: 'Departmental Academic Recognition for Seminar Paper',
      category: 'Academic Research',
      date: '2023',
      description: 'Received top grade mark for in-depth comparative paper analyzing Indian retail supply chain resilience.',
      verifiableContext: 'Evaluated by Faculty Panel at Vedanta College.',
    },
    {
      id: 'ach-3',
      title: 'Exemplary Student Coordinator Commendation',
      category: 'Campus Leadership',
      date: '2024',
      description: 'Recognized by faculty coordinator for disciplined logistical management during the Annual Management Colloquium.',
      verifiableContext: 'Vedanta College Business Forum.',
    },
  ],
};

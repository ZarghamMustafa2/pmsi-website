export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

export interface BudgetComponent {
  component: string;
  amount: number;
  percentage: number;
  description: string;
}

export interface TimelineMilestone {
  period: string;
  activities: string;
}

export interface ProjectProposal {
  title: string;
  totalRequestedUSD: number;
  tagline: string;
  implementationPeriod: string;
  programArea: string;
  country: string;
  executiveSummary: string[];
  projectBackgroundNeed: string[];
  overallGoal: string;
  specificObjectives: string[];
  intendedBeneficiaries: {
    primary: string;
    priorityCommunities: string[];
    geographicalCoverage: string;
    targetDescription: string;
  };
  proposedActivities: {
    code: string;
    title: string;
    description: string;
    items?: string[];
  }[];
  budgetTable: BudgetComponent[];
  budgetExplanation: {
    component: string;
    amount: string;
    explanation: string;
  }[];
  budgetNote: string;
  timeline: TimelineMilestone[];
  timelineNote: string;
  expectedOutcomes: string[];
  proposedMonitoringIndicators: string[];
  monitoringNote: string;
  childProtectionEthicalStandards: string[];
  financialAccountabilityReporting: {
    preImplementation: string[];
    reportingSchedule: string[];
    scheduleNote: string;
  };
  institutionalReadinessCompliance: string[];
  partnershipRequest: {
    fundingRequested: string;
    collaborationScope: string[];
    conditionNote: string;
  };
  closingStatement: {
    title: string;
    paragraphs: string[];
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  location: string;
  communityBeneficiary: string;
  humanitarianBackground: string;
  objectives: string[];
  activities: string[];
  expectedOutcomes?: string[];
  verifiedResults?: string[];
  beneficiariesSupported?: string;
  currentActivities?: string[];
  implementationStatus?: string;
  documentedProgress?: string;
  startDate?: string;
  completionDate?: string;
  fundingRequired: boolean;
  fundingRequirement: string;
  fundingAmountUSD?: number;
  proposalAvailable: boolean;
  proposalNote?: string;
  publicationVisibility: boolean;
  proposal?: ProjectProposal;
  corporatePhilanthropy?: CorporatePhilanthropySection;

  // Dedicated Completed Project verification fields:
  activitiesDelivered?: string[];
  verifiedBeneficiaries?: string;
  actualResults?: string[];
  supportingEvidence?: string;

  // Dedicated Ongoing Project verification fields:
  verifiedProgress?: string;
  isDraft?: boolean;
}

export interface CorporatePhilanthropyTarget {
  name: string;
  focusArea: string;
  alignment: string;
  officialUrl: string;
}

export interface CorporatePhilanthropySection {
  title: string;
  description: string;
  disclaimer: string;
  targets: CorporatePhilanthropyTarget[];
}

export const educationProposalData: ProjectProposal = {
  title: 'Education Support for Minority Children',
  totalRequestedUSD: 30000,
  tagline: 'Equal Access to Education. Equal Opportunities for Every Child.',
  implementationPeriod: '12 Months (Indicative)',
  programArea: 'Education, Child Welfare & Minority Empowerment',
  country: 'Pakistan',
  executiveSummary: [
    'Pakistan Minorities Support Initiative (PMSI) presents the proposed Education Support for Minority Children project, a humanitarian education initiative seeking USD 30,000 in financial support.',
    'The initiative aims to improve educational opportunities for disadvantaged children from religious minority communities in Pakistan, including Christian, Hindu, Ahmadi, Sikh, and other marginalized communities.',
    'Children facing poverty, discrimination, and limited access to educational resources may encounter significant barriers to enrolling in school, continuing their education, and developing essential academic skills.',
    'PMSI proposes a structured educational assistance program focused on learning materials, school access support, supplementary learning opportunities, community engagement, and responsible project monitoring.',
    'The proposed funding will support the development and implementation of these activities, subject to needs assessments, appropriate institutional arrangements, safeguarding measures, and applicable legal requirements.',
    'PMSI invites international philanthropic foundations, educational institutions, humanitarian organizations, and prospective funding partners to explore collaboration on this initiative.',
  ],
  projectBackgroundNeed: [
    'Education is fundamental to reducing inequality and improving long-term social and economic opportunities.',
    'Some children from marginalized religious minority communities in Pakistan face overlapping educational challenges, including:',
    '• Financial difficulties affecting school enrollment and attendance.',
    '• Limited access to essential educational supplies.',
    '• Social exclusion and discriminatory barriers.',
    '• Inadequate supplementary academic assistance.',
    '• Educational disruption caused by household economic hardship.',
    '• Limited access to community-based educational support.',
    'The specific needs, priority locations, and scale of assistance will be established through a preliminary community assessment.',
    'This project proposes a practical response focused on supporting children\'s educational participation and reducing avoidable barriers to learning.',
  ],
  overallGoal:
    'To promote equitable access to education and improve learning opportunities for disadvantaged children from religious minority communities in Pakistan through targeted educational assistance and inclusive community partnerships.',
  specificObjectives: [
    'Improve access to essential school supplies and learning materials.',
    'Reduce selected financial barriers affecting school attendance and continuation.',
    'Facilitate supplementary educational assistance for children who need academic support.',
    'Encourage inclusive educational participation without discrimination.',
    'Strengthen community awareness of children\'s educational rights.',
    'Establish measurable and accountable methods for implementing and evaluating educational support.',
  ],
  intendedBeneficiaries: {
    primary:
      'School-age children experiencing educational disadvantage, particularly children from low-income religious minority households.',
    priorityCommunities: [
      'Christian minority families',
      'Hindu minority families',
      'Ahmadi minority families',
      'Sikh minority families',
      'Other marginalized and economically disadvantaged communities',
    ],
    geographicalCoverage:
      'Target districts and communities will be determined through a needs assessment and an assessment of implementation capacity.',
    targetDescription:
      'The number of children to be supported will be finalized after verifying local costs, educational needs, selection criteria, and the available implementation resources. Assistance will be based on documented needs and non-discriminatory eligibility criteria.',
  },
  proposedActivities: [
    {
      code: 'Activity A',
      title: 'Educational Materials and Supplies',
      description:
        'Provide appropriate educational support materials, subject to assessed needs, potentially including:',
      items: [
        'Textbooks and notebooks',
        'School stationery',
        'School bags',
        'School uniforms',
        'Basic learning resources',
      ],
    },
    {
      code: 'Activity B',
      title: 'School Access and Continuation Support',
      description:
        'Explore targeted educational assistance for eligible children whose families face financial barriers to schooling. Support may address verified school-related costs that directly affect enrollment or continued attendance.',
    },
    {
      code: 'Activity C',
      title: 'Supplementary Academic Support',
      description:
        'Develop appropriate supplementary learning opportunities, potentially including:',
      items: [
        'Basic literacy assistance',
        'Academic tutoring',
        'Learning support sessions',
        'Educational guidance',
      ],
    },
    {
      code: 'Activity D',
      title: 'Community Engagement',
      description:
        'Conduct appropriate community engagement activities to encourage school participation, parental involvement, inclusion, and awareness of educational opportunities.',
    },
    {
      code: 'Activity E',
      title: 'Monitoring and Safeguarding',
      description:
        'Develop and apply reasonable procedures for monitoring educational assistance, maintaining financial records, protecting children\'s information, and reporting verified project results.',
    },
  ],
  budgetTable: [
    {
      component: 'Educational Materials & Supplies',
      amount: 9000,
      percentage: 30,
      description: 'Purchasing and distributing essential school supplies and educational materials according to verified beneficiary needs.',
    },
    {
      component: 'School Access & Continuation Support',
      amount: 7500,
      percentage: 25,
      description: 'Targeted assistance with eligible school-related expenses, intended to reduce financial barriers to education.',
    },
    {
      component: 'Supplementary Academic Learning Support',
      amount: 4800,
      percentage: 16,
      description: 'Suitable learning sessions, tutoring arrangements, and supplementary educational resources.',
    },
    {
      component: 'Community Engagement & Awareness',
      amount: 1800,
      percentage: 6,
      description: 'Community consultations, educational awareness activities, and parental engagement.',
    },
    {
      component: 'Child Safeguarding, Monitoring & Reporting',
      amount: 2400,
      percentage: 8,
      description: 'Responsible monitoring, child protection procedures, appropriate recordkeeping, and donor reporting activities.',
    },
    {
      component: 'Project Coordination & Operational Support',
      amount: 3000,
      percentage: 10,
      description: 'Necessary coordination, logistics, communications, and implementation administration directly attributable to the project.',
    },
    {
      component: 'Contingency Reserve',
      amount: 1500,
      percentage: 5,
      description: 'Proposed reserve for justified and documented unforeseen project expenses, subject to donor approval and agreed financial controls.',
    },
  ],
  budgetExplanation: [
    {
      component: 'Educational Materials & Supplies',
      amount: '$9,000 (30%)',
      explanation:
        'Proposed allocation for purchasing and distributing essential school supplies and educational materials according to verified beneficiary needs.',
    },
    {
      component: 'School Access & Continuation Support',
      amount: '$7,500 (25%)',
      explanation:
        'Proposed allocation for targeted assistance with eligible school-related expenses, intended to reduce financial barriers to education.',
    },
    {
      component: 'Supplementary Academic Learning Support',
      amount: '$4,800 (16%)',
      explanation:
        'Proposed allocation for suitable learning sessions, tutoring arrangements, and supplementary educational resources.',
    },
    {
      component: 'Community Engagement & Awareness',
      amount: '$1,800 (6%)',
      explanation:
        'Proposed allocation for community consultations, educational awareness activities, and parental engagement.',
    },
    {
      component: 'Safeguarding, Monitoring & Reporting',
      amount: '$2,400 (8%)',
      explanation:
        'Proposed allocation for responsible monitoring, child protection procedures, appropriate recordkeeping, and donor reporting activities.',
    },
    {
      component: 'Project Coordination & Operational Support',
      amount: '$3,000 (10%)',
      explanation:
        'Proposed allocation for necessary coordination, logistics, communications, and implementation administration directly attributable to the project.',
    },
    {
      component: 'Contingency Reserve',
      amount: '$1,500 (5%)',
      explanation:
        'A proposed reserve for justified and documented unforeseen project expenses, subject to donor approval and the agreed financial controls.',
    },
  ],
  budgetNote:
    'This is an indicative planning allocation prepared against the requested USD 30,000 funding envelope. It is not based on completed quotations or a finalized beneficiary count. A detailed line-item budget, local price quotations, and any applicable currency conversion assumptions will be established before funding agreements or implementation.',
  timeline: [
    {
      period: 'Months 1–2',
      activities: 'Needs assessment, target community identification, project planning, safeguarding and implementation preparation',
    },
    {
      period: 'Months 3–4',
      activities: 'Beneficiary assessment and selection, procurement planning, educational support preparation',
    },
    {
      period: 'Months 5–8',
      activities: 'Educational materials assistance, school access support and supplementary learning activities',
    },
    {
      period: 'Months 9–10',
      activities: 'Continued educational support, community engagement and monitoring',
    },
    {
      period: 'Months 11–12',
      activities: 'Verification of outcomes, financial reconciliation and final project reporting',
    },
  ],
  timelineNote:
    'The timeline will begin only after appropriate funding agreements, legal requirements, implementation arrangements, and safeguarding measures are in place.',
  expectedOutcomes: [
    'Improved availability of essential school materials for eligible children.',
    'Reduced educational expense barriers for selected households.',
    'Increased access to supplementary academic support.',
    'Improved opportunities for educational continuation.',
    'Greater community awareness of inclusive education.',
  ],
  proposedMonitoringIndicators: [
    'Number of eligible children enrolled in project assistance.',
    'Number of educational support packages distributed.',
    'Number of children receiving school access assistance.',
    'Number and attendance of supplementary learning sessions.',
    'Documented expenditure against approved budget categories.',
    'Beneficiary or guardian feedback obtained through safe and appropriate procedures.',
  ],
  monitoringNote:
    'Specific numerical targets and expected impact levels will be established after the baseline assessment and detailed cost verification. No outcomes listed above represent completed achievements.',
  childProtectionEthicalStandards: [
    'Protection of children\'s personal information.',
    'Respect for religious identity and human dignity.',
    'Non-discriminatory selection and treatment.',
    'Appropriate parental or guardian consent.',
    'Safe handling of photographs and beneficiary stories.',
    'Prevention of exploitation and conflicts of interest.',
    'Accessible reporting of safeguarding concerns.',
    'Sensitive beneficiary information will not be publicly disclosed without an appropriate basis and required consent.',
  ],
  financialAccountabilityReporting: {
    preImplementation: [
      'Approved project budgets and procurement procedures.',
      'Financial transaction records and supporting receipts.',
      'Periodic expenditure monitoring.',
      'Documented delivery of educational assistance.',
      'Donor reporting aligned with agreed requirements.',
      'Project closeout and financial reconciliation.',
    ],
    reportingSchedule: [
      'Quarterly narrative progress updates.',
      'Quarterly budget expenditure summaries.',
      'Final project completion and financial report.',
    ],
    scheduleNote:
      'These are proposed reporting commitments, subject to agreement with the funding partner and establishment of the necessary organizational systems.',
  },
  institutionalReadinessCompliance: [
    'PMSI is currently establishing its organizational and legal foundations.',
    'The initiative is seeking preliminary engagement with potential partners to help develop a properly structured humanitarian education program.',
    'Any acceptance or administration of international funding will be subject to applicable organizational registration, regulatory, banking, governance, and donor due-diligence requirements.',
    'Where appropriate, PMSI may explore future implementation arrangements with suitably registered organizations, subject to formal agreements and relevant approvals.',
    'No current registration, institutional banking authorization, audited track record, or existing implementation partnership is represented by this proposal.',
  ],
  partnershipRequest: {
    fundingRequested: 'USD 30,000',
    collaborationScope: [
      'Development and validation of the project budget.',
      'Educational needs assessments.',
      'Project design and safeguarding support.',
      'Conditional funding commitments.',
      'Identification of suitable implementation partners.',
      'Future project implementation and evaluation.',
    ],
    conditionNote:
      'Funding agreements and transfer arrangements would proceed only after the required institutional and regulatory conditions have been addressed.',
  },
  closingStatement: {
    title: 'Help Build Educational Opportunities for Minority Children',
    paragraphs: [
      'Access to education can create opportunities that extend far beyond the classroom.',
      'For children experiencing poverty, educational exclusion, or social disadvantage, appropriate support can help reduce barriers and create a stronger foundation for the future.',
      'Through the proposed Education Support for Minority Children initiative, Pakistan Minorities Support Initiative aims to develop a practical, inclusive, and accountable educational support program.',
      'We are seeking USD 30,000 in prospective funding support to help bring this proposed initiative toward implementation.',
      'We invite international partners to engage with PMSI, review the proposed project framework, and explore responsible opportunities for collaboration.',
    ],
  },
};

export const projectsData: Project[] = [
  // PROJECT 01: MINORITY LEGAL DEFENSE
  {
    id: 'PMSI-PRJ-01',
    slug: 'minority-legal-defense',
    title: 'Minority Legal Defense & Civic Rights Protection Initiative',
    category: 'Minority Rights & Protection',
    status: 'upcoming',
    summary:
      'A proposed legal assistance and rapid referral framework designed to provide independent legal defense, constitutional rights literacy, and civic protection for religious minorities facing discrimination.',
    description:
      'Across Pakistan, marginalized faith communities—including Christian, Ahmadi, Hindu, and Sikh populations—frequently encounter systemic barriers when facing discriminatory accusations, property encroachments, or localized harassment. This initiative is designed to establish dedicated pro-bono legal referral pathways, organize community rights awareness workshops, and provide secure temporary accommodation support for families in acute distress.',
    location: 'Punjab, Sindh & Nationwide Scope',
    communityBeneficiary:
      'Christian, Ahmadi, Hindu, Sikh, and other religious minority communities confronting institutional marginalization or legal vulnerability.',
    humanitarianBackground:
      'Without accessible legal representation and civic literacy, vulnerable minority citizens are disproportionately impacted by legal intimidation and lack of institutional recourse. Establishing structured protection and legal defense mechanisms is essential for upholding human dignity and constitutional equality.',
    objectives: [
      'Facilitate access to qualified pro-bono legal counsel for vulnerable minority individuals facing discriminatory legal actions.',
      'Provide national identity documentation assistance (CNIC and civil registry) to enable full civic participation.',
      'Establish a rapid referral and emergency safety accommodation network for families in acute vulnerability.',
      'Conduct constitutional rights and legal awareness workshops for local minority community organizers.',
    ],
    activities: [
      'Partnering with certified independent human rights lawyers and pro-bono legal trusts.',
      'Setting up a secure intake and referral communication desk for legal requests.',
      'Delivering localized legal literacy seminars on fundamental constitutional protections.',
      'Providing non-discriminatory paralegal support and documentation assistance.',
    ],
    expectedOutcomes: [
      'Enhanced physical safety, legal resilience, and documented civic status for vulnerable minority families.',
      'Direct reduction in arbitrary harassment through timely legal representation.',
      'Empowered local community leaders equipped to navigate state judicial and administrative procedures.',
    ],
    fundingRequired: true,
    fundingRequirement: 'Budget Under Development',
    proposalAvailable: false,
    proposalNote: 'Detailed concept note and terms of reference available upon institutional request.',
    publicationVisibility: true,
  },

  // PROJECT 02: EDUCATION SUPPORT FOR MINORITY CHILDREN (OFFICIAL PROPOSAL AVAILABLE: $30,000)
  {
    id: 'PMSI-PRJ-02',
    slug: 'education-support-minority-children',
    title: 'Education Support for Minority Children',
    category: 'Education & Child Welfare',
    status: 'upcoming',
    summary:
      'A structured humanitarian education initiative seeking USD 30,000 to provide essential educational materials, school access support, supplementary tutoring, and community engagement for disadvantaged minority children in Pakistan.',
    description:
      'Education is fundamental to reducing inequality and improving long-term social and economic opportunities. Some children from marginalized religious minority communities in Pakistan—including Christian, Hindu, Ahmadi, Sikh, and other marginalized families—face overlapping educational barriers such as financial difficulties, lack of stationery and uniforms, discriminatory barriers, and limited supplementary learning support. PMSI proposes a structured 12-month educational assistance initiative to reduce avoidable barriers to schooling.',
    location: 'Priority Districts in Pakistan (Determined via Needs Assessment)',
    communityBeneficiary:
      'School-age children experiencing educational disadvantage from low-income Christian, Hindu, Ahmadi, Sikh, and other marginalized minority households.',
    humanitarianBackground:
      'Children facing poverty, discrimination, and limited access to educational resources encounter significant barriers to enrolling in school, continuing their education, and developing essential academic skills. This initiative offers a practical, transparent response focused on supporting children’s educational participation and reducing avoidable barriers to learning.',
    objectives: [
      'Improve access to essential school supplies and learning materials.',
      'Reduce selected financial barriers affecting school attendance and continuation.',
      'Facilitate supplementary educational assistance for children who need academic support.',
      'Encourage inclusive educational participation without discrimination.',
      'Strengthen community awareness of children’s educational rights.',
      'Establish measurable and accountable methods for implementing and evaluating educational support.',
    ],
    activities: [
      'Activity A: Distributing appropriate educational materials (textbooks, notebooks, stationery, bags, and uniforms).',
      'Activity B: Providing targeted school access and continuation assistance addressing verified school-related costs.',
      'Activity C: Developing supplementary academic learning support (literacy assistance, tutoring, and educational guidance).',
      'Activity D: Conducting community engagement to encourage school participation, parental involvement, and inclusion.',
      'Activity E: Applying robust monitoring, financial recordkeeping, child protection safeguarding, and donor reporting.',
    ],
    expectedOutcomes: [
      'Improved availability of essential school materials for eligible children.',
      'Reduced educational expense barriers for selected households.',
      'Increased access to supplementary academic support.',
      'Improved opportunities for educational continuation.',
      'Greater community awareness of inclusive education.',
    ],
    fundingRequired: true,
    fundingRequirement: 'USD 30,000',
    fundingAmountUSD: 30000,
    proposalAvailable: true,
    proposalNote: 'Complete 14-section project funding proposal document verified and available for institutional download and review.',
    publicationVisibility: true,
    proposal: educationProposalData,
    corporatePhilanthropy: {
      title: 'U.S. Corporate Philanthropy & Funding Opportunities',
      description:
        'Pakistan Minorities Support Initiative (PMSI) actively welcomes prospective collaboration, institutional grant inquiries, and bilateral partnerships with U.S.-based corporate giving programs, CSR initiatives, and philanthropic foundations committed to educational equity, child welfare, and poverty alleviation in developing nations.',
      disclaimer:
        'IMPORTANT PROSPECTIVE RESEARCH & NON-AFFILIATION NOTICE: The organizations listed below represent prospective institutional funding targets identified through humanitarian research on corporate philanthropy priorities. These entities are NOT existing PMSI donors, sponsors, grantors, or partners. This presentation does not imply any endorsement, grant award, partnership commitment, or formal relationship between PMSI and these organizations. Company and foundation names, along with links to their official funding programs, are provided solely as prospective research references for international philanthropic alignment.',
      targets: [
        {
          name: 'Google.org',
          focusArea: 'Education Equity, Foundational Learning & Digital Inclusion',
          alignment:
            'Supports initiatives expanding educational access for underserved youth, closing the digital divide, and providing equitable learning opportunities to vulnerable communities.',
          officialUrl: 'https://www.google.org/',
        },
        {
          name: 'Microsoft Philanthropies',
          focusArea: 'Digital Skills, Youth Opportunity & Humanitarian Inclusion',
          alignment:
            'Focuses on empowering non-profit organizations that deliver digital literacy, basic educational skills, and opportunities to marginalized youth and vulnerable minority populations.',
          officialUrl: 'https://www.microsoft.com/en-us/corporate-responsibility/philanthropies',
        },
        {
          name: 'Cisco Foundation',
          focusArea: 'Global Impact Cash Grants, Education & Economic Empowerment',
          alignment:
            'Provides funding for innovative programs that expand access to education, build digital and vocational capacity, and support underserved communities worldwide.',
          officialUrl: 'https://www.cisco.com/c/en/us/about/csr/community/nonprofits/grant-programs.html',
        },
        {
          name: 'The Coca-Cola Foundation',
          focusArea: 'Community Well-Being, Youth Empowerment & Education',
          alignment:
            'Directs charitable grant funding toward grassroots community resilience, youth development, education, and social empowerment programs for marginalized populations globally.',
          officialUrl: 'https://www.coca-colacompany.com/about-us/people-and-communities/the-coca-cola-foundation',
        },
        {
          name: 'PepsiCo Foundation',
          focusArea: 'Community Resilience, Education & Youth Economic Opportunity',
          alignment:
            'Invests in high-impact programs designed to break cycles of poverty through educational access, youth skills development, and community support in emerging economies.',
          officialUrl: 'https://www.pepsico.com/about/social-impact',
        },
      ],
    },
  },

  // PROJECT 03: FLOOD RELIEF & DISASTER RESILIENCE
  {
    id: 'PMSI-PRJ-03',
    slug: 'flood-relief-disaster-resilience',
    title: 'Disaster Resilience & Emergency Flood Relief Contingency',
    category: 'Disaster Relief & Climate Recovery',
    status: 'upcoming',
    summary:
      'A preparedness financing and contingency framework to deliver life-saving emergency relief supplies, clean drinking water, and post-flood rehabilitation to disaster-affected rural communities.',
    description:
      'Recurring monsoon floods disproportionately affect impoverished rural districts where minority agrarian laborers and informal workers lack resilient housing and disaster safety nets. This proposed initiative aims to establish pre-positioned emergency stocks—including clean water purification systems, emergency food rations, and transitional shelter kits—ensuring rapid, non-discriminatory humanitarian response during climate emergencies.',
    location: 'Rural Sindh & Southern Punjab',
    communityBeneficiary:
      'Disaster-displaced rural families, agrarian day laborers, and vulnerable households residing in flood-vulnerable districts.',
    humanitarianBackground:
      'Pakistan’s vulnerability to climate disasters demands proactive disaster preparedness rather than delayed reactive appeals. By securing humanitarian contingency partnerships before flood seasons, emergency aid can reach isolated settlements within critical early hours.',
    objectives: [
      'Pre-position life-saving emergency clean water filtration systems and emergency WASH supplies.',
      'Establish contingency agreements for food ration hampers for flood-isolated households.',
      'Provide transitional weather-resistant shelter materials to displaced families.',
      'Support post-disaster livelihood rehabilitation for rural agrarian workers.',
    ],
    activities: [
      'Mapping disaster-vulnerable minority and rural settlements in high-risk riverine corridors.',
      'Procuring and warehousing certified portable water filtration kits and emergency non-food items.',
      'Training localized community disaster volunteers in emergency distribution protocols.',
      'Coordinating with local disaster management networks to ensure non-duplication of aid.',
    ],
    expectedOutcomes: [
      'Rapid delivery of life-saving relief supplies during flood inundation, mitigating waterborne disease outbreaks.',
      'Equitable, non-discriminatory distribution of emergency aid based solely on verified human vulnerability.',
      'Enhanced community self-reliance through trained local disaster volunteer networks.',
    ],
    fundingRequired: true,
    fundingRequirement: 'Budget Under Development',
    proposalAvailable: false,
    proposalNote: 'Emergency contingency budget models available for institutional disaster relief donors.',
    publicationVisibility: true,
  },

  // PROJECT 04: TRANSGENDER INCLUSION
  {
    id: 'PMSI-PRJ-04',
    slug: 'transgender-inclusion-vocational-empowerment',
    title: 'Transgender Dignity, Vocational Capacity & Social Inclusion',
    category: 'Transgender Inclusion & Empowerment',
    status: 'upcoming',
    summary:
      'A holistic empowerment program to provide accredited vocational apprenticeships, healthcare access, and anti-discrimination legal support for transgender citizens in Pakistan.',
    description:
      'Transgender individuals in Pakistan experience severe societal ostracization, widespread exclusion from formal employment, and systemic discrimination in public healthcare. This project proposes establishing market-relevant vocational training courses, providing micro-enterprise startup toolkits, facilitating dignified healthcare consultations, and providing legal support for national identity card (CNIC) alignment.',
    location: 'Major Urban Centers (Lahore, Rawalpindi, Karachi)',
    communityBeneficiary:
      'Transgender individuals, socially excluded khawajasiras, and marginalized gender-diverse youth.',
    humanitarianBackground:
      'Sustained social inclusion requires economic self-reliance. When transgender citizens are provided with verified technical skills, formal career opportunities, and civic recognition, they transition away from extreme economic vulnerability into sustainable, dignified livelihoods.',
    objectives: [
      'Deliver accredited vocational skills training in high-demand trades (culinary arts, tailoring, digital literacy).',
      'Provide graduation toolkits and starter stipends to support transitions into formal micro-enterprise or employment.',
      'Facilitate access to respectful, non-discriminatory primary healthcare and mental wellbeing consultations.',
      'Support legal gender marker registration on national identity documents to secure civic rights.',
    ],
    activities: [
      'Establishing collaborative training partnerships with inclusive vocational academies and trade workshops.',
      'Organizing community peer mentorship circles led by established transgender community organizers.',
      'Coordinating with sensitive medical professionals for subsidized health checkups and healthcare referrals.',
      'Conducting employer sensitization workshops with progressive local businesses to foster inclusive hiring.',
    ],
    expectedOutcomes: [
      'Tangible economic independence for program participants, reducing reliance on street-level vulnerability.',
      'Documented citizenship through aligned national identity cards, enabling banking access and civic participation.',
      'Measurable reduction in societal stigma through positive community representation and skill recognition.',
    ],
    fundingRequired: true,
    fundingRequirement: 'Budget Under Development',
    proposalAvailable: false,
    proposalNote: 'Comprehensive program outline and modular training curricula available upon inquiry.',
    publicationVisibility: true,
  },

  // PROJECT 05: ORPHAN & CHILD SAFEGUARDING
  {
    id: 'PMSI-PRJ-05',
    slug: 'orphan-child-safeguarding-framework',
    title: 'Orphan & Vulnerable Child Safeguarding Framework',
    category: 'Child Safeguarding & Welfare',
    status: 'upcoming',
    summary:
      'A protective child welfare model providing continuous nutrition, pediatric health monitoring, education support, and strict protection against child labor for orphaned minors.',
    description:
      'Orphaned and abandoned children in marginalized minority areas are uniquely exposed to hazardous labor, institutional neglect, and human trafficking. This proposed initiative establishes direct family-based guardianship sponsorships, regular pediatric checkups, nutritional food hampers, and dedicated child safeguarding verifications to ensure vulnerable children thrive in safe, protective environments.',
    location: 'Selected Districts in Punjab & Sindh',
    communityBeneficiary:
      'Orphaned minors, children without parental support, and street-connected youth in marginalized settlements.',
    humanitarianBackground:
      'Every child has the fundamental right to safety, emotional stability, and developmental support. Institutionalizing child protection standards and supporting surviving kin or foster guardians prevents vulnerable children from falling into bonded labor or street exploitation.',
    objectives: [
      'Deliver monthly nutritional support hampers and seasonal clothing packages to orphaned children.',
      'Guarantee full enrollment and attendance in accredited non-discriminatory schooling.',
      'Provide regular pediatric health assessments, nutritional monitoring, and necessary medications.',
      'Enforce independent child safeguarding audits to guarantee safe, protective living conditions.',
    ],
    activities: [
      'Conducting baseline vulnerability and family assessments in marginalized neighborhoods.',
      'Disbursing monthly educational and nutritional stipends directly to verified guardians.',
      'Partnering with local pediatric clinics for bi-annual health screenings and developmental tracking.',
      'Providing after-school safe study spaces and positive mentorship activities.',
    ],
    expectedOutcomes: [
      'Zero drop-outs and complete shielding of enrolled children from hazardous labor or street exploitation.',
      'Improved developmental and physical health indicators among sponsored orphaned minors.',
      'Strengthened capacity of surviving guardians to maintain safe household environments.',
    ],
    fundingRequired: true,
    fundingRequirement: 'Budget Under Development',
    proposalAvailable: false,
    proposalNote: 'Child safeguarding protocols and sponsorship cost breakdowns prepared for donor consultation.',
    publicationVisibility: true,
  },

  // PROJECT 06: INTERFAITH HARMONY
  {
    id: 'PMSI-PRJ-06',
    slug: 'interfaith-harmony-community-welfare',
    title: 'Interfaith Harmony & Community Welfare Dialogue Platform',
    category: 'Community Welfare & Human Rights',
    status: 'upcoming',
    summary:
      'A community-driven dialogue and peacebuilding platform bringing together local leaders of diverse faiths to foster social cohesion, de-escalate tensions, and implement joint welfare actions.',
    description:
      'In multi-faith settlements confronting localized tensions, the absence of regular communication between faith communities exacerbates mistrust. This project proposes establishing localized Peace & Welfare Committees, training interfaith youth ambassadors, and hosting collaborative community initiatives that build lasting social solidarity and mutual respect across religious divides.',
    location: 'Multi-Faith Peri-Urban & Rural Settlements',
    communityBeneficiary:
      'Local multi-faith communities, minority elders, youth organizers, and civic representatives.',
    humanitarianBackground:
      'Lasting peace is nurtured at the neighborhood level. When community members from Muslim, Christian, Hindu, and Sikh backgrounds collaborate on shared community welfare priorities, societal divisions soften and resilience against communal incitement is established.',
    objectives: [
      'Convene regular local Interfaith Dialogue and Community Welfare committees.',
      'Train diverse youth ambassadors in conflict resolution, peaceful dialogue, and human rights principles.',
      'Facilitate joint community-led welfare initiatives (neighborhood cleanups, shared tree plantations, communal relief).',
      'Create emergency de-escalation communication channels between local community elders and civil authorities.',
    ],
    activities: [
      'Hosting quarterly structured interfaith dialogue sessions with recognized community leaders.',
      'Delivering multi-faith youth leadership workshops focusing on constitutional equality and empathy.',
      'Documenting and celebrating collaborative cross-faith community achievements.',
      'Establishing rapid alert mechanisms to peacefully address localized grievances before escalation.',
    ],
    expectedOutcomes: [
      'Strengthened neighborhood solidarity and active de-escalation of localized communal tensions.',
      'A network of trained youth peace advocates actively promoting pluralism and equality in their localities.',
      'Demonstrated models of peaceful interfaith civic collaboration in vulnerable districts.',
    ],
    fundingRequired: true,
    fundingRequirement: 'Budget Under Development',
    proposalAvailable: false,
    proposalNote: 'Peacebuilding framework and dialogue methodology available upon institutional request.',
    publicationVisibility: true,
  },

  // =========================================================================
  // DRAFT COMPLETED PROJECTS (PREPARED STRUCTURES FOR FUTURE PUBLICATION)
  // Status: Completed | Unpublished until actual verified records are supplied
  // =========================================================================

  // COMPLETED PROJECT DRAFT 01: MINORITY CHILDREN SCHOOL SUPPORT
  {
    id: 'PMSI-PRJ-COMP-01',
    slug: 'minority-children-school-support',
    title: 'Minority Children School Support',
    category: 'Education & Child Welfare',
    status: 'completed',
    isDraft: true,
    publicationVisibility: false, // Set to true once verified completion records are provided
    summary:
      'A preparatory completed project record structured to document school supply distributions and educational retention assistance for minority children once field records are formally audited.',
    description:
      'This project record is prepared to receive verified completion documentation for educational support interventions delivered to disadvantaged minority children. In accordance with PMSI transparency guidelines, verified metrics and completion dates will be populated following formal post-project reconciliation.',
    location: 'Punjab (Target District to be Specified upon Field Audit)',
    completionDate: 'Pending Verification (Post-Implementation Audit)',
    communityBeneficiary:
      'Disadvantaged school-age children from marginalized religious minority communities.',
    humanitarianBackground:
      'Educational access is the most dependable path out of multi-generational poverty for religious minority communities. Documenting verified outcomes ensures transparent donor reporting and institutional accountability.',
    objectives: [
      'Deliver verified school kits and learning materials directly to disadvantaged minority students.',
      'Facilitate access continuation for children facing economic hardship.',
      'Maintain auditable attendance tracking and guardian participation records.',
    ],
    activities: [
      'Provision of essential school bags, notebooks, and learning supplies to eligible minority children.',
      'Facilitation of elementary school enrollment and attendance continuation support.',
      'Community meetings with guardians to reinforce education retention.',
    ],
    activitiesDelivered: [
      'Provision of essential school bags, notebooks, and learning supplies to eligible minority children.',
      'Facilitation of elementary school enrollment and attendance continuation support.',
      'Community meetings with guardians to reinforce education retention.',
    ],
    verifiedBeneficiaries: 'Pending Independent Beneficiary Audit',
    actualResults: [
      'Documented educational retention among enrolled students.',
      'Reduction in school-supply expense burden on low-income minority households.',
    ],
    supportingEvidence:
      'Distribution registers, verification forms, and completion audit report to be attached upon official conclusion.',
    fundingRequired: false,
    fundingRequirement: 'Fully Funded / Concluded',
    proposalAvailable: false,
  },

  // COMPLETED PROJECT DRAFT 02: WINTER RELIEF FOR VULNERABLE FAMILIES
  {
    id: 'PMSI-PRJ-COMP-02',
    slug: 'winter-relief-vulnerable-families',
    title: 'Winter Relief for Vulnerable Families',
    category: 'Emergency Relief & Welfare',
    status: 'completed',
    isDraft: true,
    publicationVisibility: false, // Set to true once verified completion records are provided
    summary:
      'A preparatory completed project record structured to document emergency winter relief distributions for vulnerable families once field records are formally audited.',
    description:
      'This project structure is prepared for future publication once actual winter relief operations are fully verified. All quantitative beneficiary records and completion certificates will be published in alignment with our audited reporting standards.',
    location: 'Selected Vulnerable Settlements (To be Specified upon Field Audit)',
    completionDate: 'Pending Verification (Post-Implementation Audit)',
    communityBeneficiary:
      'Marginalized brick-kiln laborers, impoverished rural households, and vulnerable minority families.',
    humanitarianBackground:
      'Extreme winter temperatures severely impact impoverished minority families residing in substandard rural dwellings without heating. Targeted seasonal relief prevents acute health risks.',
    objectives: [
      'Protect vulnerable minority households from seasonal cold weather hazards.',
      'Deliver thermal supplies and winterization materials directly to verified families.',
      'Ensure transparent, non-discriminatory distribution based strictly on socio-economic vulnerability.',
    ],
    activities: [
      'Procurement and direct distribution of thermal blankets, winter shawls, and warm clothing.',
      'Delivery of emergency heating fuel or winterization kits to vulnerable brick-kiln and agrarian minority households.',
      'Verification of distribution manifests by local community elders.',
    ],
    activitiesDelivered: [
      'Procurement and direct distribution of thermal blankets, winter shawls, and warm clothing.',
      'Delivery of emergency heating fuel or winterization kits to vulnerable brick-kiln and agrarian minority households.',
      'Verification of distribution manifests by local community elders.',
    ],
    verifiedBeneficiaries: 'Pending Independent Beneficiary Audit',
    actualResults: [
      'Cold-weather protection provided to vulnerable elderly and children during peak winter months.',
      'Zero reported frostbite or acute hypothermia cases among verified recipient households.',
    ],
    supportingEvidence:
      'Signed beneficiary delivery manifests, photographic timestamp archives, and community elder confirmations held on administrative file.',
    fundingRequired: false,
    fundingRequirement: 'Fully Funded / Concluded',
    proposalAvailable: false,
  },

  // COMPLETED PROJECT DRAFT 03: COMMUNITY EDUCATION AWARENESS PROGRAM
  {
    id: 'PMSI-PRJ-COMP-03',
    slug: 'community-education-awareness-program',
    title: 'Community Education Awareness Program',
    category: 'Community Welfare & Education',
    status: 'completed',
    isDraft: true,
    publicationVisibility: false, // Set to true once verified completion records are provided
    summary:
      'A preparatory completed project record structured to document grassroots education awareness and parental engagement workshops once field records are formally audited.',
    description:
      'This project structure is maintained in readiness for verified community education initiatives. PMSI policy strictly prohibits presenting simulated achievements until actual field registers are finalized.',
    location: 'Target Minority Settlements (To be Specified upon Field Audit)',
    completionDate: 'Pending Verification (Post-Implementation Audit)',
    communityBeneficiary:
      'Minority parents, community leaders, and young adults in underserved settlements.',
    humanitarianBackground:
      'Parental literacy and community awareness are critical prerequisites for sustained school retention. Grassroots dialogue addresses cultural and economic anxieties that cause premature dropouts.',
    objectives: [
      'Educate minority guardians on the long-term benefits of sustained schooling.',
      'Facilitate dialogue between marginalized families and educational institutions.',
      'Address administrative barriers preventing timely enrollment of minority children.',
    ],
    activities: [
      'Community awareness workshops on constitutional education rights and anti-discrimination provisions.',
      'Parental counseling sessions addressing school dropouts among adolescent girls.',
      'Coordination sessions with local public school administrators to address enrollment bottlenecks.',
    ],
    activitiesDelivered: [
      'Community awareness workshops on constitutional education rights and anti-discrimination provisions.',
      'Parental counseling sessions addressing school dropouts among adolescent girls.',
      'Coordination sessions with local public school administrators to address enrollment bottlenecks.',
    ],
    verifiedBeneficiaries: 'Pending Independent Beneficiary Audit',
    actualResults: [
      'Documented increase in guardian commitment to complete primary education cycles.',
      'Identification and resolution of local administrative barriers to minority child enrollment.',
    ],
    supportingEvidence:
      'Workshop attendance rosters, session agendas, participant evaluation forms, and local school coordination records.',
    fundingRequired: false,
    fundingRequirement: 'Fully Funded / Concluded',
    proposalAvailable: false,
  },

  // =========================================================================
  // DRAFT ONGOING PROJECTS (PREPARED STRUCTURES FOR FUTURE PUBLICATION)
  // Status: Planning | Unpublished until actual implementation activity begins
  // =========================================================================

  // ONGOING PROJECT DRAFT 01: MINORITY RIGHTS AWARENESS INITIATIVE
  {
    id: 'PMSI-PRJ-ONG-01',
    slug: 'minority-rights-awareness-initiative',
    title: 'Minority Rights Awareness Initiative',
    category: 'Minority Rights & Protection',
    status: 'ongoing',
    implementationStatus: 'Planning',
    isDraft: true,
    publicationVisibility: false, // Set to true once actual implementation commences
    summary:
      'A structured civic empowerment initiative currently in the planning phase to equip religious minorities with constitutional literacy, legal assistance pathways, and civic defense tools.',
    description:
      'Minority communities in Pakistan often lack familiarity with basic constitutional guarantees, anti-discrimination legislation, and statutory legal aid avenues. This initiative is currently in its planning and institutional development phase, establishing preparatory curricula and legal partner networks to roll out comprehensive community rights seminars.',
    location: 'Priority Districts across Punjab and Sindh',
    startDate: 'Pending Inception & Funding Finalization',
    communityBeneficiary:
      'Minority community organizers, vulnerable families, and youth leaders seeking constitutional rights literacy.',
    humanitarianBackground:
      'Knowledge of constitutional rights empowers marginalized citizens to resist coercion, property encroachments, and discriminatory harassment through lawful judicial mechanisms.',
    objectives: [
      'Deliver accessible constitutional literacy workshops in peri-urban and rural minority settlements.',
      'Establish legal referral networks linking vulnerable citizens with qualified pro-bono counsel.',
      'Facilitate civil registration and CNIC acquisition for undocumented minority citizens.',
    ],
    activities: [
      'Activity 1: Curriculum and legal material adaptation into accessible local dialects.',
      'Activity 2: Training community paralegal focal points.',
      'Activity 3: Convening rights awareness workshops with minority youth and elders.',
    ],
    currentActivities: [
      'Curriculum design for constitutional rights and legal safeguards seminars.',
      'Liaison with local pro-bono human rights attorneys and paralegal networks.',
      'Community needs assessment to identify high-risk districts requiring legal literacy.',
    ],
    verifiedProgress:
      'In Planning Phase — Conceptual framework completed; field implementation commences following grant execution and statutory approval. No unverified milestones reported.',
    fundingRequired: true,
    fundingRequirement: 'Grant Budget Under Development',
    proposalAvailable: false,
  },

  // ONGOING PROJECT DRAFT 02: TRANSGENDER SKILLS DEVELOPMENT PROGRAM
  {
    id: 'PMSI-PRJ-ONG-02',
    slug: 'transgender-skills-development-program',
    title: 'Transgender Skills Development Program',
    category: 'Transgender Inclusion & Empowerment',
    status: 'ongoing',
    implementationStatus: 'Planning',
    isDraft: true,
    publicationVisibility: false, // Set to true once actual implementation commences
    summary:
      'A vocational capacity initiative currently in the planning phase designed to deliver certified trade training, micro-enterprise mentoring, and social inclusion for transgender citizens.',
    description:
      'Transgender persons in Pakistan face extreme social exclusion and economic marginalization. This program is currently in planning to provide accredited vocational apprenticeships, financial literacy, and startup toolkits that foster durable economic independence.',
    location: 'Major Urban Centers (Lahore & Rawalpindi)',
    startDate: 'Pending Inception & Funding Finalization',
    communityBeneficiary:
      'Transgender individuals and gender-diverse youth seeking sustainable vocational self-reliance and formal employment avenues.',
    humanitarianBackground:
      'Vocational skills and formal economic avenues offer the most dignified alternative to street-level vulnerability for transgender individuals.',
    objectives: [
      'Provide market-aligned technical training in safe, inclusive environments.',
      'Support graduates with starter toolkits and business mentorship.',
      'Advocate with private sector employers for inclusive hiring policies.',
    ],
    activities: [
      'Activity 1: Modular trade skills training (tailoring, culinary arts, IT fundamentals).',
      'Activity 2: Business planning and basic financial management coaching.',
      'Activity 3: Linkage with progressive employers and micro-credit opportunities.',
    ],
    currentActivities: [
      'Market assessment of in-demand vocational trades suited for self-employment.',
      'Consultations with transgender community representatives regarding safe learning spaces.',
      'Identification of accredited vocational instructors and enterprise mentors.',
    ],
    verifiedProgress:
      'In Planning Phase — Training modules drafted; vocational facility partnership discussions in progress. No unverified milestones reported.',
    fundingRequired: true,
    fundingRequirement: 'Grant Budget Under Development',
    proposalAvailable: false,
  },

  // ONGOING PROJECT DRAFT 03: FLOOD RECOVERY ASSISTANCE PROGRAM
  {
    id: 'PMSI-PRJ-ONG-03',
    slug: 'flood-recovery-assistance-program',
    title: 'Flood Recovery Assistance Program',
    category: 'Disaster Relief & Climate Recovery',
    status: 'ongoing',
    implementationStatus: 'Planning',
    isDraft: true,
    publicationVisibility: false, // Set to true once actual implementation commences
    summary:
      'A post-disaster recovery model currently in the planning phase focused on safe drinking water restoration, transitional shelter repair, and climate resilience for vulnerable rural communities.',
    description:
      'Recurring monsoon inundations devastate rural settlements where marginalized minority families reside in mud-brick structures without civic infrastructure. This initiative is being planned to deliver pre-positioned clean water purification units, shelter reinforcement materials, and hygiene rehabilitation following climate disasters.',
    location: 'Riverine Corridors in Rural Sindh & Southern Punjab',
    startDate: 'Pending Inception & Funding Finalization',
    communityBeneficiary:
      'Disaster-displaced rural households, agrarian tenant farmers, and flood-vulnerable minority settlements.',
    humanitarianBackground:
      'Disaster response must transition rapidly from emergency food relief into sustainable infrastructure recovery, preventing secondary waterborne epidemics.',
    objectives: [
      'Restore access to pathogen-free drinking water in flood-inundated settlements.',
      'Provide weather-resistant transitional shelter repair kits.',
      'Build local community capacity in early flood warning and water sanitation.',
    ],
    activities: [
      'Activity 1: Installing durable community water filtration systems.',
      'Activity 2: Distributing transitional shelter reinforcement packages.',
      'Activity 3: Training village WASH committees in water hygiene maintenance.',
    ],
    currentActivities: [
      'Mapping flood-prone minority settlements and rural agrarian hamlets.',
      'Technical assessment of decentralized solar-powered water filtration solutions.',
      'Contingency planning for rapid delivery of shelter repair materials.',
    ],
    verifiedProgress:
      'In Planning Phase — Field vulnerability mapping complete; procurement frameworks under donor review. No unverified milestones reported.',
    fundingRequired: true,
    fundingRequirement: 'Grant Budget Under Development',
    proposalAvailable: false,
  },
];

export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projectsData.filter((p) => p.status === status && p.publicationVisibility);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  // Support both canonical slug and legacy alias
  if (slug === 'education-scholarships-marginalized-children') {
    return projectsData.find((p) => p.slug === 'education-support-minority-children' && p.publicationVisibility);
  }
  return projectsData.find((p) => p.slug === slug && p.publicationVisibility);
};

export const getUpcomingProjects = (): Project[] => {
  return getProjectsByStatus('upcoming');
};

export const getOngoingProjects = (): Project[] => {
  return getProjectsByStatus('ongoing');
};

export const getCompletedProjects = (): Project[] => {
  return getProjectsByStatus('completed');
};

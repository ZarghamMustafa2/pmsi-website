export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

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
  proposalAvailable: boolean;
  proposalNote?: string;
  publicationVisibility: boolean;
}

export const projectsData: Project[] = [
  // UPCOMING PROJECTS — FUNDING REQUIRED
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
  {
    id: 'PMSI-PRJ-02',
    slug: 'education-scholarships-marginalized-children',
    title: 'Education Access & Scholarship Support for Marginalized Children',
    category: 'Education & Child Welfare',
    status: 'upcoming',
    summary:
      'A targeted scholarship initiative to eliminate financial barriers to schooling, provide learning materials, and ensure impoverished minority youth can remain enrolled in accredited education.',
    description:
      'Children from marginalized religious minorities and informal labor families confront extraordinarily high drop-out rates due to extreme poverty, child labor pressures, and social stigmatization. This proposed project seeks funding to sponsor tuition fees, school uniforms, textbooks, and after-school academic tutoring for vulnerable students to break the cycle of intergenerational poverty.',
    location: 'Punjab & Urban Fringe Settlements',
    communityBeneficiary:
      'Disadvantaged minority youth, out-of-school children of brick kiln laborers, and marginalized students at risk of drop-out.',
    humanitarianBackground:
      'Education is the single most effective vehicle for social mobility and dignity. When impoverished families cannot afford basic educational expenses, children are forced into premature manual labor. Structured academic sponsorships safeguard children from exploitation and secure their educational future.',
    objectives: [
      'Sponsor educational costs for disadvantaged minority children across primary and middle school levels.',
      'Provide essential learning supplies, including stationery, school uniforms, and certified textbooks.',
      'Establish community after-school learning sessions to support academic retention and literacy.',
      'Engage school administrations to ensure safe, inclusive, and non-discriminatory learning environments.',
    ],
    activities: [
      'Identifying out-of-school and at-risk minority children through grassroots community consultations.',
      'Facilitating admissions and direct tuition disbursements to accredited private and semi-government partner schools.',
      'Conducting seasonal distribution of learning hampers and seasonal school supplies.',
      'Monitoring student attendance and academic progress with quarterly guardian evaluations.',
    ],
    expectedOutcomes: [
      'Guaranteed continuous schooling for sponsored students, shielding them from exploitative child labor.',
      'Measurable gains in literacy, numeracy, and educational confidence among marginalized youth.',
      'Strengthened parental commitment to long-term child education.',
    ],
    fundingRequired: true,
    fundingRequirement: 'Budget Under Development',
    proposalAvailable: false,
    proposalNote: 'Modular per-child sponsorship frameworks prepared for bilateral foundation review.',
    publicationVisibility: true,
  },
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

  // COMPLETED & ONGOING PROJECTS
  // In strict compliance with PMSI truthfulness standards, since PMSI is currently in its establishing phase
  // and no historical completed projects or active operational projects have been certified/supplied by the
  // organization owner, these categories are maintained transparently empty. This triggers the professional
  // neutral empty state on the public website without inventing fake achievements or statistics.
];

export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projectsData.filter((p) => p.status === status && p.publicationVisibility);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
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

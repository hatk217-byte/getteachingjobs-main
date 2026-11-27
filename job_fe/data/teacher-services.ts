export interface ServiceFaq {
  q: string
  a: string
}

export interface ServiceComparisonTableRow {
  type: string
  duration: string
  note: string
}

export interface ServiceComparisonTable {
  title: string
  headers?: string[]
  rows: ServiceComparisonTableRow[]
  notes?: string[]
}

export interface ServiceDetail {
  slug: string
  num: string
  title: string
  shortTitle: string
  tagline: string
  badge: string
  topBanner?: string
  heroDesc: string
  turnaroundTime: string
  turnaroundNote?: string
  successRate?: string
  feeMetric?: string
  comparisonTable?: ServiceComparisonTable
  timelineNote?: string
  documentGroups?: {
    category: string
    docs: string[]
  }[]
  docsNote?: string
  targetAudience: string[]
  keyDeliverables: {
    title: string
    desc: string
  }[]
  requiredDocuments: string[]
  processSteps: {
    step: string
    title: string
    desc: string
  }[]
  faqs: ServiceFaq[]
  ctaButtonText: string
}

export const TEACHER_SERVICES: Record<string, ServiceDetail> = {
  'job-placement': {
    slug: 'job-placement',
    num: '01',
    title: 'Job Placement & Center/School Matching',
    shortTitle: 'Job Placement',
    tagline: 'Direct connections with verified English centers, bilingual, and international schools across Vietnam with 0% agent fee.',
    heroDesc: 'Find teaching jobs in Hanoi, Ho Chi Minh City, Da Nang, and other cities. You sign a contract directly with the center/school, not with GetTeachingJobs. We never take a percentage of your salary.',
    turnaroundTime: '2–4 business days',
    turnaroundNote: 'We usually send your profile to centers/schools within this window. The center/school decides when to interview you.',
    comparisonTable: {
      title: 'Center & School Types & Requirements at a Glance',
      headers: ['Center/School Type', 'Requirements', 'Pay & Workload'],
      rows: [
        {
          type: 'Language center',
          duration: 'Degree and teaching certificate',
          note: 'Usually lower pay, more hours.',
        },
        {
          type: 'Bilingual school',
          duration: 'Degree, teaching certificate, and experience',
          note: 'Usually higher pay.',
        },
        {
          type: 'International school',
          duration: 'Degree, teaching license, and experience',
          note: 'Usually highest pay, and the hardest to enter.',
        },
      ],
      notes: [
        'Teacher expenses: You pay for your own Apostille, translation, health check, and visa fees, unless your center/school agrees to pay them. These are separate from job placement.',
        'Preferences: Tell us your city, your age group, and your minimum salary. We will only send you jobs that match.',
      ],
    },
    targetAudience: [
      'Native English teachers (US, UK, CA, AU, NZ, SA, IE)',
      'Filipino teachers with a degree and a teaching certificate. A PRC license can help with some centers/schools, but it is not required.',
      'Non-native English teachers with proof of English level, for example IELTS 6.5',
      'Subject teachers (Math, Science, IB, Cambridge curriculum)',
    ],
    keyDeliverables: [
      {
        title: 'Direct Center/School Contracts (0% Deductions)',
        desc: 'You sign directly with the center/school or educational institution, not with GetTeachingJobs. We do not operate as an umbrella agency taking monthly cuts from your paycheck.',
      },
      {
        title: 'Pre-vetted Salary & Benefits Packages',
        desc: 'We check the pay, leave, housing, and visa sponsorship in each offer before we send it to you.',
      },
      {
        title: 'Interview & Demo Lesson Prep',
        desc: 'Guidance on Vietnamese center and school interview expectations, demo lesson formats, and teaching philosophy alignment.',
      },
      {
        title: 'Draft Contract Review',
        desc: 'We review the draft contract and flag common issues, such as work hours, overtime, notice period, and tax. You should also check it yourself before you sign.',
      },
    ],
    requiredDocuments: [
      'Updated CV / Resume tailored for international teaching',
      'Passport valid for at least 6 months. Longer is better for a long contract.',
      'University Degree (Bachelor or higher)',
      'Teaching certificate, usually TEFL / TESOL 120 hours, CELTA, or PGCE. We check your certificate first.',
    ],
    docsNote: 'Clear scans are enough for the first check.',
    processSteps: [
      {
        step: '01',
        title: 'Profile & Goal Review',
        desc: 'Tell us your city, your age group, and your minimum salary. We will only send you jobs that match.',
      },
      {
        step: '02',
        title: 'Center & School Introductions & Interviews',
        desc: 'We submit your profile to centers/schools and arrange interviews. Some centers/schools ask for a short video. We will tell you if your center/school needs one.',
      },
      {
        step: '03',
        title: 'Offer Review & Verification',
        desc: 'We review the draft contract and flag common issues, such as work hours, overtime, notice period, and tax. You should also check it yourself before you sign.',
      },
      {
        step: '04',
        title: 'Visa & Work Permit Handover',
        desc: 'After you sign, we help you start the visa and Work Permit process with your center/school.',
      },
    ],
    faqs: [
      {
        q: 'Why is there 0% agent fee for teachers?',
        a: 'Partner centers/schools pay our placement fee upon successful recruitment. You sign a contract directly with the center/school, not with GetTeachingJobs. We never charge teachers a single dollar from their agreed contract salary.',
      },
      {
        q: 'Can I apply while still outside Vietnam?',
        a: 'Yes, absolutely. In fact, securing your center/school offer before arriving in Vietnam is the recommended approach so the center/school can sponsor your entry. A DN1 visa lets you enter Vietnam to work with the center/school. It does NOT let you teach or get paid work. You need a Work Permit and an LD visa first.',
      },
      {
        q: 'What is the average teaching salary in Vietnam?',
        a: 'As a guide only. Full-time English teachers in language centers often earn around USD 1,200 to USD 2,000 a month. Bilingual and international schools can pay more. Your pay depends on your center/school, hours, and contract. Always check if a quoted range is gross or net, and if it includes housing.',
      },
      {
        q: 'Do I need a degree to teach in Vietnam?',
        a: "In most cases, yes. You usually need a bachelor's degree and a teaching certificate for a Work Permit.",
      },
      {
        q: 'Can I apply if I am already in Vietnam on a tourist visa?',
        a: 'Yes, you can apply for a job. But you cannot work until you have a Work Permit and an LD visa.',
      },
    ],
    ctaButtonText: 'Request Center/School Matching',
  },

  'visa-service': {
    slug: 'visa-service',
    num: '02',
    title: 'Vietnam Visa Service',
    shortTitle: 'Visa Service',
    tagline: 'DN1 business sponsorship letters, visa advice, and legal change to LD visa when you qualify.',
    badge: 'Legal & Compliant',
    heroDesc: 'Clear, legal visa support for international teachers in Vietnam. An e-visa cannot be extended in Vietnam. You need a new visa, or a change to LD if you qualify. We guide you through each step cleanly.',
    turnaroundTime: 'Up to 5 working days',
    successRate: 'Official Immigration Compliance',
    feeMetric: 'Separately listed quotes',
    comparisonTable: {
      title: 'Vietnam Visa Types at a Glance',
      rows: [
        {
          type: 'E-visa',
          duration: '90 days',
          note: 'Travel / meetings, no work.',
        },
        {
          type: 'DN1',
          duration: 'Up to 12 months',
          note: 'Work with a company in Vietnam, no paid work.',
        },
        {
          type: 'LD1 / LD2',
          duration: 'Up to 2 years',
          note: 'Work after a Work Permit or exemption.',
        },
      ],
      notes: [
        'Work Permit first, then LD visa, then TRC.',
        'An e-visa cannot be extended in Vietnam. You need a new visa, or a change to LD if you qualify.',
        'Dependents usually use a TT visa, not a DN1 visa.',
        'Government fees are paid to the government. Our service fee is paid to GetTeachingJobs. You see the quote before we submit anything.',
      ],
    },
    targetAudience: [
      'Teachers preparing to travel to Vietnam for a new school contract',
      'Teachers currently on tourist e-visas with a school offer',
      'Teachers changing schools who hold a Work Permit or exemption',
      'Spouses and dependents of international educators (TT visa)',
    ],
    keyDeliverables: [
      {
        title: 'DN1 Business Visa Approval Letters',
        desc: 'DN1 is for meetings and business with a company in Vietnam, up to 12 months. DN1 does not allow paid work. Processing usually takes up to 5 working days.',
      },
      {
        title: 'Change of Visa Purpose to LD (Work)',
        desc: 'A teacher can change visa purpose in Vietnam only if they entered on an e-visa and already hold a Work Permit or a Work Permit exemption. Work Permit first, then LD visa, then TRC.',
      },
      {
        title: 'Emergency Fast-Track Guidance',
        desc: 'Clear assistance when your flight dates or school start dates are close.',
      },
      {
        title: 'Overstay Resolution (Decree 282/2025)',
        desc: 'Contact us before your visa expires. Under Decree 282/2025, from 15 December 2025, an overstay under 16 days is fined VND 500,000 - 2,000,000. From 16 days, the fine is VND 5,000,000 - 10,000,000 and deportation is possible.',
      },
    ],
    requiredDocuments: [
      'Passport valid for at least 6 months with at least 2 blank pages',
      'Recent photo (4x6 cm, white background, no glasses)',
      'School sponsorship agreement or license details from your verified school in Vietnam',
      'Current Vietnam entry stamp or e-visa (if you are already inside Vietnam)',
    ],
    docsNote: 'Clear scans are enough for the first check.',
    processSteps: [
      {
        step: '01',
        title: 'Initial Case Review',
        desc: 'We check your passport validity, current visa status, and school documents. Clear scans are enough for the first check.',
      },
      {
        step: '02',
        title: 'Dossier Preparation & Submission',
        desc: 'We prepare the required forms with your sponsoring school and submit to the Vietnam Immigration Department.',
      },
      {
        step: '03',
        title: 'Approval Letter Issuance',
        desc: 'You receive the official immigration approval letter with barcode verification, usually within 5 working days.',
      },
      {
        step: '04',
        title: 'Visa Stamping & Next Steps',
        desc: 'Pick up your visa stamp at the airport or immigration office. Then proceed to your Work Permit and LD visa.',
      },
    ],
    faqs: [
      {
        q: 'Can I teach on a 90-day tourist e-visa?',
        a: 'No. A 90-day tourist e-visa does not allow teaching. You can use it to enter Vietnam, attend interviews, and sign a contract. Work Permit first, then change to LD1 / LD2, then teach. A teacher can change visa purpose in Vietnam only if they entered on an e-visa and already hold a Work Permit or a Work Permit exemption.',
      },
      {
        q: 'What is a DN1 visa?',
        a: 'DN1 is for foreigners who work with a company or organisation in Vietnam, up to 12 months. DN1 does NOT allow paid work. It is for meetings and business. To work, a teacher needs a Work Permit first, then an LD1 / LD2 visa, up to 2 years.',
      },
      {
        q: 'Can I extend my e-visa in Vietnam?',
        a: 'No. An e-visa cannot be extended in Vietnam. You need a new visa, or a change to LD if you qualify.',
      },
      {
        q: 'Can I work on a DN1 visa?',
        a: 'No. You need a Work Permit and an LD visa.',
      },
      {
        q: 'Can I change my visa status without leaving Vietnam?',
        a: 'An e-visa cannot be extended in Vietnam. An expired e-visa or an overstay cannot be converted. A teacher can change visa purpose in Vietnam only if they entered on an e-visa and already hold a Work Permit or a Work Permit exemption.',
      },
    ],
    ctaButtonText: 'Check my visa case',
  },

  'consular-legalization': {
    slug: 'consular-legalization',
    num: '03',
    title: 'Apostille & Consular Legalization',
    shortTitle: 'Legalization',
    tagline: 'Apostille certification and certified translations recognized across Vietnam.',
    badge: 'Hague Apostille Ready',
    heroDesc: 'Under Decree 293/2026, Vietnam is a party to the Hague Apostille Convention. A public document with a valid Apostille from a member country is accepted without consular legalization at a Vietnamese embassy. We verify which route applies to your country and handle certified translations end-to-end.',
    turnaroundTime: 'We give you a timeline after the pre-check. It depends on your country and document.',
    successRate: 'We check your documents first',
    feeMetric: 'Separately listed quotes',
    comparisonTable: {
      title: 'Apostille vs Consular Legalization at a Glance',
      headers: ['Route', 'Applies To', 'How It Works'],
      rows: [
        {
          type: 'Apostille',
          duration: 'For most countries',
          note: 'One stamp in your home country. No embassy legalization.',
        },
        {
          type: 'Consular legalization',
          duration: 'For Germany, Austria, the Czech Republic, and countries outside the Convention',
          note: 'This route uses your home authority and a Vietnamese embassy or consulate.',
        },
      ],
      notes: [
        'An Apostille must be done in the country where your document was issued. You usually do not need to fly back. We help arrange it from Vietnam, but we need a clear scan first.',
        'An Apostille does not check if your document is true in content. It only confirms the signature and stamp. It does not replace a translation, and it does not guarantee a Work Permit.',
        'Government fees and our service fee are listed separately in your quote.',
      ],
    },
    targetAudience: [
      'Teachers with a degree from any country. We check the route for your country.',
      'Teachers needing TEFL, TESOL, CELTA, or teaching certificate verification',
      'Educators with foreign home-country police clearances (issued within 6 months of submission)',
      'Teachers already in Vietnam who need home-country Apostille or consular guidance',
    ],
    keyDeliverables: [
      {
        title: 'Apostille & Consular Legalization Routing',
        desc: 'We verify whether your home country falls under the Hague Apostille Convention or requires traditional consular legalization.',
      },
      {
        title: 'Home-Country Apostille Assistance',
        desc: 'Guidance and processing for authenticating your educational degrees and police checks in the country of issue.',
      },
      {
        title: 'Certified Vietnamese Translation',
        desc: 'Certified Vietnamese translation used with your Apostille or legalized document.',
      },
      {
        title: 'Route & Exemption Verification',
        desc: 'We check if your document needs an Apostille, consular legalization, or neither.',
      },
    ],
    requiredDocuments: [
      'University degree: Send a clear scan first. We will tell you if you need an original, a certified copy, or a notary step.',
      'TEFL / TESOL / CELTA certificate',
      'Home country police clearance (must be issued within 6 months of submission)',
      'Passport photo page scan',
    ],
    docsNote: 'We help with degrees, TEFL / TESOL / CELTA certificates, and police clearances. If you have another document, send a scan and we will check it. Clear scans are enough for the first check.',
    processSteps: [
      {
        step: '01',
        title: 'Document Pre-check',
        desc: 'We check what your document needs first.',
      },
      {
        step: '02',
        title: 'Apostille in your home country',
        desc: 'Authentication by the designated competent authority where the document was issued (such as the UK FCDO, a US Secretary of State, or equivalent home government body).',
      },
      {
        step: '03',
        title: 'Vietnam MOFA Legalization (Consular Route Only)',
        desc: 'Only if your country needs consular legalization (non-Convention countries or exceptions). After an Apostille from a member country, you do NOT need MOFA stamping.',
      },
      {
        step: '04',
        title: 'Certified Vietnamese translation',
        desc: 'The translation must be certified, then used with the Apostille or legalized document.',
      },
    ],
    faqs: [
      {
        q: 'Do I need an Apostille or consular legalization?',
        a: 'It depends on your country. We check it for you after you send a scan.',
      },
      {
        q: 'Can I do an Apostille in Vietnam?',
        a: 'No. It must be done in the country where your document was issued.',
      },
      {
        q: 'Do I have to surrender my original physical diploma?',
        a: 'In most cases, a certified copy can be legalized. You keep your original.',
      },
      {
        q: 'Is a 120-hour online TEFL certificate acceptable?',
        a: 'Often yes, if it can be verified and notarized in the issuing country. We check your certificate first.',
      },
      {
        q: 'How long does a police check remain valid for Vietnam work permits?',
        a: 'Police clearance must be issued within 6 months of submission.',
      },
    ],
    ctaButtonText: 'Start Legalization Review',
  },

  'coe-support': {
    slug: 'coe-support',
    num: '04',
    title: 'DMW and OEC Support for Filipino Teachers',
    shortTitle: 'DMW & OEC Support',
    tagline: 'Certificate of Employment (COE), DMW compliance, and OEC / OFW Pass exit clearance for Filipino teachers.',
    badge: 'Specialized Roadmap',
    heroDesc: 'Certificate of Employment (COE) and DMW exit clearance guidance for Filipino teachers. Filipino teachers face extra pre-departure checks in the Philippines. DMW is the agency that took over from the former POEA. A teacher leaving as a tourist while planning to work can be stopped at the airport; a tourist itinerary does not replace employment documents. We help you prepare the right documents, so you have less risk of being stopped.',
    turnaroundTime: 'We give you a timeline after the pre-check. It depends on your documents.',
    successRate: 'We check your documents first',
    feeMetric: 'Separately listed quotes',
    comparisonTable: {
      title: 'DMW Exit Clearance Rules at a Glance',
      headers: ['Situation', 'Exit Requirement', 'Rule'],
      rows: [
        {
          type: 'First time in Vietnam',
          duration: 'Verified contract, DMW direct-hire or agency process, and OEC / OFW Pass',
          note: 'This takes time. Do not fly as a tourist to work.',
        },
        {
          type: 'Returning to the same school in Vietnam',
          duration: 'OFW Travel Pass on eGovPH',
          note: 'Valid for 90 days if your DMW record matches.',
        },
        {
          type: 'Changed school or job',
          duration: 'New DMW review',
          note: 'The Travel Pass does not apply.',
        },
      ],
      notes: [
        'Document order: School certified copy, then CHED CAV, then DFA Apostille, then certified Vietnamese translation.',
        'Your Philippine NBI clearance is for your Vietnam Work Permit file. It must be issued within 6 months, and it also needs a DFA Apostille.',
        'If you are a school in Vietnam, you must hire through a DMW-licensed agency or an approved direct-hire route. A contract alone does not let a teacher leave the Philippines.',
        'Under DMW Circular No. 02, Series of 2023, the OEC was renamed OFW Clearance, also known as the OFW Pass. In 2025, the DMW also started the OFW Travel Pass for returning workers to the same employer and destination (valid for 90 days). First-time teachers do NOT use the Travel Pass.',
        'Government fees and our service fee are listed separately in your quote.',
      ],
    },
    targetAudience: [
      'Filipino teachers with a degree and a teaching certificate, with or without a PRC license. We check your case first.',
      'Teachers currently in the Philippines preparing for departure at NAIA / Clark / Cebu',
      'Filipino teachers currently in Vietnam needing contract regularization',
      'Schools in Vietnam looking to hire and sponsor Filipino education talent legally',
    ],
    keyDeliverables: [
      {
        title: 'Verified School Employment Contract Review',
        desc: 'Ensuring your contract includes mandatory clauses required for Philippine overseas employment compliance.',
      },
      {
        title: 'Reduce Airport Offloading Risk',
        desc: 'We help you prepare the right documents, so you have less risk of being stopped.',
      },
      {
        title: 'CAV / DFA Guidance',
        desc: 'Guidance on getting CAV (Certification, Authentication and Verification) from CHED for your college degree, followed by DFA Apostille.',
      },
      {
        title: 'DMW Compliance & Exit Clearance',
        desc: 'Direct hiring is restricted under Philippine law, except through authorized entities or recognized exceptions. A first-time OFW hired directly normally goes through DMW POPS-Direct, uploads documents, and waits for evaluation. It is not instant. We guide you through the requirements and steps.',
      },
    ],
    requiredDocuments: [
      'Passport valid for at least 6 months. Longer is better for a long contract. We check your passport first.',
      'Bachelor’s / Master’s Degree with TOR (Transcript of Records)',
      'Signed School Employment Contract in Vietnam',
      'Flight itinerary: Do not book a non-refundable flight until your exit clearance is ready.',
      'PRC Teacher License (if applicable) & Board Rating (not required for a Vietnam Work Permit)',
    ],
    docsNote: 'Send a clear scan first. We check your documents first. Clear scans are enough for the first check.',
    processSteps: [
      {
        step: '01',
        title: 'Contract & School Verification',
        desc: 'We verify that the hiring school in Vietnam has legitimate sponsorship capacity and proper legal representation.',
      },
      {
        step: '02',
        title: 'Document Assembly & DFA Apostille',
        desc: 'The order is: certified copy from your school, then CAV from CHED, then DFA Apostille. The DFA does not check your school; CHED does that first.',
      },
      {
        step: '03',
        title: 'DMW Exit Clearance & Departure Readiness',
        desc: 'Guidance on DMW requirements and border control expectations so you have the right documents before going to the airport.',
      },
      {
        step: '04',
        title: 'Arrival in Vietnam & Onboarding',
        desc: 'Airport reception guidance, certified Vietnamese translations, and transition into your Work Permit processing.',
      },
    ],
    faqs: [
      {
        q: 'Why are Filipino teachers frequently offloaded at NAIA?',
        a: 'The Philippine Bureau of Immigration strictly guards against illegal recruitment and human trafficking. A teacher leaving as a tourist while planning to work can be stopped at the airport. A tourist itinerary does not replace employment documents.',
      },
      {
        q: 'Can I leave the Philippines on a tourist visa and start work in Vietnam?',
        a: 'No. If you plan to work, you need DMW exit clearance first. A tourist visa does not cover work.',
      },
      {
        q: 'I was offloaded before. Can I fly again?',
        a: 'Often yes, after you fix the missing document and get the right clearance. Send us the reason you were given at the airport, and we will check it.',
      },
      {
        q: 'Do I need a PRC license to teach in Vietnam?',
        a: 'A PRC license can help with some schools, but it is not required for a Vietnam Work Permit. For language centres, an English-related degree with a 120-hour TEFL is usually accepted.',
      },
      {
        q: 'Can GetTeachingJobs assist while I am still in Manila or Cebu?',
        a: 'Yes. We work with you on WhatsApp or Zalo while you are in Manila or Cebu.',
      },
    ],
    ctaButtonText: 'Get Filipino Teacher Guidance',
  },

  'work-permit-trc': {
    slug: 'work-permit-trc',
    num: '05',
    title: 'Work Permit & TRC Residence Cards',
    shortTitle: 'Work Permit & TRC',
    tagline: 'Preparation for foreign teaching permits and long-term 1–2 year residence cards with zero border runs.',
    badge: '1–2 Year Stay',
    topBanner: 'Your employer files the Work Permit. You cannot apply alone. We help you and your school prepare the file.',
    heroDesc: 'A Work Permit lets you work legally. A TRC lets you live in Vietnam without a visa run. With a TRC, you can enter and leave Vietnam multiple times without a new visa.',
    turnaroundTime: '10 working days for the Work Permit decision, after a complete file. We give you a full timeline after the pre-check.',
    feeMetric: 'Separately listed quotes',
    comparisonTable: {
      title: 'Order of Steps at a Glance',
      headers: ['Step', 'Permit / Document', 'Duration & Details'],
      rows: [
        {
          type: 'Step 1',
          duration: 'Work Permit',
          note: 'Up to 2 years, filed by your employer.',
        },
        {
          type: 'Step 2',
          duration: 'LD1 / LD2 visa',
          note: 'Up to 2 years.',
        },
        {
          type: 'Step 3',
          duration: 'TRC',
          note: '1 to 2 years, multiple entry.',
        },
      ],
      notes: [
        'Timing: Start at least 6 to 8 weeks before your start date or before your current permit expires. Your degree Apostille and police clearance take the longest time.',
        'Changing schools: If you change school or employer, you need a new Work Permit. Your old permit does not move with you.',
        'Dependents: Your spouse and children get a TRC based on your TRC. It does not last longer than yours.',
      ],
    },
    timelineNote: 'Start at least 6 to 8 weeks before your start date or before your current permit expires. Your degree Apostille and police clearance take the longest time.',
    targetAudience: [
      'Full-time teachers signed with licensed schools or English centers in Vietnam',
      'Teachers whose current Work Permit is nearing expiration (start at least 6 to 8 weeks early)',
      'Teachers changing school or employer needing a new Work Permit (old permit does not move with you)',
      'Educators wishing to sponsor spouses and children for a TT visa / TRC',
      'School administrators seeking compliant dossier preparation for foreign teaching staff',
    ],
    keyDeliverables: [
      {
        title: 'Integrated Labour Need & Work Permit Filing (Form 03)',
        desc: 'Under Decree 219, the labour demand explanation is now integrated into the Work Permit dossier, Form 03. It is not a separate approval file. Your employer files one dossier, including the labour need and the Work Permit request.',
      },
      {
        title: 'Work Permit Application & Decision (Up to 2 Years)',
        desc: 'The work permit authority is the Provincial People\'s Committee, through the Department of Home Affairs. Permits are issued for up to 2 years, based on your contract.',
      },
      {
        title: 'Work Permit Exemption Check',
        desc: 'We check if you qualify for an exemption. Decree 219 will be replaced by Decree 393 from 5 December 2026, but the core rules stay the same: provincial People\'s Committees as the authority, a maximum two-year term with one extension.',
      },
      {
        title: 'TRC Card Issuance (1 to 2 Years)',
        desc: 'Immigration Department submission for your physical TRC card (1 to 2 years, based on your Work Permit), allowing multiple entries without a new visa.',
      },
    ],
    requiredDocuments: [
      'Valid passport and current legal Vietnam visa / entry stamp',
      'Apostilled or legalized degree and teaching certificate, plus a certified Vietnamese translation',
      'Police clearance: If you just arrived, use a police clearance from your home country. If you have lived in Vietnam, use a Vietnam Police Check No. 1. Both must be issued within 6 months.',
      'Health check certificate from an approved hospital in Vietnam (usually valid for 12 months)',
      'Signed employment contract with your sponsoring school or employer',
    ],
    docsNote: 'Clear scans are enough for the first check.',
    processSteps: [
      {
        step: '01',
        title: 'Eligibility & Document Pre-Check',
        desc: 'We audit and pre-check your legalized documents, translations, health check, and police clearance. Clear scans are enough for the first check.',
      },
      {
        step: '02',
        title: 'Work Permit Filing & Decision',
        desc: 'Your employer files one integrated dossier with the Provincial People\'s Committee, through the Department of Home Affairs. The Work Permit decision is 10 working days from a complete file. Issued for up to 2 years, based on your contract.',
      },
      {
        step: '03',
        title: 'LD1 / LD2 Visa Issuance',
        desc: 'Convert to or apply for an LD1 or LD2 visa (up to 2 years) based on your approved Work Permit. A TRC is issued only to LD1, LD2, and TT visa holders.',
      },
      {
        step: '04',
        title: 'TRC Card Issuance',
        desc: 'Submit the dossier to the Immigration Department for physical TRC Card Issuance (1 to 2 years, based on your Work Permit).',
      },
    ],
    faqs: [
      {
        q: 'Where do I take the required health check in Vietnam?',
        a: 'At an approved hospital in Vietnam. We will tell you the nearest approved hospital for your case. A health check from abroad is accepted only if Vietnam has a mutual recognition agreement with that country. (A health check certificate is usually valid for 12 months.)',
      },
      {
        q: 'How long is a Work Permit valid for and can it be extended?',
        a: 'A Work Permit lasts up to 2 years, based on your employment contract. A Work Permit can be extended only once, for up to 2 years. After that, your employer must apply for a new permit.',
      },
      {
        q: 'Can I work while my Work Permit is still being processed?',
        a: 'No. You can only work after your Work Permit is issued.',
      },
      {
        q: 'Can my spouse and children get a TRC?',
        a: 'Yes, if you are legally married and your children are under 18. They use a TT visa / TRC, based on your TRC. You need a legalized marriage certificate and birth certificate. Your spouse and children get a TRC based on your TRC. It does not last longer than yours.',
      },
      {
        q: 'What happens if I change schools or employers?',
        a: 'If you change school or employer, you need a new Work Permit. Your old permit does not move with you.',
      },
    ],
    ctaButtonText: 'Check Work Permit Eligibility',
  },

  'other-supports': {
    slug: 'other-supports',
    num: '06',
    title: 'Relocation & Local Settlement Support',
    shortTitle: 'Relocation Support',
    tagline: 'Police clearance certificates, temporary residence registration, and settlement logistics.',
    badge: 'On-Demand Support',
    heroDesc: 'We help with Police Checks, residence registration, bank accounts, and apartment leases.',
    turnaroundTime: 'Police Check: 10 to 15 days. Residence registration: same day, if your landlord declares it on time. Bank account: depends on the bank.',
    feeMetric: 'Separately listed quotes',
    comparisonTable: {
      title: 'Settlement & Support Services at a Glance',
      headers: ['Service', 'Details & Government Fee', 'Timeline & Rule'],
      rows: [
        {
          type: 'Vietnam Police Check No. 1',
          duration: 'For a Work Permit, after you lived in Vietnam. Government fee VND 200,000 per person.',
          note: '10 to 15 days.',
        },
        {
          type: 'Residence registration',
          duration: 'Your landlord declares your stay as soon as you arrive.',
          note: 'Same day (keep the confirmation).',
        },
        {
          type: 'Bank account',
          duration: 'We help you prepare the documents.',
          note: 'The bank decides.',
        },
        {
          type: 'Apartment lease',
          duration: 'We review the deposit, notice period, and utility terms.',
          note: 'Before you sign.',
        },
      ],
      notes: [
        'Police Check No. 1 vs No. 2: No. 1 is the standard version for a Work Permit. It shows only unexpunged convictions. No. 2 is the full version. Most Work Permit files need No. 1 only.',
        'Validity: A Police Check must be issued within 6 months of your Work Permit submission. Do not apply too early.',
        'Moving between cities: When you move, register your new address first. Your TRC and Police Check use your current address.',
      ],
    },
    timelineNote: 'A Police Check must be issued within 6 months of your Work Permit submission. Do not apply too early.',
    targetAudience: [
      'Teachers who have lived in Vietnam and need a Vietnam Police Check for a Work Permit or TRC',
      'Newly arriving teachers needing landlord electronic residence registration guidance',
      'Teachers needing document preparation for a Vietnamese bank account',
      'Teachers relocating between cities (e.g. Hanoi, Da Nang, HCMC) needing to register a new address',
    ],
    keyDeliverables: [
      {
        title: 'Vietnam Police Check No. 1',
        desc: 'From 1 March 2025, criminal record certificates moved from the Ministry of Justice to the Ministry of Public Security. A foreigner with a TRC applies at the Provincial Police, under the Ministry of Public Security, where they live.',
      },
      {
        title: 'Temporary Residence Registration Guidance',
        desc: 'Your landlord or hotel must declare your stay as soon as you arrive on the Ministry of Public Security electronic system. We verify your registration record is valid for your TRC or Police Check.',
      },
      {
        title: 'Local Bank Account Guidance',
        desc: 'We help you prepare the documents for a bank account. The bank makes the final decision, based on your visa, TRC, and its own rules.',
      },
      {
        title: 'Apartment Lease Review',
        desc: 'We review the deposit, notice period, and utility terms before you sign.',
      },
    ],
    documentGroups: [
      {
        category: 'For a Police Check',
        docs: [
          'Passport',
          'TRC or visa',
          'Temporary residence registration confirmation',
        ],
      },
      {
        category: 'For residence registration',
        docs: [
          'Passport',
          'Rental contract',
          'Landlord contact information',
        ],
      },
      {
        category: 'For a bank account',
        docs: [
          'Passport',
          'Visa or TRC',
          'School employment letter (if the bank asks for it)',
        ],
      },
    ],
    requiredDocuments: [
      'For a Police Check: Passport, TRC or visa, temporary residence registration.',
      'For residence registration: Passport, rental contract, landlord contact.',
      'For a bank account: Passport, visa or TRC, school employment letter if the bank asks for it.',
    ],
    docsNote: 'Clear scans are enough for the first check.',
    processSteps: [
      {
        step: '01',
        title: 'Needs Assessment',
        desc: 'Identify the specific administrative or settlement task you need solved.',
      },
      {
        step: '02',
        title: 'Document Collection & Verification',
        desc: 'We verify your passport, lease, or registration records. Clear scans are enough for the first check.',
      },
      {
        step: '03',
        title: 'Authority Processing & Provincial Police',
        desc: 'Applications are submitted to the Provincial Police, under the Ministry of Public Security, online portals, or banks.',
      },
      {
        step: '04',
        title: 'Document Handover & Confirmation',
        desc: 'We check your completed certificates and confirmations and hand them over safely.',
      },
    ],
    faqs: [
      {
        q: 'Why do I need a Vietnam Police Check?',
        a: 'If you have lived in Vietnam, your Work Permit file may need a Vietnam Police Check No. 1 instead of, or as well as, your home-country check. We check your case first.',
      },
      {
        q: 'Do I need a Vietnam Police Check or a home-country check?',
        a: 'It depends on where you lived. If you just arrived, use your home-country check. If you lived in Vietnam, you may need a Vietnam check. Send us your dates, and we will check.',
      },
      {
        q: 'Can GetTeachingJobs file for my Police Check on my behalf?',
        a: 'In some cases, we can file for you with a power of attorney. We check if this is allowed for your case first. Online filing often needs a Level 2 VNeID account.',
      },
      {
        q: 'Is temporary residence registration mandatory?',
        a: 'Your landlord or hotel must declare your stay as soon as you arrive. You do not do this alone at the ward police. If your stay is not declared, your landlord can be fined, and your TRC or Police Check can be delayed because you have no residence record.',
      },
      {
        q: 'I moved to a new city. Do I need to register again?',
        a: 'Yes. Your landlord must declare your new address as soon as you move in. Keep the new confirmation for your TRC file. When you move, register your new address first. Your TRC and Police Check use your current address.',
      },
    ],
    ctaButtonText: 'Inquire Local Support',
  },
}

export const domains = [
  {
    title: 'Markets & competition',
    summary: 'Demand signals, category shifts, pricing pressure, and competitor movement.',
    signal: 'MKT',
    accent: 'blue'
  },
  {
    title: 'Technology & AI',
    summary: 'Adoption curves, governance readiness, product-market evidence, and risk mapping.',
    signal: 'AIX',
    accent: 'violet'
  },
  {
    title: 'Policy & public systems',
    summary: 'Population needs, program performance, regulation, stakeholder sentiment, and trust.',
    signal: 'POL',
    accent: 'green'
  },
  {
    title: 'Health & behavior',
    summary: 'Service journeys, patient and consumer behavior, access barriers, and outcomes.',
    signal: 'HLT',
    accent: 'red'
  },
  {
    title: 'Sustainability & infrastructure',
    summary: 'Climate exposure, community resilience, built systems, and transition economics.',
    signal: 'ENV',
    accent: 'teal'
  },
  {
    title: 'Consumer culture',
    summary: 'Ethnography, language, attention, media habits, and brand meaning in context.',
    signal: 'CUL',
    accent: 'amber'
  }
];

export const researchItems = [
  {
    id: 'r01',
    title: 'AI Adoption Decision Map',
    finding: 'Teams with explicit evidence thresholds adopted AI pilots 31% faster than teams using open-ended experimentation.',
    topic: 'Technology & AI',
    method: 'Mixed methods',
    type: 'Report',
    audience: 'Executives',
    date: '2026-05-12',
    readTime: '18 min',
    author: 'Deep Wave Systems Lab',
    tags: ['AI governance', 'workflow', 'risk'],
    confidence: 'High',
    href: '#sample-report'
  },
  {
    id: 'r02',
    title: 'Coastal Infrastructure Risk Index',
    finding: 'Municipal decision-makers need localized confidence bands more than broad climate scenarios.',
    topic: 'Sustainability & infrastructure',
    method: 'Forecasting',
    type: 'Dataset',
    audience: 'Policy',
    date: '2026-04-28',
    readTime: '12 min',
    author: 'Infrastructure Futures Unit',
    tags: ['resilience', 'scenario planning', 'public finance'],
    confidence: 'Medium',
    href: '#sample-report'
  },
  {
    id: 'r03',
    title: 'Consumer Trust Pulse',
    finding: 'Trust is highest when brands disclose not only results, but the limits of the evidence behind them.',
    topic: 'Consumer culture',
    method: 'Panel survey',
    type: 'Brief',
    audience: 'Marketing',
    date: '2026-04-16',
    readTime: '9 min',
    author: 'Behavior & Culture Team',
    tags: ['trust', 'transparency', 'brand'],
    confidence: 'High',
    href: '#sample-report'
  },
  {
    id: 'r04',
    title: 'Service Journey: Health Equity Barriers',
    finding: 'The largest drop-off happened before intake, where language, scheduling, and transport constraints overlap.',
    topic: 'Health & behavior',
    method: 'Ethnography',
    type: 'Case study',
    audience: 'Healthcare',
    date: '2026-03-31',
    readTime: '15 min',
    author: 'Health Systems Studio',
    tags: ['equity', 'fieldwork', 'access'],
    confidence: 'Medium',
    href: '#sample-report'
  },
  {
    id: 'r05',
    title: 'Market Regime Shift Monitor',
    finding: 'Early volatility language in earnings calls preceded category budget contraction by two quarters.',
    topic: 'Markets & competition',
    method: 'Econometrics',
    type: 'Report',
    audience: 'Strategy',
    date: '2026-03-19',
    readTime: '21 min',
    author: 'Market Signals Group',
    tags: ['forecasting', 'competition', 'text analysis'],
    confidence: 'High',
    href: '#sample-report'
  },
  {
    id: 'r06',
    title: 'Public Sentiment Fieldnotes',
    finding: 'Program language performed better when it named trade-offs directly and used fewer abstractions.',
    topic: 'Policy & public systems',
    method: 'Interviews',
    type: 'Fieldnote',
    audience: 'Public sector',
    date: '2026-02-23',
    readTime: '7 min',
    author: 'Civic Research Desk',
    tags: ['policy', 'language', 'trust'],
    confidence: 'Directional',
    href: '#sample-report'
  },
  {
    id: 'r07',
    title: 'Circular Supply Signal Scan',
    finding: 'Supplier readiness clustered around incentive clarity more than technical capability.',
    topic: 'Sustainability & infrastructure',
    method: 'Network analysis',
    type: 'Brief',
    audience: 'Operations',
    date: '2026-02-05',
    readTime: '11 min',
    author: 'Infrastructure Futures Unit',
    tags: ['supply chain', 'network', 'transition'],
    confidence: 'Medium',
    href: '#sample-report'
  },
  {
    id: 'r08',
    title: 'AI Product Readiness Checklist',
    finding: 'The strongest launch predictor was not model performance, but clarity of fallback and escalation procedures.',
    topic: 'Technology & AI',
    method: 'Audit',
    type: 'Toolkit',
    audience: 'Product',
    date: '2026-01-27',
    readTime: '10 min',
    author: 'Deep Wave Systems Lab',
    tags: ['readiness', 'product', 'governance'],
    confidence: 'High',
    href: '#sample-report'
  }
];

export const methods = [
  {
    name: 'Evidence architecture',
    description: 'Translate ambiguous questions into testable hypotheses, decision thresholds, and source plans.',
    outputs: ['Research brief', 'Source map', 'Decision criteria']
  },
  {
    name: 'Quantitative modeling',
    description: 'Use surveys, panels, econometrics, forecasting, and uncertainty modeling to size signals.',
    outputs: ['Model cards', 'Confidence ranges', 'Scenario tables']
  },
  {
    name: 'Qualitative fieldwork',
    description: 'Interview, observe, and synthesize real-world behavior so models stay connected to context.',
    outputs: ['Field notes', 'Journey maps', 'Thematic analysis']
  },
  {
    name: 'Synthesis systems',
    description: 'Turn evidence into narrative, index cards, dashboards, and executive-ready decision tools.',
    outputs: ['Insight deck', 'HTML report', 'Decision workshop']
  }
];

export const proofPoints = [
  {
    label: 'Research library first',
    value: 'HTML + PDF',
    detail: 'Every major publication is represented as accessible web content, not only as a download.'
  },
  {
    label: 'Methods visible',
    value: 'Traceable',
    detail: 'Cards surface method, author, confidence, date, and audience before the click.'
  },
  {
    label: 'Evidence-grade UI',
    value: 'AA-minded',
    detail: 'High contrast, keyboard access, focus states, readable copy size, and reduced-motion support.'
  }
];

export const caseStudies = [
  {
    title: 'Launch risk reduced before go-to-market',
    sector: 'Technology',
    body: 'A product team used a readiness audit, user interviews, and error-state testing to change launch sequencing before market exposure.',
    metric: '3 decision gates clarified'
  },
  {
    title: 'Public program language made measurable',
    sector: 'Policy',
    body: 'Message testing and field interviews converted abstract policy language into clearer choices for residents and service teams.',
    metric: '5 audience segments mapped'
  },
  {
    title: 'Market signal dashboard replaced static reporting',
    sector: 'Markets',
    body: 'An executive team moved from quarterly PDF summaries to a repeatable signal library with confidence notes and update cadence.',
    metric: '2-week reporting cycle'
  }
];

export const researchers = [
  {
    name: 'Mira Chen',
    role: 'Director, Systems Research',
    note: 'Complex systems, AI governance, evidence thresholds',
    initials: 'MC'
  },
  {
    name: 'Sam Okoro',
    role: 'Lead, Quantitative Strategy',
    note: 'Forecasting, econometrics, scenario models',
    initials: 'SO'
  },
  {
    name: 'Leila Navarro',
    role: 'Principal, Field Intelligence',
    note: 'Ethnography, service journeys, cultural signals',
    initials: 'LN'
  },
  {
    name: 'Jordan Kim',
    role: 'Research Design Engineer',
    note: 'Data visualization, accessible publishing, research tooling',
    initials: 'JK'
  }
];

export const sourceNotes = [
  {
    label: 'Operational minimalism',
    text: 'The design treats the site as a governed system of type, tokens, components, and motion rather than a decorative landing page.'
  },
  {
    label: 'Restrained distinctiveness',
    text: 'The custom wave-field motif concentrates memorability into one reusable graphic behavior.'
  },
  {
    label: 'Research library as product',
    text: 'Filters, metadata, card hierarchy, and report templates make content discovery the core interaction.'
  },
  {
    label: 'Accessible by default',
    text: 'Large body type, strong focus states, no pale-gray body copy, semantic landmarks, and reduced-motion support are built in.'
  }
];

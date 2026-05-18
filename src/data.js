export const domains = [
  {
    title: 'Markets & adoption',
    summary: 'Demand curves, switching behavior, pricing confidence, and category entry points.',
    signal: 'M01',
  },
  {
    title: 'AI & work systems',
    summary: 'How organizations adopt, govern, and measure AI tools in real workflows.',
    signal: 'A14',
  },
  {
    title: 'Policy & public trust',
    summary: 'Evidence for regulators, civic teams, institutions, and public-interest programs.',
    signal: 'P09',
  },
  {
    title: 'Health & behavior',
    summary: 'Patient experience, care pathways, adherence, risk perception, and service design.',
    signal: 'H22',
  },
  {
    title: 'Climate & resilience',
    summary: 'Adaptation scenarios, stakeholder mapping, investment risk, and community impact.',
    signal: 'C07',
  },
  {
    title: 'Culture & consumers',
    summary: 'Narratives, attention, audience intelligence, brand meaning, and emerging needs.',
    signal: 'K16',
  },
];

export const research = [
  {
    id: 'signal-loss',
    title: 'Signal Loss in High-Noise Markets',
    finding: 'Decision teams improve forecast stability when they explicitly separate leading indicators, lagging evidence, and social amplification noise.',
    date: '2026-04-28',
    readingMinutes: 14,
    author: 'Maya Ellison, PhD',
    team: 'Markets & Forecasting',
    format: 'Report',
    audience: 'Executives',
    topic: 'Markets',
    method: 'Bayesian modeling',
    sector: 'Technology',
    tags: ['Forecasting', 'Market intelligence', 'Decision systems'],
    metric: '+31%',
    metricLabel: 'forecast confidence lift',
    pdf: '#',
  },
  {
    id: 'ai-workflows',
    title: 'Where AI Actually Changes Work',
    finding: 'Teams capture value from AI when the tool changes handoffs, review loops, and evidence trails—not when it only accelerates isolated tasks.',
    date: '2026-03-12',
    readingMinutes: 11,
    author: 'Noor Okafor',
    team: 'AI & Work Systems',
    format: 'Brief',
    audience: 'Operations teams',
    topic: 'AI',
    method: 'Workflow ethnography',
    sector: 'Enterprise',
    tags: ['AI adoption', 'Operations', 'Governance'],
    metric: '6.4x',
    metricLabel: 'more likely to scale',
    pdf: '#',
  },
  {
    id: 'public-trust',
    title: 'Trust Signals in Public Programs',
    finding: 'Plain-language evidence summaries, visible feedback loops, and service-level transparency reduce abandonment in public programs.',
    date: '2026-01-19',
    readingMinutes: 9,
    author: 'Iris Chen',
    team: 'Policy & Public Trust',
    format: 'Case study',
    audience: 'Public-sector leaders',
    topic: 'Policy',
    method: 'Mixed methods',
    sector: 'Government',
    tags: ['Trust', 'Service design', 'Public programs'],
    metric: '-18%',
    metricLabel: 'application drop-off',
    pdf: '#',
  },
  {
    id: 'climate-scenarios',
    title: 'Scenario Planning for Local Climate Risk',
    finding: 'Local resilience plans become more actionable when uncertainty is treated as a design material instead of a disclaimer.',
    date: '2025-11-05',
    readingMinutes: 16,
    author: 'Anika Rao',
    team: 'Climate & Resilience',
    format: 'Report',
    audience: 'Boards',
    topic: 'Climate',
    method: 'Scenario modeling',
    sector: 'Infrastructure',
    tags: ['Adaptation', 'Risk', 'Scenario planning'],
    metric: '4',
    metricLabel: 'decision horizons mapped',
    pdf: '#',
  },
  {
    id: 'health-pathways',
    title: 'Hidden Friction in Patient Pathways',
    finding: 'Care journeys break down at coordination moments that are rarely measured in satisfaction surveys.',
    date: '2025-09-27',
    readingMinutes: 12,
    author: 'Samir Boulos',
    team: 'Health & Behavior',
    format: 'Dataset',
    audience: 'Health systems',
    topic: 'Health',
    method: 'Journey analytics',
    sector: 'Healthcare',
    tags: ['Patient experience', 'Service analytics', 'Equity'],
    metric: '23k',
    metricLabel: 'journey events coded',
    pdf: '#',
  },
  {
    id: 'consumer-narratives',
    title: 'Narratives That Move Early Markets',
    finding: 'Early adopters respond less to category claims and more to coherent role stories that explain why the product belongs in daily life.',
    date: '2025-08-14',
    readingMinutes: 10,
    author: 'Leah Martins',
    team: 'Culture & Consumers',
    format: 'Article',
    audience: 'Growth teams',
    topic: 'Culture',
    method: 'Semiotic analysis',
    sector: 'Consumer',
    tags: ['Narrative', 'Demand creation', 'Brand meaning'],
    metric: '5',
    metricLabel: 'dominant adoption stories',
    pdf: '#',
  },
  {
    id: 'methods-standard',
    title: 'Deep Wave Evidence Standard',
    finding: 'A practical guide to how we define research questions, grade evidence, disclose uncertainty, and translate findings into decisions.',
    date: '2026-05-02',
    readingMinutes: 8,
    author: 'Research Standards Group',
    team: 'Methodology',
    format: 'Methods note',
    audience: 'Clients',
    topic: 'Methods',
    method: 'Research governance',
    sector: 'Cross-sector',
    tags: ['Methodology', 'Evidence grading', 'Transparency'],
    metric: '4-step',
    metricLabel: 'research operating system',
    pdf: '#',
  },
  {
    id: 'attention-systems',
    title: 'Attention Systems After the Feed',
    finding: 'Audience behavior is fragmenting into smaller rituals, making context-of-use more predictive than demographic segmentation alone.',
    date: '2025-07-06',
    readingMinutes: 13,
    author: 'Noor Okafor',
    team: 'Culture & Consumers',
    format: 'Webinar',
    audience: 'Strategy teams',
    topic: 'Culture',
    method: 'Panel research',
    sector: 'Media',
    tags: ['Attention', 'Media', 'Segmentation'],
    metric: '9',
    metricLabel: 'usage rituals identified',
    pdf: '#',
  },
];

export const methods = [
  {
    step: '01',
    title: 'Frame the decision',
    summary: 'Translate ambiguous business questions into decision criteria, uncertainty ranges, and evidence needs.',
  },
  {
    step: '02',
    title: 'Design the evidence mix',
    summary: 'Combine qualitative depth, quantitative scale, external datasets, and expert review where each method is strongest.',
  },
  {
    step: '03',
    title: 'Model what matters',
    summary: 'Separate signal from noise with transparent assumptions, sensitivity checks, and readable data artifacts.',
  },
  {
    step: '04',
    title: 'Operationalize the insight',
    summary: 'Convert findings into report pages, dashboards, playbooks, workshops, and decision logs.',
  },
];

export const sectors = [
  ['Technology', 'Adoption strategy, AI governance, platform trust, developer ecosystems.'],
  ['Public sector', 'Program design, public trust, civic service journeys, policy evaluation.'],
  ['Healthcare', 'Patient pathways, behavior change, service quality, access and equity.'],
  ['Finance', 'Risk perception, market narratives, product confidence, investor behavior.'],
  ['Infrastructure', 'Climate resilience, scenario planning, stakeholder intelligence, capital risk.'],
  ['Consumer', 'Demand creation, category entry, cultural change, audience systems.'],
];

export const cases = [
  {
    title: 'Reducing launch risk for a new analytics platform',
    outcome: 'Identified two adoption barriers before beta launch and reframed onboarding around evidence trails.',
    stat: '28%',
    label: 'trial-to-paid lift in pilot cohort',
  },
  {
    title: 'Rebuilding trust in a public grant program',
    outcome: 'Mapped abandonment points and redesigned communication around eligibility confidence.',
    stat: '18%',
    label: 'drop-off reduction in six weeks',
  },
  {
    title: 'Prioritizing climate adaptation investments',
    outcome: 'Built a decision matrix linking risk exposure, community impact, and funding horizons.',
    stat: '$42M',
    label: 'capital plan clarified',
  },
];

export const people = [
  {
    name: 'Maya Ellison, PhD',
    role: 'Principal, Markets & Forecasting',
    bio: 'Builds forecasting systems for demand, pricing, category change, and high-noise markets.',
  },
  {
    name: 'Noor Okafor',
    role: 'Director, AI & Work Systems',
    bio: 'Studies how new tools change work, governance, accountability, and organizational learning.',
  },
  {
    name: 'Iris Chen',
    role: 'Lead, Public Trust Research',
    bio: 'Turns civic, policy, and service research into plain-language decisions and measurable programs.',
  },
  {
    name: 'Samir Boulos',
    role: 'Health Systems Researcher',
    bio: 'Combines journey analytics and qualitative fieldwork to improve care pathways and access.',
  },
];

export const reportBodies = {
  'signal-loss': {
    kicker: 'Flagship HTML report',
    title: 'Signal Loss in High-Noise Markets',
    summary:
      'A model for finding stable decision signals when market narratives, social amplification, and lagging metrics disagree.',
    sections: [
      {
        heading: 'Core finding',
        body:
          'High-noise markets do not fail because teams lack data. They fail because teams assign equal weight to evidence with different speeds, incentives, and reliability. The strongest teams build evidence ledgers that tag each input by timing, source pressure, and decision relevance.',
      },
      {
        heading: 'Method mix',
        body:
          'The study combines executive interviews, longitudinal signal tracking, competitor event coding, customer switching surveys, and Bayesian forecast checks. Each source is scored for volatility, observability, and explanatory power.',
      },
      {
        heading: 'Implications for leaders',
        body:
          'Teams should separate dashboards into leading indicators, lagging outcomes, and narrative noise. Strategy reviews should include uncertainty ranges, evidence age, and what would change the recommendation.',
      },
    ],
  },
  'methods-standard': {
    kicker: 'Methods standard',
    title: 'Deep Wave Evidence Standard',
    summary:
      'The operating rules behind Deep Wave projects: how evidence is framed, collected, graded, translated, and maintained.',
    sections: [
      {
        heading: 'Evidence framing',
        body:
          'Every project begins by naming the decision, the cost of being wrong, the confidence threshold, and the audience that must use the evidence. This prevents research from becoming a decorative report after the real decision has already been made.',
      },
      {
        heading: 'Transparency requirements',
        body:
          'Reports include method notes, source windows, sample limitations, alternative explanations, and recommended follow-up tests. Uncertainty is written as a usable design constraint rather than a legal footnote.',
      },
      {
        heading: 'Accessible publishing',
        body:
          'Major outputs are published as structured HTML first, with downloadable PDF companions. Charts include text summaries, tables are readable without images, and citations are designed for reuse.',
      },
    ],
  },
};

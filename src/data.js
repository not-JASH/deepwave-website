export const domains = [
  {
    title: 'Market signal extraction',
    summary: 'Spectral decomposition, denoising, and latent factor recovery across tick, intraday, and end-of-day data.',
    signal: 'DSP-01',
  },
  {
    title: 'Alpha and factor research',
    summary: 'Feature libraries, cross-sectional ranking, horizon-specific forecasting, and post-cost predictive tests.',
    signal: 'ML-02',
  },
  {
    title: 'Execution and microstructure',
    summary: 'Order book dynamics, slippage surfaces, venue behavior, and execution-quality diagnostics.',
    signal: 'EXE-03',
  },
  {
    title: 'Risk regime detection',
    summary: 'Change-point analysis, volatility clustering, drawdown tagging, and stress propagation research.',
    signal: 'RSK-04',
  },
  {
    title: 'Alternative data fusion',
    summary: 'Text, macro, event, and proprietary feeds aligned into research-grade datasets with stable feature lineage.',
    signal: 'FUS-05',
  },
  {
    title: 'Model governance',
    summary: 'Validation, interpretability review, drift monitoring, and documentation for research and production models.',
    signal: 'GOV-06',
  },
];

/* Research Library data is currently disabled.
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
*/

export const methods = [
  {
    step: '01',
    title: 'Capture and align market state',
    summary: 'Synchronize venue, macro, and alternative-data streams so the research starts from a coherent market clock.',
  },
  {
    step: '02',
    title: 'Transform the raw signal',
    summary: 'Denoise, decompose frequency structure, engineer features, and label the regimes that matter to the mandate.',
  },
  {
    step: '03',
    title: 'Train and falsify models',
    summary: 'Benchmark linear baselines against tree, sequence, and deep architectures with walk-forward validation and stress tests.',
  },
  {
    step: '04',
    title: 'Operationalize the research',
    summary: 'Package outputs as factor notes, execution diagnostics, model cards, and monitoring dashboards that investment teams can use.',
  },
];

export const sectors = [
  {
    title: 'Systematic equities',
    summary: 'Cross-sectional feature research, factor crowding analysis, and turnover-aware ranking signals.',
    // filterTopic: 'Markets',
  },
  {
    title: 'Macro and rates',
    summary: 'Multi-horizon state detection, event response modeling, and cross-asset transmission analysis.',
    // filterTopic: 'Markets',
  },
  {
    title: 'Derivatives and volatility',
    summary: 'Surface behavior, skew dislocations, dispersion context, and flow-sensitive hedging research.',
    // filterTopic: 'Markets',
  },
  {
    title: 'Execution research',
    summary: 'Market impact curves, participation logic, venue selection, and transaction-cost decomposition.',
    // filterTopic: 'AI',
  },
  {
    title: 'Portfolio risk',
    summary: 'Stress-regime mapping, dependency breaks, and scenario research for PMs, risk teams, and allocators.',
    // filterTopic: 'Methods',
  },
  {
    title: 'Model governance',
    summary: 'Independent challenge, monitoring design, and documentation for research and production models.',
    // filterTopic: 'Methods',
  },
];

export const cases = [
  {
    title: 'Stabilizing an intraday alpha stack',
    outcome: 'Removed microstructure artifacts from three candidate features and recovered a cleaner post-cost signal before deployment.',
    stat: '+43bps',
    label: 'information-ratio lift in the shadow book',
  },
  {
    title: 'Repricing risk during a regime shift',
    outcome: 'Built a change-point monitor that flagged volatility state breaks ahead of the desk\'s existing threshold framework.',
    stat: '2.6d',
    label: 'earlier stress detection on average',
  },
  {
    title: 'Auditing a deep learning forecast pipeline',
    outcome: 'Reworked feature lineage, walk-forward validation, and drift alerts so the PM team could trust what the model was learning.',
    stat: '91%',
    label: 'feature lineage coverage across production inputs',
  },
];

/* Team and report data are currently disabled.
export const people = [
  {
    name: 'Maya Ellison, PhD',
    role: 'Head of Quant Research',
    bio: 'Researches cross-asset signals, factor structure, and regime detection in high-noise markets.',
  },
  {
    name: 'Noor Okafor',
    role: 'Director, Machine Learning Research',
    bio: 'Builds ranking, forecasting, and representation-learning systems for market and alternative data.',
  },
  {
    name: 'Iris Chen',
    role: 'Lead, Model Governance',
    bio: 'Designs validation standards, interpretability reviews, and documentation for research platforms.',
  },
  {
    name: 'Samir Boulos',
    role: 'Principal, Execution Analytics',
    bio: 'Studies microstructure, transaction costs, and execution quality across venues and liquidity regimes.',
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
*/

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

export const research = [
  {
    id: 'spectral-signature-spy-vs-btc',
    title: 'Spectral Signature of Intraday SPY vs. BTC',
    finding: 'A draft signal-processing report comparing how SPY and BTC concentrate intraday variance across fast noise, meso-scale cycles, and stress-week regime shifts.',
    date: '2026-05-20',
    readingMinutes: 9,
    author: 'Signal Research Desk',
    team: 'Market Structure Lab',
    format: 'Report',
    audience: 'Portfolio managers',
    topic: 'Signal processing',
    method: 'Fourier + wavelet decomposition',
    sector: 'Cross-asset',
    tags: ['Spectral analysis', 'SPY', 'BTC', 'Stress regimes'],
    metric: '1m',
    metricLabel: 'common sampling clock',
    capability: 'DSP-01 · Market signal extraction',
    scope: '~1 week, solo',
    dataWindow: 'SPY 1-minute bars, BTC/USDT 1-minute bars, 2020-2026',
  },
  {
    id: 'order-book-imbalance-predictor',
    title: 'Order-Book Imbalance as a One-Second Predictor',
    finding: 'A reproducible execution brief testing whether top-five order-book imbalance adds next-second direction lift once spread and trade-sign controls are included.',
    date: '2026-05-19',
    readingMinutes: 10,
    author: 'Execution Analytics Desk',
    team: 'Execution Research',
    format: 'Brief',
    audience: 'Execution desks',
    topic: 'Execution',
    method: 'LOB reconstruction + logistic regression',
    sector: 'Execution',
    tags: ['Order book', 'AUC', 'Microstructure', 'Binance'],
    metric: '100ms',
    metricLabel: 'snapshot cadence',
    capability: 'EXE-03 · Execution and microstructure',
    scope: '~1-2 weeks, solo',
    dataWindow: 'LOBSTER sample day and Binance BTC/USDT L2 snapshots',
  },
  {
    id: 'change-point-spx-realized-vol',
    title: 'Change-Point Shoot-Out on SPX Realized Volatility',
    finding: 'A risk methods note comparing HMM, CUSUM, and PELT on the same SPX realized-volatility series under one pre-registered latency rule.',
    date: '2026-05-18',
    readingMinutes: 11,
    author: 'Risk Systems Group',
    team: 'Risk Regime Detection',
    format: 'Methods note',
    audience: 'Risk committees',
    topic: 'Risk detection',
    method: 'HMM, CUSUM, and PELT',
    sector: 'Portfolio risk',
    tags: ['Regime detection', 'SPX', 'Realized volatility', 'PELT'],
    metric: '3',
    metricLabel: 'detectors compared',
    capability: 'RSK-04 · Risk regime detection',
    scope: '~1 week, solo',
    dataWindow: 'SPX daily and 5-minute data, VIX, and NBER labels since 2010',
  },
  {
    id: 'fomc-sentiment-vs-2y-yield',
    title: 'FOMC Statement Sentiment vs. 2Y Yield Reaction',
    finding: 'A macro data brief linking hawkish or dovish changes in FOMC statement language to the 30-minute move in the two-year Treasury yield.',
    date: '2026-05-17',
    readingMinutes: 9,
    author: 'Macro Signals Group',
    team: 'Alternative Data Research',
    format: 'Brief',
    audience: 'Macro desks',
    topic: 'Macro',
    method: 'FinBERT event study',
    sector: 'Rates',
    tags: ['FOMC', '2Y yield', 'Sentiment', 'Event study'],
    metric: '30m',
    metricLabel: 'reaction window',
    capability: 'FUS-05 · Alternative data fusion',
    scope: '~1-2 weeks, solo',
    dataWindow: 'FOMC statements, 2Y yield bars, and cycle labels from 2010-2026',
  },
  {
    id: 'cross-sectional-intraday-reversal',
    title: 'Cross-Sectional Intraday Reversal at Multiple Horizons',
    finding: 'A factor research brief re-measuring post-2018 intraday reversal across 5, 30, and 60 minute horizons with point-in-time membership and a cost overlay.',
    date: '2026-05-16',
    readingMinutes: 10,
    author: 'Systematic Equities Research',
    team: 'Alpha Research',
    format: 'Brief',
    audience: 'Systematic PMs',
    topic: 'Alpha research',
    method: 'Decile sort + decay fit',
    sector: 'Systematic equities',
    tags: ['Reversal', 'Cross-section', 'Half-life', 'Costs'],
    metric: '30m',
    metricLabel: 'benchmark horizon',
    capability: 'ML-02 · Alpha and factor research',
    scope: '~1 week, solo',
    dataWindow: 'Top 500 US equities, 1-minute bars, and earnings flags from 2018-2026',
  },
  {
    id: 'equity-ml-replication-audit',
    title: 'Replication Audit of a Published Equity-ML Paper',
    finding: 'A flagship governance report replicating a published equity-ML paper and decomposing why the published numbers move in the post-publication window.',
    date: '2026-05-15',
    readingMinutes: 15,
    author: 'Research Standards Group',
    team: 'Model Governance',
    format: 'Report',
    audience: 'Allocators',
    topic: 'Model governance',
    method: 'Replication audit',
    sector: 'Model governance',
    tags: ['Replication', 'Asset pricing', 'Governance', 'Out-of-sample'],
    metric: '1 table',
    metricLabel: 'replication target',
    capability: 'GOV-06 · Model governance',
    scope: '~3-4 weeks, solo',
    dataWindow: 'Monthly equity panel, macro factors, and open characteristic sources',
  },
  {
    id: 'drift-monitoring-shoot-out',
    title: 'Drift Monitoring Shoot-Out: PSI vs. KS vs. ADWIN',
    finding: 'A monitoring methods note benchmarking PSI, KS, and ADWIN on both injected synthetic drift and a live financial factor stream.',
    date: '2026-05-14',
    readingMinutes: 11,
    author: 'Model Governance Lab',
    team: 'Model Monitoring',
    format: 'Methods note',
    audience: 'Model risk teams',
    topic: 'Model governance',
    method: 'PSI, KS, and ADWIN',
    sector: 'Monitoring',
    tags: ['Drift', 'Monitoring', 'PSI', 'ADWIN'],
    metric: '3 modes',
    metricLabel: 'synthetic drift modes',
    capability: 'GOV-06 · Model governance',
    scope: '~2 weeks, solo',
    dataWindow: 'Synthetic streams plus a 12-1 momentum factor from 2010-2026',
  },
  {
    id: 'dollar-yield-correlation-break-detector',
    title: 'Dollar-Yield Correlation Break Detector',
    finding: 'A macro risk brief tracking when the rolling dollar-yield relationship breaks and how often those breaks coincide with pre-registered events.',
    date: '2026-05-13',
    readingMinutes: 8,
    author: 'Macro Risk Group',
    team: 'Macro Risk',
    format: 'Brief',
    audience: 'Multi-asset desks',
    topic: 'Macro risk',
    method: 'Rolling correlation + PELT',
    sector: 'Macro',
    tags: ['DXY', 'Treasury yields', 'Change points', 'Macro events'],
    metric: '60d',
    metricLabel: 'rolling correlation window',
    capability: 'RSK-04 · Risk regime detection (macro)',
    scope: '~1 week, solo',
    dataWindow: 'DXY, 10Y Treasury yield, and macro event calendars since 2010',
  },
];

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

export const reportBodies = {
  'spectral-signature-spy-vs-btc': {
    kicker: 'Roadmap item 01',
    summary:
      'This draft page turns Roadmap Item 01 into an HTML-first research note for the library. It asks where intraday variance lives in SPY versus BTC once both assets share the same one-minute market clock.',
    headline:
      'The page is built around one fast claim: once clocks are aligned, the SPY/BTC gap in sub-five-minute variance becomes easy to measure and easy to revisit during stress.',
    figureTitle: 'Target evidence stack',
    figureCaption:
      'Band-level variance shares, rolling band-share shifts, and stress-week overlays give the report one scan-friendly visual and a full reproducibility trail.',
    relatedIds: ['change-point-spx-realized-vol', 'dollar-yield-correlation-break-detector'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'Cross-asset commentary often treats equities and crypto as neighboring risk assets, but their liquidity rhythms, session structure, and overnight behavior differ sharply. A spectral comparison turns that structural gap into one concise piece of evidence.',
        bullets: [
          'Anchors the DSP-01 capability with a reproducible public-data note.',
          'Creates a baseline for later regime and correlation work.',
          'Gives PMs one chart that separates fast noise from slower intraday cycles.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft aligns SPY and BTC/USDT on a shared one-minute UTC clock and measures band-limited energy with short-time Fourier transforms and Daubechies-4 wavelets.',
        bullets: [
          'Estimate variance shares across 1-5, 5-15, 15-60, and 60+ minute bands.',
          'Roll band shares through time to show when structure shifts.',
          'Compare calm periods with stress weeks flagged by VIX or realized-vol thresholds.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The final page is scoped as a four-figure HTML report with citation-ready metadata and a short appendix that documents clocks, symbols, and decomposition choices.',
        bullets: [
          'Full-sample band mix for SPY and BTC.',
          'Rolling band-share panels through time.',
          'Stress-week overlays and distribution tests.',
          'Appendix covering data windows, venue choices, and boundary handling.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'This item fails quietly when operational details are sloppy.',
        bullets: [
          'Re-key both series to UTC before any resampling.',
          'Frame one-exchange BTC results as illustrative, not universal.',
          'Document wavelet extension and boundary handling explicitly.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'Once the first page is published, the same pipeline can be extended across assets and attached to later regime labels.',
        bullets: [
          'Repeat on NDX versus ETH for a second cross-asset pair.',
          'Compare spectral shifts with the regime breaks from Item 03.',
        ],
      },
    ],
  },
  'order-book-imbalance-predictor': {
    kicker: 'Roadmap item 02',
    summary:
      'This draft page becomes the execution anchor in the library: an auditable baseline showing what top-five book imbalance can and cannot predict one second ahead on a known equity sample and a 24/7 crypto venue.',
    headline:
      'The draft headline focuses on whether next-second lift survives once spread and venue costs are surfaced alongside AUC.',
    figureTitle: 'Prediction surface',
    figureCaption:
      'Global AUC, time-of-day buckets, spread-quintile lift, and a cost-after-execution note keep the brief useful instead of merely significant.',
    relatedIds: ['cross-sectional-intraday-reversal', 'drift-monitoring-shoot-out'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'Order-book imbalance is widely cited but inconsistently measured. This page turns it into a transparent baseline that clients can inspect before trusting any richer execution feature stack.',
        bullets: [
          'Anchors the EXE capability with a fully reproducible public-data piece.',
          'Makes venue mix visible by comparing an equity sample with a crypto venue.',
          'Creates a scoring rubric that later execution work can reuse.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft reconstructs top-of-book and top-five depth from a free LOBSTER sample and optionally repeats the same harness on Binance BTC/USDT snapshots.',
        bullets: [
          'Snapshot the book every 100 ms and compute signed top-five depth imbalance.',
          'Add spread and recent trade-sign imbalance as control features.',
          'Fit logistic regression for next-second midprice direction and stratify by time of day and spread quintile.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The finished output is scoped as a short HTML execution brief with one reproducibility notebook attached so desks can port the template to their own venue.',
        bullets: [
          'Global AUC and calibration view.',
          'Lift by time-of-day bucket.',
          'Lift by spread quintile.',
          'A cost-after-execution section that prevents overclaiming.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'This page only earns trust if it stays candid about what the setup cannot prove.',
        bullets: [
          'The free LOBSTER sample is a single day, not a cross-day truth.',
          'AUC is not the same thing as post-cost PnL.',
          'Snapshot cadence and trade-sign inference should be stress-tested, not assumed.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'The natural follow-on is to connect the signal to actual execution quality and to later cross-sectional effects.',
        bullets: [
          'Add queue-position features and a slippage-curve companion piece.',
          'Test whether residual reversal from Item 05 co-moves with stale imbalance signals.',
        ],
      },
    ],
  },
  'change-point-spx-realized-vol': {
    kicker: 'Roadmap item 03',
    summary:
      'This draft page becomes the risk library\'s controlled bake-off: same input series, same evaluation rule, three detector families, and one explicit latency score.',
    headline:
      'The page is designed to answer a committee question cleanly: which detector finds volatility regime breaks early enough to matter without flooding the desk with false alarms?',
    figureTitle: 'Detector comparison frame',
    figureCaption:
      'Shared timelines, a latency table, and a small ablation panel make the comparison credible instead of stylistic.',
    relatedIds: ['spectral-signature-spy-vs-btc', 'drift-monitoring-shoot-out', 'dollar-yield-correlation-break-detector'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'Risk teams hear detector claims constantly, but rarely see them measured head-to-head on the same series with the same scoring rule. This page turns that comparison into a reusable reference.',
        bullets: [
          'Anchors the RSK capability with an evaluation discipline, not just an algorithm demo.',
          'Produces change-point labels that later pages can reuse.',
          'Creates a note that can be re-run and republished on a regular cadence.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft builds a daily log realized-volatility series for SPX and runs HMM, CUSUM, and PELT against the same input before scoring alarms against stress events.',
        bullets: [
          'Estimate realized volatility from 5-minute bars with a daily fallback when gaps appear.',
          'Score detector alarms against VIX spikes and pinned NBER recession labels within a fixed window.',
          'Report latency, misses, false alarms, and one hyperparameter ablation per detector.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The final output is a methods note that works at two levels: a forwardable one-page summary for committees and a deeper HTML page for researchers.',
        bullets: [
          'Comparison table for latency and false alarms.',
          'Three timelines showing where each detector fires.',
          'Ablation view for penalties and thresholds.',
          'A changepoints CSV that downstream pages can consume.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'Earlier detection only matters if the alarms stay usable.',
        bullets: [
          'Keep false-alarm rate in the headline, not buried in the appendix.',
          'Pin the NBER vintage and document any fallback path for intraday data.',
          'Show parameter sensitivity so the result does not look hand-tuned.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'This page is designed to become infrastructure for the rest of the library rather than a dead-end comparison.',
        bullets: [
          'Feed the breaks into Item 01 to test for spectral shifts at regime changes.',
          'Compare the same breaks with drift alarms and macro correlation breaks in Items 07 and 08.',
        ],
      },
    ],
  },
  'fomc-sentiment-vs-2y-yield': {
    kicker: 'Roadmap item 04',
    summary:
      'This draft page translates the roadmap\'s macro event study into a short HTML brief. It scores FOMC language shifts and asks how much of the immediate two-year yield move they explain.',
    headline:
      'The anchor claim is modest on purpose: statement sentiment should explain some, not all, of the front-end move, and the residuals are part of the story.',
    figureTitle: 'Event study surface',
    figureCaption:
      'A scatter of sentiment delta versus yield delta, cycle splits, and a residual table keep the brief readable and honest.',
    relatedIds: ['dollar-yield-correlation-break-detector'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'The site claims alternative-data capability. This page makes that claim concrete by tying textual tone shifts in a familiar macro document to a market move that allocators already understand.',
        bullets: [
          'Gives the FUS capability an anchor piece that is short, recognizable, and reproducible.',
          'Makes validation visible instead of hiding behind off-the-shelf sentiment scores.',
          'Creates event-window utilities that later macro work can reuse.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft scrapes FOMC statements, scores sentence-level hawkish and dovish language, validates that scorer on a hand-coded subset, and links the resulting sentiment delta to a 30-minute 2Y move.',
        bullets: [
          'Store raw and cleaned statement text keyed to the published release minute.',
          'Validate at least 30 statements before leaning on the model.',
          'Run a simple regression with cycle splits rather than overbuilding the first brief.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The finished output is a compact data brief meant to be legible in a few minutes while still leaving a full methodology trail for researchers.',
        bullets: [
          'Scatter plot with regression line and confidence band.',
          'Cycle-stratified view for tightening and easing regimes.',
          'Per-release table of sentiment and yield deltas.',
          'Residual discussion covering the cases where the simple story fails.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'Macro language work can look cleaner than it really is if the scoring and timing rules stay implicit.',
        bullets: [
          'Fed jargon can be mis-scored by general financial language models.',
          'Intraday yield data quality varies materially across vendors.',
          'Statement-release timing must use the published minute, not the press-conference start.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'Once the first FOMC brief exists, the same harness becomes reusable research infrastructure.',
        bullets: [
          'Replicate on ECB statements and a Bund equivalent.',
          'Separate the prepared statement from press-conference Q and A in a follow-up note.',
        ],
      },
    ],
  },
  'cross-sectional-intraday-reversal': {
    kicker: 'Roadmap item 05',
    summary:
      'This draft page re-measures a classic short-horizon effect on a post-2018 equity universe. The design emphasizes current magnitude, half-life, and the cost level where the signal stops being investable.',
    headline:
      'The page is built around the break-even question: how much gross reversal survives once the holding window, membership bias, and transaction cost assumptions are explicit?',
    figureTitle: 'Decay and cost frame',
    figureCaption:
      'Horizon-level return bars, a fitted decay curve, and a cost overlay keep the signal grounded in deployable terms.',
    relatedIds: ['order-book-imbalance-predictor', 'equity-ml-replication-audit'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'Systematic-equities clients still ask the same basic question before they trust a new alpha stack: what does a known effect look like right now, measured correctly and net of the obvious traps?',
        bullets: [
          'Gives ML-02 a defensible baseline signal rather than a marketing claim.',
          'Makes survivorship bias visible by forcing a point-in-time universe.',
          'Connects naturally to execution work through the cost overlay.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft builds a point-in-time top-500 universe, pulls one-minute bars, sorts names into prior-return deciles at multiple horizons, and measures the next-horizon long-short spread.',
        bullets: [
          'Evaluate 5, 30, and 60 minute horizons on the same panel.',
          'Bootstrap confidence bands and fit a decay curve for half-life.',
          'Layer earnings flags and simple spread proxies before talking about deployability.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The finished page is scoped as a compact factor brief that lets readers understand shape, persistence, and transaction-cost sensitivity without digging through an appendix first.',
        bullets: [
          'Annualized long-short returns by horizon.',
          'Decay curve and fitted half-life.',
          'Year-by-year 30 minute series with cost overlays.',
          'Methodology box on universe construction, gaps, and earnings handling.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'This page becomes misleading fast if the data panel is treated casually.',
        bullets: [
          'Use a point-in-time membership table, not the current top 500.',
          'Show earnings-day sensitivity because those tails can dominate the result.',
          'Document gap handling and any choice to trim the open or close.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'The first publication should open directly into adjacent questions about neutrality and microstructure.',
        bullets: [
          'Extend to sector-neutral and beta-neutral variants.',
          'Test whether residual reversal lines up with imbalance signals from Item 02.',
        ],
      },
    ],
  },
  'equity-ml-replication-audit': {
    kicker: 'Roadmap item 06',
    summary:
      'This draft page is the flagship governance artifact in the library. It replicates a published equity-ML result, extends the same pipeline into the post-publication window, and decomposes why the gap opens.',
    headline:
      'The intended headline is not victory over the paper. It is an audit-grade explanation of how much of the gap comes from data definitions, tuning choices, and genuine out-of-sample decay.',
    figureTitle: 'Replication audit frame',
    figureCaption:
      'Side-by-side tables, an out-of-sample extension, and a gap decomposition section make the page useful to allocators and model-risk reviewers.',
    relatedIds: ['drift-monitoring-shoot-out', 'cross-sectional-intraday-reversal'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'Governance work is what separates a research firm from a backtesting shop. A serious public replication audit is the most durable credibility asset in the first year of publishing.',
        bullets: [
          'Signals methodological seriousness to allocators.',
          'Turns post-publication out-of-sample performance into the real product.',
          'Creates a reusable audit structure for later client work.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft chooses one published table, rebuilds a feasible monthly panel with open substitutes, reproduces the in-sample result, and then extends the same design into the post-publication window.',
        bullets: [
          'Document every deviation in data definitions, training windows, and hyperparameter search.',
          'Run a feasible subset of the original model family on the same panel.',
          'Decompose the final gap into data drift, tuning differences, and true out-of-sample decay.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The final page is scoped as a long-form HTML methods note with enough rigor to stand alone in mandate proposals and governance reviews.',
        bullets: [
          'Replication table versus the published numbers.',
          'Out-of-sample table for the post-publication period.',
          'A why-the-numbers-moved decomposition.',
          'Pinned code and data-vintage references.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'Replication work loses value if it drifts into score-settling or hand-wavy substitutions.',
        bullets: [
          'Keep the tone respectful of the original paper and explicit about substitution limits.',
          'Quantify free-data gaps instead of pretending they vanish.',
          'Budget for stochastic tuning and training-time variance before promising timing.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'The right outcome is not a single article. It is a repeatable governance series.',
        bullets: [
          'Turn the audit template into a standing review format.',
          'Pair future audits with the drift-monitoring harness from Item 07.',
        ],
      },
    ],
  },
  'drift-monitoring-shoot-out': {
    kicker: 'Roadmap item 07',
    summary:
      'This draft page compares three common drift detectors on both synthetic and real financial features. The goal is not a winner in the abstract, but a practical rule for which detector fits which drift regime.',
    headline:
      'The page is designed to replace folklore thresholds with an empirical answer about delay, false alarms, and parameter sensitivity.',
    figureTitle: 'Drift harness comparison',
    figureCaption:
      'Synthetic delay curves, false-alarm summaries, and a real-factor timeline let the methods piece stay concrete.',
    relatedIds: ['equity-ml-replication-audit', 'change-point-spx-realized-vol'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'Most teams inherit drift detectors from whatever platform they already run. This page argues for detector choice as a measurement problem rather than a tooling default.',
        bullets: [
          'Pairs naturally with Item 06 by asking whether monitoring would have caught decay in time.',
          'Turns the synthetic harness itself into a reusable product.',
          'Challenges folklore PSI thresholds with explicit evidence.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft starts with seeded synthetic streams that inject known mean, variance, and seasonal drift, then repeats the same scoring harness on a real financial factor.',
        bullets: [
          'Sweep PSI, KS, and ADWIN parameters on the same synthetic scenarios.',
          'Score delay, false alarms, and sensitivity rather than accuracy alone.',
          'Map real-factor alarms to the regime breaks generated in Item 03.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The finished page is scoped as an HTML methods note plus a small companion module that client teams could reuse in their own monitoring stack.',
        bullets: [
          'Comparison table for synthetic drift modes and severities.',
          'Real-factor timeline with detector alarms overlaid.',
          'One-page when-to-use-which summary.',
          'A publishable drift_harness module.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'Monitoring pieces overstate themselves when synthetic and real evidence are blurred together.',
        bullets: [
          'Keep synthetic and real findings visually and verbally separate.',
          'Show full window and delta sensitivity, especially for PSI and ADWIN.',
          'Treat alignment with Item 03 as correlation, not causation.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'The first release should set up a broader monitoring toolkit rather than end the discussion.',
        bullets: [
          'Add a learned detector such as reconstruction-error monitoring.',
          'Apply the harness to the out-of-sample run in Item 06.',
        ],
      },
    ],
  },
  'dollar-yield-correlation-break-detector': {
    kicker: 'Roadmap item 08',
    summary:
      'This draft page turns a familiar macro relationship into a maintained signal page. It detects breaks in the rolling dollar-yield correlation and tests whether those breaks cluster around a closed event list.',
    headline:
      'The right claim here is coincidence, not causation: the page asks how often a systematic break detector lands near major policy or data events.',
    figureTitle: 'Correlation-break map',
    figureCaption:
      'A rolling correlation timeline, marked break points, and break-to-event distances produce a shareable macro-risk note.',
    relatedIds: ['change-point-spx-realized-vol', 'fomc-sentiment-vs-2y-yield'],
    sections: [
      {
        heading: 'Why this matters',
        body:
          'The dollar-yield relationship is one of the simplest macro stories to tell and one of the most useful to monitor when it breaks. This page packages those breaks into something repeatable and easy to forward.',
        bullets: [
          'Acts as the macro counterpart to the single-series regime work in Item 03.',
          'Shows relationship-level regime detection rather than only level shifts.',
          'Creates a note that can be refreshed each quarter with little structural change.',
        ],
      },
      {
        heading: 'Data and method',
        body:
          'The draft computes a rolling 60-day correlation between daily DXY and 10-year yield changes, then runs PELT across that series and maps the breaks to a pre-registered event list.',
        bullets: [
          'Test a small set of cost functions and choose the penalty on a held-out slice.',
          'Match each break to the nearest event within a fixed five-business-day window.',
          'Report unmatched breaks and unmatched events separately.',
        ],
      },
      {
        heading: 'Draft deliverable',
        body:
          'The finished output is scoped as a short macro-risk brief with enough methodology to defend the event-matching rule without burying the reader in implementation detail.',
        bullets: [
          'Correlation timeline with marked break points.',
          'Break-to-event distance histogram.',
          'Per-break mapping table and unmatched-break discussion.',
          'Methodology box covering penalty tuning and event-list freeze rules.',
        ],
      },
      {
        heading: 'Risks and caveats',
        body:
          'Event matching is exactly where a brief like this can become persuasive but weak.',
        bullets: [
          'Freeze the event list before running the detector.',
          'Acknowledge rolling-window edge effects and penalty sensitivity explicitly.',
          'Keep the language at coincidence, not causation.',
        ],
      },
      {
        heading: 'Next steps',
        body:
          'This page is meant to expand outward into a small macro-relationship series.',
        bullets: [
          'Add gold for a three-series version.',
          'Run shuffled-date null tests to judge how surprising the alignment rate really is.',
        ],
      },
    ],
  },
};

export const researchNodes = [
  {
    id: '01',
    slug: 'signal-lab',
    anchor: 'signal-lab',
    title: 'Signal Lab',
    label: 'Acoustic + hydrodynamic models',
    status: 'ACTIVE',
    accession: 'DWR-01-317',
    color: '#81CBBE',
    summary: 'Sonar traces, waveforms, anomaly detection, and model confidence systems for deep-water signals.',
    coordinates: 'A-14 / LOWER ARRAY'
  },
  {
    id: '02',
    slug: 'field-systems',
    anchor: 'field-systems',
    title: 'Field Systems',
    label: 'Buoys, floats, coastal nodes',
    status: 'DEPLOYED',
    accession: 'DWR-02-104',
    color: '#DD5F4A',
    summary: 'Instrument networks that collect live current, pressure, weather, and wave energy readings.',
    coordinates: 'B-08 / PIER LOCK'
  },
  {
    id: '03',
    slug: 'current-models',
    anchor: 'current-models',
    title: 'Current Models',
    label: 'Forecasts + long-range drift',
    status: 'REVISION B',
    accession: 'DWR-03-241',
    color: '#9BACD5',
    summary: 'Simulations that reconcile live sensor streams with archival current and climate datasets.',
    coordinates: 'C-03 / MODEL ROOM'
  },
  {
    id: '04',
    slug: 'publications',
    anchor: 'publications',
    title: 'Publications',
    label: 'Reports, releases, papers',
    status: 'PUBLIC',
    accession: 'DWR-04-092',
    color: '#F2CD88',
    summary: 'Public-facing field reports, model notes, paper abstracts, and release documentation.',
    coordinates: 'D-20 / STACKS'
  },
  {
    id: '05',
    slug: 'archive',
    anchor: 'archive',
    title: 'Archive',
    label: 'Scans + field lineage',
    status: 'CURATED',
    accession: 'DWR-05-442',
    color: '#A07254',
    summary: 'Recovered diagrams, instrument manuals, declassified field notes, and verified project history.',
    coordinates: 'E-11 / COLD FILE'
  },
  {
    id: '06',
    slug: 'reception',
    anchor: 'contact',
    title: 'Reception',
    label: 'Briefings + collaboration',
    status: 'OPEN',
    accession: 'DWR-06-001',
    color: '#C86AAE',
    summary: 'A controlled access point for field collaborations, data partnerships, and applied research briefs.',
    coordinates: 'F-01 / ENTRY'
  }
];

export const metrics = [
  { label: 'Array uptime', value: 97, unit: '%' },
  { label: 'Signal lock', value: 82, unit: '%' },
  { label: 'Current drift', value: 14, unit: 'cm/s' },
  { label: 'Model confidence', value: 91, unit: '%' }
];

export const modelWindows = [
  {
    code: 'DRIFT WINDOW / 36H',
    title: 'North Shelf shear recovery',
    summary: 'Assimilation now converges across lower-array telemetry and the April pressure variance event.',
    status: 'CONFIDENCE 91%',
    readout: '+14 cm/s'
  },
  {
    code: 'REVISION NOTE / B.03',
    title: 'Thermocline offset correction',
    summary: 'Bias trims continue across two warm-water lanes where historical buoy logs underreported lateral drift.',
    status: 'DELTA 4.2%',
    readout: '0.7 deg C'
  },
  {
    code: 'OUTLOOK / 72H',
    title: 'Array redeployment envelope',
    summary: 'Field teams have a stable intervention window before signal scatter exceeds publication threshold.',
    status: 'WINDOW OPEN',
    readout: '42 hours'
  }
];

export const reports = [
  {
    code: 'FIELD REPORT / 2026.04',
    title: 'Abyssal Current Model, Revision B',
    excerpt: 'Signal drift observed across three offshore nodes after a 42-hour pressure variance event.',
    stamp: 'FIELD VERIFIED'
  },
  {
    code: 'MODEL NOTE / 2026.03',
    title: 'Wave-Energy Boundary Inference',
    excerpt: 'A public summary of boundary conditions used in the North Shelf simulation environment.',
    stamp: 'OPEN DATA'
  },
  {
    code: 'TECH MEMO / 2026.01',
    title: 'Buoy Array Recovery Protocol',
    excerpt: 'Inspection checklist and telemetry continuity procedure for offshore sensor redeployment.',
    stamp: 'RELEASED'
  }
];

export const archiveEntries = [
  {
    code: 'DWR-0142',
    title: 'Pressure cassette scan',
    format: 'Verified copy',
    year: '1987 / restored 2026',
    status: 'Public access',
    summary: 'Recovered from the lower-array storage room and matched against two later service annotations to confirm pressure drift during early tank tests.'
  },
  {
    code: 'DWR-0201',
    title: 'First coastal node diagram',
    format: 'Restored plate',
    year: '1991 / plate series',
    status: 'Conservation complete',
    summary: 'Original routing artwork for the first coastal telemetry node, including hand-marked redundancies that were later removed from the production plan.'
  },
  {
    code: 'DWR-0330',
    title: 'Signal room logbook',
    format: 'Partial transcription',
    year: '1998 / field office',
    status: 'Cross-reference pending',
    summary: 'Manual observations from an anomalous current event, preserved for lineage review while a second operator log is being reconciled.'
  },
  {
    code: 'DWR-0447',
    title: 'Wave tank calibration notes',
    format: 'Public summary',
    year: '2004 / calibration deck',
    status: 'Release approved',
    summary: 'Calibration tolerances and offset decisions used to align the tank simulation program with modern publication thresholds.'
  }
];

export const waveform = [12, 18, 14, 26, 18, 34, 21, 16, 28, 18, 12, 24, 31, 19, 15, 27, 42, 24, 18, 22, 16, 30, 36, 20, 14, 18, 12];

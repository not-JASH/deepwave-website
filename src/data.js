export const researchNodes = [
  {
    id: '01',
    slug: 'signal-lab',
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
  'DWR-0142 / Pressure cassette scan / verified copy',
  'DWR-0201 / First coastal node diagram / restored plate',
  'DWR-0330 / Signal room logbook / partial transcription',
  'DWR-0447 / Wave tank calibration notes / public summary'
];

export const waveform = [12, 18, 14, 26, 18, 34, 21, 16, 28, 18, 12, 24, 31, 19, 15, 27, 42, 24, 18, 22, 16, 30, 36, 20, 14, 18, 12];

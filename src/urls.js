export function reportUrl(id, sectionSlug = '') {
  const section = sectionSlug ? `#${encodeURIComponent(sectionSlug)}` : '';
  return `./report.html?id=${encodeURIComponent(id)}${section}`;
}

export function legacyReportHashUrl(hash) {
  const reportMatch = hash.match(/^#report\/([^/]+)(?:\/([^/]+))?$/);
  if (!reportMatch) return '';

  const [, id, sectionSlug] = reportMatch;
  return reportUrl(decodeURIComponent(id), sectionSlug ? decodeURIComponent(sectionSlug) : '');
}

/**
 * Certifications & Learning Path data.
 *
 * Status is conveyed by TEXT + ICON, never color alone (WCAG AA).
 *   - completed   : earned, ideally with a verification link
 *   - in-progress : actively working towards it
 *   - planned     : intend to take it
 *
 * Certificate names/issuers are literal. Status labels are translated (CERTS.* keys).
 * Dates and verification links are left as TODO placeholders for the user to fill —
 * nothing is invented.
 */

export type CertStatus = 'completed' | 'in-progress' | 'planned';

export interface Certification {
  name: string;
  issuer: string;
  status: CertStatus;
  /** Free-form date or target, e.g. "Mar 2025" or "Target: Q3 2025". */
  date?: string;
  /** Public verification URL (shown only for completed certs). */
  verifyUrl?: string;
}

/** Status → { i18n label, icon }. */
export const CERT_STATUS_META: Record<CertStatus, { labelKey: string; icon: string }> = {
  completed: { labelKey: 'CERTS.STATUS_COMPLETED', icon: 'bi-patch-check-fill' },
  'in-progress': { labelKey: 'CERTS.STATUS_IN_PROGRESS', icon: 'bi-hourglass-split' },
  planned: { labelKey: 'CERTS.STATUS_PLANNED', icon: 'bi-calendar-event' },
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google / Coursera',
    status: 'completed',
    date: '', // TODO(user): completion month/year, e.g. "Feb 2025"
    verifyUrl: '', // TODO(user): Coursera/Credly verification link
  },
  {
    name: 'Google IT Support Professional Certificate',
    issuer: 'Google', // TODO(user): confirm issuer/school (site previously credited I.I.S.S. Luigi dell'Erba)
    status: 'completed',
    date: '', // TODO(user): completion month/year
    verifyUrl: '', // TODO(user): verification link
  },
  {
    name: 'TryHackMe SAL1 (Security Analyst Level 1)',
    issuer: 'TryHackMe',
    status: 'in-progress',
    date: '', // TODO(user): target month/year
    // verifyUrl only shown once completed
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'planned',
    date: '', // TODO(user): target exam date
  },
];

/**
 * Skills data model + content.
 *
 * Honest, self-reported proficiency labels only — NO percentage bars or star meters.
 *   - professional : used in a paid/production role
 *   - project      : used in personal or client projects
 *   - learning     : actively studying, not yet used in real work
 *
 * Skill names are proper nouns and stay literal (not translated). Category titles and
 * level labels ARE translated (keys under SKILLS.* in the i18n files).
 *
 * Logos are optional and reuse existing assets under `assets/images/Logo/`.
 * A skill without a `logo` simply renders as a text chip.
 */

export type SkillLevel = 'professional' | 'project' | 'learning';

export interface Skill {
  /** Display name (literal, not translated). */
  name: string;
  level: SkillLevel;
  /** Optional path under assets/images/Logo/. */
  logo?: string;
  /** Optional link to supporting evidence (project, write-up, certificate). */
  evidenceUrl?: string;
}

export interface SkillCategory {
  id: string;
  /** i18n key for the category title. */
  titleKey: string;
  /** Bootstrap Icons class for the category heading. */
  icon: string;
  skills: Skill[];
}

/** Level → { i18n label, icon }. Status is conveyed by TEXT + ICON, never color alone (WCAG AA). */
export const SKILL_LEVEL_META: Record<SkillLevel, { labelKey: string; icon: string }> = {
  professional: { labelKey: 'SKILLS.LEVEL_PROFESSIONAL', icon: 'bi-briefcase-fill' },
  project: { labelKey: 'SKILLS.LEVEL_PROJECT', icon: 'bi-kanban-fill' },
  learning: { labelKey: 'SKILLS.LEVEL_LEARNING', icon: 'bi-mortarboard-fill' },
};

const LOGO = 'assets/images/Logo/';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'software-engineering',
    titleKey: 'SKILLS.CAT_ENGINEERING',
    icon: 'bi-code-slash',
    skills: [
      { name: 'Angular', level: 'professional', logo: LOGO + 'angular-icon-seeklogo.png' },
      { name: 'TypeScript', level: 'professional' },
      { name: 'JavaScript (ES6+)', level: 'professional', logo: LOGO + 'javascript-logo.svg' },
      { name: 'HTML & CSS', level: 'professional', logo: LOGO + 'HTML5_logo_and_wordmark.png' },
      { name: 'PHP', level: 'professional' },
      { name: 'Symfony', level: 'professional', logo: LOGO + 'icons8-symfony.svg' },
      { name: 'RESTful APIs', level: 'professional', logo: LOGO + 'api (1).svg' },
      { name: 'React', level: 'project', logo: LOGO + 'React-icon.svg' },
      { name: 'Laravel', level: 'project' },
      { name: 'Node.js', level: 'project', logo: LOGO + 'nodejsStackedLight.svg' },
      { name: 'Unity / C#', level: 'project', logo: LOGO + 'icons8-unity.svg' },
    ],
  },
  {
    id: 'security',
    titleKey: 'SKILLS.CAT_SECURITY',
    icon: 'bi-shield-lock',
    // TODO(user): confirm or prune these. Seeded at 'learning' because the brief's
    // "security experience" field was left blank. Do NOT promote any of these to a
    // higher level without real evidence. Add `evidenceUrl` to link a write-up/lab.
    skills: [
      { name: 'Linux (security context)', level: 'learning', logo: LOGO + 'Tux.svg' }, // TODO(user): confirm
      { name: 'Networking fundamentals', level: 'learning' }, // TODO(user): confirm
      { name: 'Python for automation', level: 'learning' }, // TODO(user): confirm
      { name: 'SIEM basics', level: 'learning' }, // TODO(user): confirm
      { name: 'Incident response process', level: 'learning' }, // TODO(user): confirm
      { name: 'Log analysis', level: 'learning' }, // TODO(user): confirm
    ],
  },
  {
    id: 'tools-platforms',
    titleKey: 'SKILLS.CAT_TOOLS',
    icon: 'bi-tools',
    skills: [
      { name: 'Git', level: 'professional', logo: LOGO + 'git-icon-logo.svg' },
      { name: 'Linux', level: 'professional', logo: LOGO + 'Tux.svg' },
      { name: 'MySQL / SQL', level: 'professional', logo: LOGO + 'mysql-logo.svg' },
      { name: 'Docker', level: 'project' },
      { name: 'GitHub Actions (basic CI/CD)', level: 'project' },
      { name: 'PrestaShop', level: 'project', logo: LOGO + 'prestashop-logo.svg' },
      { name: 'OVHcloud', level: 'project', logo: LOGO + 'ovhcloud-logo-vector.svg' },
    ],
  },
];

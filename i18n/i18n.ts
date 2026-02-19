export type Locale = 'ko' | 'en';

export const DEFAULT_LOCALE: Locale = 'ko';

const messages: Record<Locale, Record<string, string>> = {
  ko: {
    'locale.ko': 'KO',
    'locale.en': 'EN',

    'section.introduce': 'INTRODUCTION',
    'section.skill': 'SKILLS',
    'section.experience': 'EXPERIENCE',
    'section.project': 'PROJECTS',
    'section.education': 'EDUCATION',
    'section.certificate': 'CERTIFICATIONS',
    'section.language': 'LANGUAGES',
    'section.etc': 'OTHER',

    'introduce.latestUpdated': 'Latest Updated',

    'experience.currentlyEmployed': '재직 중',
    'experience.skillKeywords': 'Skill Keywords',
    'experience.totalPrefix': '총',

    'certificate.credentialId': 'Credential ID',
    'certificate.verification': 'Verification',

    'footer.github': 'Github',
    'footer.thanksFor': 'Thanks for',
  },
  en: {
    'locale.ko': 'KO',
    'locale.en': 'EN',

    'section.introduce': 'INTRODUCTION',
    'section.skill': 'SKILLS',
    'section.experience': 'EXPERIENCE',
    'section.project': 'PROJECTS',
    'section.education': 'EDUCATION',
    'section.certificate': 'CERTIFICATIONS',
    'section.language': 'LANGUAGES',
    'section.etc': 'OTHER',

    'introduce.latestUpdated': 'Last updated',

    'experience.currentlyEmployed': 'Currently employed',
    'experience.skillKeywords': 'Skill keywords',
    'experience.totalPrefix': 'Total',

    'certificate.credentialId': 'Credential ID',
    'certificate.verification': 'Verification',

    'footer.github': 'GitHub',
    'footer.thanksFor': 'Thanks to',
  },
};

export function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const stored = window.localStorage.getItem('locale');
  if (stored === 'ko' || stored === 'en') {
    return stored;
  }

  const lang = (window.navigator.language || '').toLowerCase();
  return lang.startsWith('ko') ? 'ko' : 'en';
}

export function translate(locale: Locale, key: string): string {
  return messages[locale]?.[key] ?? messages.ko[key] ?? key;
}

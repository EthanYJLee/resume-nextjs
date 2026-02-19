import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, getInitialLocale, Locale, translate } from './i18n';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }: PropsWithChildren<unknown>) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('locale', locale);
    document.documentElement.lang = locale === 'ko' ? 'ko-KR' : 'en';
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale,
      t: (key: string) => translate(locale, key),
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

import { Button, ButtonGroup } from 'reactstrap';
import { useI18n } from '../../i18n/I18nProvider';
import { Locale } from '../../i18n/i18n';

export function LocaleToggle() {
  const { locale, setLocale, t } = useI18n();

  const items: { locale: Locale; label: string }[] = [
    { locale: 'ko', label: t('locale.ko') },
    { locale: 'en', label: t('locale.en') },
  ];

  return (
    <ButtonGroup size="sm" aria-label="language toggle">
      {items.map((item) => (
        <Button
          key={item.locale}
          color="secondary"
          outline={locale !== item.locale}
          onClick={() => setLocale(item.locale)}
          active={locale === item.locale}
        >
          {item.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

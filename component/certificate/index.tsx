import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { ICertificate } from './ICertificate';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { useI18n } from '../../i18n/I18nProvider';

type Payload = ICertificate.Payload;
type Item = ICertificate.Item;

export const Certificate = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { t } = useI18n();
  return (
    <CommonSection title={t('section.certificate')}>
      <CertificateRow payload={payload} t={t} />
    </CommonSection>
  );
}

function CertificateRow({
  payload,
  t,
}: PropsWithChildren<{ payload: Payload; t: (key: string) => string }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item, t)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: Item, t: (key: string) => string): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;

  const acquiredAt = DateTime.fromFormat(item.acquiredAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const expiresAt = item.expiresAt
    ? DateTime.fromFormat(item.expiresAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL)
    : undefined;

  const leftTitle = expiresAt ? `${acquiredAt} ~ ${expiresAt}` : acquiredAt;

  const extraDescriptions: IRow.Description[] = [];
  if (item.credentialId) {
    extraDescriptions.push({
      content: `${t('certificate.credentialId')}: ${item.credentialId}`,
    });
  }
  if (item.credentialUrl) {
    extraDescriptions.push({ content: t('certificate.verification'), href: item.credentialUrl });
  }

  const descriptions =
    item.descriptions || extraDescriptions.length > 0
      ? [...(item.descriptions || []), ...extraDescriptions]
      : undefined;

  return {
    left: { title: leftTitle },
    right: {
      title: item.title,
      subTitle: item.issuer,
      descriptions,
    },
  };
}

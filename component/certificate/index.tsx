import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { ICertificate } from './ICertificate';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

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
  return (
    <CommonSection title="CERTIFICATE">
      <CertificateRow payload={payload} />
    </CommonSection>
  );
}

function CertificateRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: Item): IRow.Payload {
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
    extraDescriptions.push({ content: `Credential ID: ${item.credentialId}` });
  }
  if (item.credentialUrl) {
    extraDescriptions.push({ content: 'Verification', href: item.credentialUrl });
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

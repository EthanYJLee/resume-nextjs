import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { IEtc } from './IEtc';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { useI18n } from '../../i18n/I18nProvider';

type Payload = IEtc.Payload;
type Item = IEtc.Item;

export const Etc = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<IEtc.Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { t } = useI18n();
  return (
    <CommonSection title={t('section.etc')}>
      <EducationRow payload={payload} />
    </CommonSection>
  );
}

function EducationRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
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
  const startedAt =
    item.startedAt.length === 7
      ? DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL)
      : DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL_DD).toFormat(
          DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
        );

  const title = (() => {
    if (item.endedAt) {
      const endedAt =
        item.endedAt.length === 7
          ? DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL)
          : DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL_DD).toFormat(
              DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
            );
      return `${startedAt} ~ ${endedAt}`;
    }
    return startedAt;
  })();

  return {
    left: {
      title,
    },
    right: {
      ...item,
    },
  };
}

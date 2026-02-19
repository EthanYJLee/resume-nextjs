import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IEducation } from './IEducation';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { useI18n } from '../../i18n/I18nProvider';

type Payload = IEducation.Payload;
type Item = IEducation.Item;

export const Education = {
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
    <CommonSection title={t('section.education')}>
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
  const [startedAt] = [item.startedAt].map((at) =>
    DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL),
  );

  const endedAt =
    item.endedAt === undefined
      ? ' '
      : [item.endedAt].map((at) =>
          DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL),
        );

  return {
    left: { title: `${startedAt} ~ ${endedAt}` },
    right: {
      ...item,
    },
  };
}

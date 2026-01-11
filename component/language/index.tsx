import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { ILanguage } from './ILanguage';
import { IRow } from '../common/IRow';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import Util from '../common/Util';

type Payload = ILanguage.Payload;
type Item = ILanguage.Item;

export const Language = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="LANGUAGE">
      <LanguageRow payload={payload} />
    </CommonSection>
  );
}

function LanguageRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
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
  const date = DateTime.fromFormat(item.date, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );

  const rightSubTitle = (() => {
    if (!item.certificate && !item.score) return undefined;
    if (item.certificate && item.score) return `${item.certificate} ${item.score}`;
    return item.certificate || item.score;
  })();

  return {
    left: { title: date },
    right: {
      title: item.title,
      subTitle: rightSubTitle,
      descriptions: item.descriptions,
    },
  };
}

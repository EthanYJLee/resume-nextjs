import { DateTime, Duration } from 'luxon';
import _debug from 'debug';
import { Locale } from '../../i18n/i18n';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = 'y년 M개월',
  DURATION_KINDNESS_ONLY_MONTH = 'M개월',
  DURATION_KINDNESS_ONLY_YEAR = 'y년',
}

function formatYearMonth({
  years,
  months,
  locale,
}: {
  years: number;
  months: number;
  locale: Locale;
}) {
  const y = Math.max(0, Math.floor(years));
  const m = Math.max(0, Math.floor(months));

  if (locale === 'en') {
    if (y > 0 && m === 0) return `${y} yr${y === 1 ? '' : 's'}`;
    if (y === 0 && m > 0) return `${m} mo`;
    if (y > 0 && m > 0) return `${y} yr${y === 1 ? '' : 's'} ${m} mo`;
    return '0 mo';
  }

  if (y > 0 && m === 0) return `${y}년`;
  if (y === 0 && m > 0) return `${m}개월`;
  if (y > 0 && m > 0) return `${y}년 ${m}개월`;
  return '0개월';
}

function getFormattingDuration(
  from: DateTime,
  to: DateTime = DateTime.local(),
  locale: Locale = 'ko',
) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month에 1개월 추가
  const diff = to.plus({ month: 1 }).diff(from, ['years', 'months']);

  log(diff.milliseconds, diff.get('years'), diff.get('months'));

  return formatYearMonth({
    years: diff.get('years'),
    months: diff.get('months'),
    locale,
  });
}

function formatTotalDuration(duration: Duration, locale: Locale = 'ko') {
  const shifted = duration.shiftTo('years', 'months');
  return formatYearMonth({
    years: shifted.get('years'),
    months: shifted.get('months'),
    locale,
  });
}

function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  formatTotalDuration,
  debug,
};

export default Util;

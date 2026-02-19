/* eslint-disable react/jsx-props-no-spreading */
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NextComponentType } from 'next';
import { I18nProvider } from '../i18n/I18nProvider';

export default function YosumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

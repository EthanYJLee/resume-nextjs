import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol, HrefTargetBlank } from '../common';

import { IFooter } from './IFooter';
import { Style } from '../common/Style';
import { useI18n } from '../../i18n/I18nProvider';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  const { t } = useI18n();
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank
                url="https://github.com/uyu423/resume-nextjs"
                text={t('footer.github')}
              />
              {' / '}
              {t('footer.thanksFor')}{' '}
              <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}

import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IProject } from './IProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { useI18n } from '../../i18n/I18nProvider';

type Payload = IProject.Payload;

export const Project = {
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
    <CommonSection title={t('section.project')}>
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}

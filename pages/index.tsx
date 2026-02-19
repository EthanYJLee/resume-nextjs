/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { Language } from '../component/language';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import { getPayload } from '../payload';
// import { OpenSource } from '../component/openSource';
// import { Presentation } from '../component/presentation';
// import { Article } from '../component/article';
import { Certificate } from '../component/certificate';
import { useI18n } from '../i18n/I18nProvider';

function Yosume() {
  const { locale } = useI18n();
  const payload = getPayload(locale);

  return (
    <>
      <NextSeo {...payload._global.seo} />
      <Head>
        <title>{payload._global.headTitle}</title>
        <link rel="shortcut icon" href={payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={payload.profile} />
        <Introduce.Component payload={payload.introduce} />
        <Skill.Component payload={payload.skill} />
        <Experience.Component payload={payload.experience} />
        <Project.Component payload={payload.project} />
        {/* <OpenSource.Component payload={Payload.openSource} /> */}
        {/* <Presentation.Component payload={Payload.presentation} /> */}
        {/* <Article.Component payload={Payload.article} /> */}
        <Education.Component payload={payload.education} />
        <Certificate.Component payload={payload.certificate} />
        <Language.Component payload={payload.language} />
        <Etc.Component payload={payload.etc} />
        <Footer.Component payload={payload.footer} />
      </Container>
    </>
  );
}

export default Yosume;

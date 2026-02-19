import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import language from './language';
import experience from './experience';
import openSource from './openSource';
import project from './project';
import presentation from './presentation';
import education from './education';
import certificate from './certificate';
import article from './article';
import etc from './etc';
import footer from './footer';

import { _global } from './_global';
import { Locale } from '../i18n/i18n';

import enProfile from './en/profile';
import enIntroduce from './en/introduce';
import { _global as enGlobal } from './en/_global';
import enSkill from './en/skill';
import enLanguage from './en/language';
import enExperience from './en/experience';
import enOpenSource from './en/openSource';
import enProject from './en/project';
import enPresentation from './en/presentation';
import enEducation from './en/education';
import enCertificate from './en/certificate';
import enArticle from './en/article';
import enEtc from './en/etc';
import enFooter from './en/footer';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { ILanguage } from '../component/language/ILanguage';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';
import { IPresentation } from '../component/presentation/IPresentation';
import { IEducation } from '../component/education/IEducation';
import { ICertificate } from '../component/certificate/ICertificate';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';
import { IArticle } from '../component/article/IArticle';

const basePayload: Payload = {
  profile,
  introduce,
  skill,
  language,
  openSource,
  experience,
  project,
  presentation,
  article,
  education,
  certificate,
  etc,
  footer,

  _global,
};

const overrides: Record<Locale, Partial<Payload>> = {
  ko: {},
  en: {
    profile: enProfile,
    introduce: enIntroduce,
    skill: enSkill,
    language: enLanguage,
    experience: enExperience,
    openSource: enOpenSource,
    project: enProject,
    presentation: enPresentation,
    article: enArticle,
    education: enEducation,
    certificate: enCertificate,
    etc: enEtc,
    footer: enFooter,
    _global: enGlobal,
  },
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override as T) ?? base;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  Object.keys(override).forEach((key) => {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];

    if (overrideValue === undefined) {
      return;
    }

    if (Array.isArray(baseValue) || Array.isArray(overrideValue)) {
      result[key] = overrideValue;
      return;
    }

    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(baseValue, overrideValue);
      return;
    }

    result[key] = overrideValue;
  });

  return result as T;
}

export function getPayload(locale: Locale): Payload {
  return deepMerge(basePayload, overrides[locale] || {});
}

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  language: ILanguage.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  certificate: ICertificate.Payload;
  article: IArticle.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export default basePayload;

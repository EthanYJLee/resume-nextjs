import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '경영학 전공을 통해 비즈니스 환경을 이해하는 시각을 갖추었고, 팀 기반 과제를 수행하며 협업과 커뮤니케이션 역량, 그리고 창의적 문제 해결력을 키웠습니다.',

    'K-Digital Training(빅데이터 분석 & 추천 시스템 개발자 양성 과정)에서 프로그래밍 기초를 탄탄히 다지고, 머신러닝을 접목한 앱/웹 개발 전반에 대한 이해를 넓혔습니다. 또한 실무형 프로젝트를 수행하며 문제 정의부터 구현, 검증까지의 경험을 쌓았습니다.',

    '헬스케어/의료기기 시스템(앱, 웹, 서버, DB) 유지보수를 담당하며 다양한 역량을 강화했고 서비스 개발 및 운영 경험을 축적했습니다. 사내 유일 개발자로서 전사 관점에서 IT 업무를 맡아 이슈를 해결하고 시스템 안정성을 높였습니다. 그 과정에서 프로젝트를 주도적으로 관리하는 방법과 협업의 중요성을 체감했으며, 변화하는 요구사항에 신속히 대응하는 유연함도 갖추게 되었습니다.',

    '고려대학교 지능정보 SW 아카데미에서 4개월간 머신러닝/딥러닝을 심화 학습하며 기술 역량을 한 단계 더 끌어올렸습니다.',

    '영화 배급 사업 관리 시스템, 환경성보장제도 재활용 관리 시스템 등 정확한 수치와 로직을 요하는 프로젝트를 담당한 경험이 있습니다.',

    '앞으로도 지속적으로 성장하며, 문제를 정확히 분석하고 신뢰할 수 있는 결과로 연결하는 개발자가 되겠습니다.',
  ],
  sign: 'Youngjin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  // latestUpdated: lastestUpdatedAt,
  latestUpdated: '2026-04-01',
};

export default introduce;

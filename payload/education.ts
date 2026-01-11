import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '고려대학교',
      subTitle: '지능정보 SW 아카데미 수료',
      startedAt: '2025-08',
      endedAt: '2025-12',
    },
    {
      title: 'K-Digital Training',
      subTitle: '빅데이터 분석 & 추천시스템 개발자 양성과정 수료',
      startedAt: '2022-09',
      endedAt: '2023-03',
    },
    {
      title: '세종대학교',
      subTitle: '호텔경영학 전공 학사 졸업',
      startedAt: '2014-03',
      endedAt: '2022-02',
    },
    {
      title: '서울세종고등학교',
      subTitle: '인문계열 졸업',
      startedAt: '2013-03',
      endedAt: '2014-02',
    },
    {
      title: 'The British School of Beijing',
      subTitle: '국제학교',
      startedAt: '2010-12',
      endedAt: '2012-12',
    },
  ],
};

export default education;

import { IEducation } from '../../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,
  list: [
    {
      title: 'Korea University',
      subTitle: 'Certificate in INISW Academy (Intelligent Information SW Academy) (640 hrs)',
      // startedAt: '2025-08-25',
      // endedAt: '2025-12-12',
      startedAt: '2025-08',
      endedAt: '2025-12',
    },
    {
      title: 'K-Digital Training',
      subTitle: 'Certificate in Big Data Analysis & Recommendation Systems program (1,080 hrs)',
      // startedAt: '2022-09-07',
      // endedAt: '2023-03-29',
      startedAt: '2022-09',
      endedAt: '2023-03',
    },
    {
      title: 'Sejong University',
      subTitle: 'B.A. in Hospitality Management (2.96/4.50)',
      startedAt: '2014-03',
      endedAt: '2022-02',
    },
    {
      title: 'Seoul Sejong High School',
      subTitle: 'General education track',
      startedAt: '2013-03',
      endedAt: '2014-02',
    },
    {
      title: 'The British School of Beijing',
      subTitle: 'Studied abroad in Beijing, China',
      startedAt: '2010-12',
      endedAt: '2012-12',
    },
  ],
};

export default education;

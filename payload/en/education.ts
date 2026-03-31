import { IEducation } from '../../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,
  list: [
    {
      title: 'Korea University',
      subTitle: 'Completed INISW Academy (Intelligent Information SW Academy)',
      startedAt: '2025-08-25',
      endedAt: '2025-12-12',
    },
    {
      title: 'K-Digital Training',
      subTitle: 'Completed Big Data Analysis & Recommendation Systems program',
      startedAt: '2022-09-07',
      endedAt: '2023-03-29',
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
      subTitle: 'Lived in China',
      startedAt: '2010-12',
      endedAt: '2012-12',
    },
  ],
};

export default education;

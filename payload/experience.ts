import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '주식회사 데이타늄',
      positions: [
        {
          title: 'SI사업부, 주임',
          startedAt: '2026-03',
          descriptions: [{ content: 'SHOWBOX CMS(콘텐츠사업관리시스템) 구축' }],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Oracle DB',
            'Html/Css/Javascript',
            'IntelliJ',
            'Linux',
          ],
        },
      ],
    },
    {
      title: '주식회사 메디아이오티',
      positions: [
        {
          title: '기업부설연구소, 연구원',
          startedAt: '2023-08',
          endedAt: '2024-12',
          descriptions: [
            {
              content: '헬스케어(AgingLOC), 의료기기연동(MEDI-EYE) 서비스 개발, 운영, 유지보수',
            },
            { content: '우분투 기반 운영 서버 자동화 및 개발 서버 구축' },
            { content: '레거시 시스템 리팩토링 및 소스코드 정리' },
            { content: '기업 홈페이지 개발', href: 'https://mediiot.co.kr/' },
            { content: '각종 과제 및 프로젝트 관리' },
          ],
          skillKeywords: [
            'Java',
            'Flutter',
            'Spring Boot',
            'JavaScript',
            'Node.js',
            'MeteorJS',
            'ReactJS',
            'MariaDB',
            'MongoDB',
            'Linux',
            'Docker',
          ],
        },
      ],
    },
    // {
    //   title: 'Open Source Community',
    //   positions: [
    //     {
    //       title: 'System Advocate and Developer',
    //       startedAt: '2010-06',
    //       endedAt: '2018-01',
    //       descriptions: [
    //         'Promoted the use and development of Linux globally.',
    //         'Developed automated scripts to streamline system configuration.',
    //         'Facilitated live patching systems, reducing downtime.',
    //       ],
    //       skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
    //     },
    //   ],
    // },
  ],
};

export default experience;

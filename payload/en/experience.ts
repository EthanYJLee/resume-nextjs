import { IExperience } from '../../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Medi-IoT Co., Ltd. (Medi-IoT)',
      positions: [
        {
          title: 'Corporate R&D Center, Research Engineer',
          startedAt: '2023-08',
          endedAt: '2024-12',
          descriptions: [
            {
              content: 'Developed, operated, and maintained in-house services (AgingLOC, MEDI-EYE)',
            },
            { content: 'Automated Linux server operations and set up development servers' },
            { content: 'Refactored legacy systems and organized codebases for maintainability' },
            { content: 'Built the company website', href: 'https://mediiot.co.kr/' },
            { content: 'Managed government-funded tasks and SI projects end-to-end' },
            { content: 'Current Salary: KRW 30,000,000; Expected Salary: Negotiable' },
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
  ],
};

export default experience;

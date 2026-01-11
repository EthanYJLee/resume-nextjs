import { ILanguage } from '../component/language/ILanguage';

const language: ILanguage.Payload = {
  disable: false,
  list: [
    // 예시) 필요에 맞게 수정하세요
    // {
    //   title: 'Korean',
    //   level: 'Native',
    // },
    // {
    //   title: 'English',
    //   level: 'Business',
    //   descriptions: [
    //     { content: 'OPIc IH (2025-01)' },
    //     { content: 'Technical communication (docs, issue discussion)' },
    //   ],
    // },
    {
      title: '영어',
      date: '2025-08',
      certificate: 'TOEIC',
      score: '890',
    },
    {
      title: '일본어',
      date: '2025-08',
      certificate: 'TOEIC',
      score: '890',
    },
  ],
};

export default language;

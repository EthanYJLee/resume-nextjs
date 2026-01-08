import { ICertificate } from '../component/certificate/ICertificate';

const certificate: ICertificate.Payload = {
  disable: false,
  list: [
    // 예시) 필요에 맞게 수정하세요
    // {
    //   title: 'AWS Certified Cloud Practitioner',
    //   issuer: 'Amazon Web Services (AWS)',
    //   acquiredAt: '2024-06',
    //   credentialId: 'ABC-123456',
    //   credentialUrl: 'https://...',
    // },
    {
      title: 'AICE - ASSOCIATE',
      issuer: 'KT & 한국경제신문 (A251121010000084607)',
      acquiredAt: '2025-11',
    },
    {
      title: '정보처리기사',
      issuer: '한국산업인력공단 (25201011036G)',
      acquiredAt: '2025-06',
    },
    {
      title: 'SQL 개발자',
      issuer: '한국데이터산업진흥원 (SQLD-056003108)',
      acquiredAt: '2025-04',
    },
    {
      title: '데이터 분석 준전문가',
      issuer: '한국데이터산업진흥원 (ADsP-036000940)',
      acquiredAt: '2023-03',
    },
    {
      title: '프로그래밍기능사',
      issuer: '한국산업인력공단 (16652501789N)',
      acquiredAt: '2016-12',
    },
  ],
};

export default certificate;

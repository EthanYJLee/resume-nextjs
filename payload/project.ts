import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AgingLOC 운동 처방 관리자 페이지 개발',
      startedAt: '2024-10',
      endedAt: '2024-12',
      where: '(주)메디아이오티 (Medi-IoT)',
      descriptions: [
        {
          content:
            '질병군/성별/연령 → 주차 → 세부 프로그램으로 이어지는 복합 입력 도메인을 관리자 화면의 입력 플로우로 설계·구현',
        },
        {
          content:
            '운영 효율을 위해 드래그앤드롭 편집 기능을 구현하여 처방/프로그램 편집 시간을 단축하고, 입력 실수를 줄일 수 있는 UI 제공',
        },
        {
          content: '입력 로직을 DB 저장/조회 중심으로 설계해 데이터 정합성과 운영 안정성을 강화',
        },
        {
          content:
            '임시저장/세션 저장/최종 조회 흐름을 구성하여 작성 중 이탈·오류 상황에서도 재작업 비용을 줄임',
        },
      ],
    },
    {
      title: 'MEDI-EYE 서버 이전·배포 체계 구축 및 운영 안정화',
      startedAt: '2024-07',
      endedAt: '2024-12',
      where: '(주)메디아이오티 (Medi-IoT)',
      descriptions: [
        {
          content:
            '운영 서버 이전 과정에서 Ubuntu–Docker–Tomcat 기반 .war 배포 체계를 구성해 운영 서버 이전 후 서비스 가동 환경을 안정화',
        },
        {
          content:
            '운영 로그 백업/정리 작업을 스크립트화하고 Cron Job으로 자동 실행해 운영 누락 리스크를 감소',
        },
        {
          content:
            'DNS 및 SSL 인증서 갱신/도메인 반영을 통해 실서비스 접근 환경을 정비하고 운영 장애 가능성을 사전에 차단',
        },
        {
          content:
            '운영 중 핵심 기능 결함 (환자 ID 전달, 치료지시, 페이징 등)을 테스트로 발견·재현하여 수정 요청 (요건 정리/재현 절차 포함) 및 반영 결과 최종 검증',
        },
        {
          content: '서버/디렉토리 구조를 문서화하여 인수인계·유지보수 비용을 절감',
        },
        // {
        //   content:
        //     '로그 복사 스크립트와 Cron Job으로 운영 작업 자동화(반복 업무 감소 및 운영 안정성 확보)',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: '30% improvement in system resource efficiency' },
        //     { content: 'Job Scheduler Refactor and Optimization' },
        //   ],
        // },
      ],
    },
    {
      title: '도로 균열 (싱크홀) 실시간 모니터링 시스템 개발',
      startedAt: '2024-04',
      endedAt: '2024-06',
      where: '(주)메디아이오티 (Medi-IoT)',
      descriptions: [
        {
          content:
            '카메라 연속 촬영 (프리뷰)과 균열 추론을 Isolate로 병렬화하여 UI 스레드 블로킹을 완화',
        },
        {
          content: '감지 결과 바운딩 박스를 실시간 오버레이로 렌더링해 모니터링 사용성을 확보',
        },
        {
          content:
            'FastAPI–MySQL 기반 저장 API를 구현하고, 결과 이미지를 파일 시스템에 저장·후처리하는 파이프라인을 구성',
        },
        {
          content:
            '위치 기반 현장 기록을 위해 지도/GPS 표시 기능을 결합하여 어디에서 감지되었는지를 남기는 서비스 가치 강화',
        },
        {
          content:
            '운영 관점의 추적성을 위해 로컬 로그 저장/조회 흐름을 구성 (SQLite 로그 CRUD 등)하고, 현장 이슈 재현/분석이 가능하도록 개선',
        },
      ],
    },
    {
      title: 'AgingLOC 커뮤니티 기능 개발',
      startedAt: '2024-01',
      endedAt: '2024-03',
      where: '(주)메디아이오티 (Medi-IoT)',
      descriptions: [
        {
          content:
            '커뮤니티 기능을 운영 가능한 형태로 개발 (게시글/댓글·대댓글/좋아요/신고 등)하여 사용자 참여 기능을 확보',
        },
        {
          content:
            '게시글/댓글·대댓글/좋아요/신고 스키마를 설계하고 ID·중복 체크·등록 플로우를 구현해 데이터 정합성을 확보',
        },
        {
          content:
            '사용자 상태 (등록 여부)에 따른 진입 분기 등 실제 사용 시나리오 기준으로 화면·로직을 정리하여 이탈/오류를 줄이는 흐름을 구현',
        },
      ],
    },

    {
      title: 'AgingLOC 서비스 인수·출시 및 운영 안정화',
      startedAt: '2023-08',
      endedAt: '2023-12',
      where: '(주)메디아이오티 (Medi-IoT)',
      descriptions: [
        {
          content:
            'SI 개발 산출물 인수 후 릴리즈 가능 상태로 품질을 끌어올리는 과정을 주도 (기능 점검, 결함 수집·분류, 수정·검증)',
        },
        {
          content:
            'Google Play·App Store 출시를 완료하고, 사용성 테스트 기간에 발견된 결함을 반복 수정하여 초기 서비스 품질을 안정화',
        },
        {
          content:
            '딥링크/스토어 이슈를 해결 (SHA256 지문 설정 등)하고, 인증·보안 로직 (AES 암호화, 액세스•리프레시 토큰, 시스템 점검 페이지)을 정비해 릴리즈 리스크를 낮춤',
        },
      ],
    },
  ],
};

export default project;

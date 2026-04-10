import { IProject } from '../../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'SHOWBOX CMS - Content Business Management System',
      startedAt: '2026-03',
      // endedAt: '2026-05',
      where: 'Datanium Co., Ltd.',
      descriptions: [
        {
          content:
            'Built a unified SHOWBOX system by integrating and customizing film, broadcast, and enterprise-wide systems',
        },
        {
          content:
            'Verified design documents; unit/integration testing, feature development, and stabilization',
        },
        { content: 'Developed ERP and groupware integration interfaces' },
      ],
    },
    {
      title: 'Lumiply – Indoor lighting relighting service PoC',
      startedAt: '2025-10',
      endedAt: '2025-12',
      where: 'Korea University INISW (Architecture Lead & AI Engineer)',
      descriptions: [
        {
          content:
            'Led overall architecture and implementation in a 4-person team; developed the Lumiply AI engine by testing/tuning the baseline LumiNet model',
        },
        {
          content:
            'Designed and built an end-to-end PoC that places virtual lights on indoor photos, compares relighting results across 7 colors, and saves outputs',
        },
        {
          content:
            'Collected data via indoor image crawling and established a collect–experiment–feedback loop using augmentation and metrics such as SSIM/LPIPS',
        },
        {
          content:
            'Fixed inconsistencies between editor light placement/size and composited results across various aspect ratios (e.g., tall images)',
        },
        {
          content:
            'Served inference via Flask + ngrok under Colab GPU constraints; implemented async job/polling flow (including timeouts/fail states) in FastAPI',
        },
        {
          content:
            'Improved perceived latency by progressively rendering partial results per color with progress messages instead of waiting for the final output',
        },
        {
          content:
            'Optimized Colab runtime by loading the base model once and sequentially applying color-specific adapters before returning results',
        },
      ],
    },
    {
      title: 'AgingLOC – Admin dashboard for exercise prescriptions',
      startedAt: '2024-10',
      endedAt: '2024-12',
      where: 'Medi-IoT Co., Ltd.',
      descriptions: [
        {
          content:
            'Designed and implemented an input flow for a complex domain (disease group/sex/age → week → detailed program) tailored for admin operations',
        },
        {
          content:
            'Implemented drag-and-drop editing to reduce prescription/program editing time and prevent input mistakes',
        },
        {
          content:
            'Built draft/session/final review flows to reduce rework cost during navigation away or error situations',
        },
      ],
    },
    {
      title: 'MEDI-EYE – Server migration and deployment system stabilization',
      startedAt: '2024-07',
      endedAt: '2024-12',
      where: 'Medi-IoT Co., Ltd.',
      descriptions: [
        {
          content:
            'Established a Ubuntu–Docker–Nginx WAR deployment pipeline to stabilize production environment after server migration',
        },
        {
          content:
            'Scripted log backup/cleanup and automated with cron jobs to reduce operational omissions',
        },
        {
          content:
            'Improved production access reliability by configuring DNS and renewing SSL certificates proactively',
        },
        {
          content:
            'Identified and reproduced critical defects (patient ID, paging, orders, etc.), prepared reproducible steps, and validated fixes after deployment',
        },
        {
          content: 'Documented server and directory structure to reduce handover/maintenance cost',
        },
      ],
    },
    {
      title: 'Road crack (sinkhole) real-time monitoring system',
      startedAt: '2024-04',
      endedAt: '2024-06',
      where: 'Medi-IoT Co., Ltd.',
      descriptions: [
        {
          content:
            'Parallelized continuous camera preview and crack inference with isolates to reduce UI thread blocking',
        },
        {
          content:
            'Rendered detection bounding boxes as real-time overlays to improve monitoring usability',
        },
        {
          content:
            'Implemented FastAPI–MySQL storage API and built a pipeline to store and post-process result images on the filesystem',
        },
        {
          content:
            'Integrated map/GPS features to log where detections occurred, increasing operational traceability',
        },
        {
          content:
            'Implemented local log storage and viewing (SQLite CRUD) to support on-site issue reproduction and analysis',
        },
      ],
    },
    {
      title: 'AgingLOC – Community features',
      startedAt: '2024-01',
      endedAt: '2024-03',
      where: 'Medi-IoT Co., Ltd.',
      descriptions: [
        {
          content: 'Delivered operable community features to enable user participation',
        },
        {
          content:
            'Designed schemas and flows for posts/comments/replies/likes/reports with ID and duplication checks to ensure data consistency',
        },
        {
          content:
            'Implemented scenario-based UI and logic (e.g., gating by registration state) to reduce drop-offs and errors',
        },
      ],
    },
    {
      title: 'AgingLOC – Service takeover, launch, and operations stabilization',
      startedAt: '2023-08',
      endedAt: '2023-12',
      where: 'Medi-IoT Co., Ltd.',
      descriptions: [
        {
          content:
            'Led takeover of SI deliverables and drove quality to a release-ready state (feature verification, defect collection/classification, fixes/validation)',
        },
        {
          content:
            'Completed Google Play/App Store launches and iteratively fixed defects found during usability testing to stabilize early quality',
        },
        {
          content:
            'Resolved deep link/store issues (e.g., SHA256 fingerprints) and improved auth/security logic (AES encryption, access/refresh tokens, maintenance pages)',
        },
      ],
    },
  ],
};

export default project;

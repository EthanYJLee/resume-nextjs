import { ISkill } from '../../component/skill/ISkill';

// Most skill names/categories are already English in ko payload,
// so we keep the same structure for en.

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    { title: 'Java', level: 3 },
    { title: 'Python', level: 3 },
    { title: 'Dart', level: 3 },
    { title: 'JavaScript', level: 2 },
  ],
};

const frameworksAndLibraries: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    { title: 'Spring Boot', level: 3 },
    { title: 'ReactJS', level: 3 },
    { title: 'Flutter', level: 3 },
    { title: 'FastAPI/Flask', level: 2 },
  ],
};

const infrastructureAndDatabases: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    { title: 'MySQL/MariaDB', level: 3 },
    { title: 'MongoDB', level: 3 },
    { title: 'Oracle DB', level: 2 },
    { title: 'Docker', level: 2 },
    { title: 'Linux', level: 2 },
    { title: 'nginx/Apache', level: 2 },
  ],
};

const toolsAndIDEs: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    { title: 'Git', level: 3 },
    { title: 'VS Code', level: 3 },
    { title: 'GitHub', level: 2 },
    { title: 'Xcode', level: 2 },
    { title: 'Eclipse', level: 1 },
    { title: 'STS', level: 1 },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworksAndLibraries, infrastructureAndDatabases, toolsAndIDEs],
  // tooltip: '1: Basics\n2: Hobby / side projects\n3: Production-ready',
};

export default skill;

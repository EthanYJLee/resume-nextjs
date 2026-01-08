import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Dart',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 2,
    },
    {
      title: 'C',
      level: 1,
    },
    {
      title: 'Swift',
      level: 1,
    },
  ],
};

const frameworksAndLibraries: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'ReactJS',
      level: 3,
    },
    {
      title: 'Flutter',
      level: 3,
    },
    {
      title: 'Express.js',
      level: 2,
    },
    {
      title: 'FastAPI',
      level: 2,
    },
    {
      title: 'Flask',
      level: 2,
    },
  ],
};

const infrastructureAndDatabases: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'MySQL/MariaDB',
      level: 3,
    },
    {
      title: 'MongoDB',
      level: 3,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'Linux',
      level: 2,
    },
    {
      title: 'nginx/Apache',
      level: 2,
    },
  ],
};

const toolsAndIDEs: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Git',
      level: 3,
    },
    {
      title: 'VS Code',
      level: 3,
    },
    {
      title: 'Github',
      level: 2,
    },
    {
      title: 'Xcode',
      level: 2,
    },
    {
      title: 'Eclipse',
      level: 1,
    },
    {
      title: 'STS',
      level: 1,
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
    {
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: "Rubik's Cube Solving",
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    languages,
    frameworksAndLibraries,
    infrastructureAndDatabases,
    toolsAndIDEs,
    // networkSecurity,
    // misc,
    // certifications,
  ],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;

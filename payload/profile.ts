import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
// import image from '../asset/sample_tux.png';
import image from '../asset/youngjinlee.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이영진',
    small: '(Ethan)',
  },
  contact: [
    {
      title: 'lyj72011648@gmail.com',
      link: 'mailto:lyj72011648@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/EthanYJLee',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
    {
      link: 'https://www.linkedin.com/in/yjethanlee/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;

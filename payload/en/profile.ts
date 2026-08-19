import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../../component/profile/IProfile';
// import image from '../../asset/profile_image.jpg';
import image from '../../asset/260803_profile.jpeg';

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: {
    title: 'Youngjin Lee',
    small: '',
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
    {
      link: 'https://www.linkedin.com/in/yjethanlee/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title:
      "The content below is based on the 'resume-nextjs' template and has been customized for my resume.",
    icon: faBell,
  },
};

export default profile;

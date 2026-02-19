import favicon from '../../asset/favicon.ico';
import previewImage from '../../asset/preview.jpg';
import { IGlobal } from '../../component/common/IGlobal';

const title = 'Resume | Youngjin Lee';
const description = 'Software engineer resume.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph preview image',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Youngjin',
        lastName: 'Lee',
        username: 'ethanyjlee',
        gender: 'male',
      },
    },
  },
};

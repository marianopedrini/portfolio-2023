import { DefaultLink, Company, WorkExperience, Skills, Work } from '@/types';

export const menuLinks: DefaultLink[] = [
  {
    text: 'About',
    link: '/#about',
  },
  {
    text: 'Carreer',
    link: '/#carreer',
  },
  {
    text: 'Work',
    link: '/#work',
  },
];

export const contactLinks: DefaultLink[] = [
  {
    link: 'mailto:pedrini.mariano96@gmail.com',
    text: 'pedrini.mariano96@gmail.com',
    appName: 'Gmail',
  },
  {
    link: 'https://www.linkedin.com/in/marianopedrini/',
    text: 'https://www.linkedin.com/in/marianopedrini/',
    appName: 'Linkedin',
  },
  {
    link: 'https://github.com/marianopedrini',
    text: 'https://github.com/marianopedrini',
    appName: 'Github',
  },
  {
    link: 'https://twitter.com/marianpedrini',
    text: 'https://twitter.com/marianpedrini',
    appName: 'X',
  },
];

export const carreerItems: WorkExperience[] = [
  {
    period: '2020',
    companies: [
      {
        id: 1,
        description: 'I started learning web development.',
      },
    ],
  },
  {
    period: `2021 - 2022`,
    companies: [
      {
        id: 2,
        link: 'https://www.thesandbox.com.ar/',
        name: 'The Sandbox - Fullstack Developer',
        description:
          'I worked with technolgies like HTML, CSS, Javascript, Php + Laravel, Ionic and Vue. ',
      },

      {
        id: 3,
        description: 'I also started taking some freelance jobs.',
      },
    ],
  },
  {
    period: '2022 - now',
    companies: [
      {
        id: 4,
        link: 'https://egodesign.io/',
        name: 'Agencia Ego - Software Developer. ',
        description:
          'I’m currently working at Agencia Ego, creating experiences for important international brands recognized worldwide. I work with HTML, CSS, Javascript, React and Python (Django).',
      },
    ],
  },
];

export const skills: Skills = {
  main: {
    title: 'Main',
    items: [
      'Html',
      'Css',
      'Javascript',
      'React',
      'Tailwind',
      'Sass',
      'Next',
      'Styled-components',
      'Git',
    ],
  },
  other: {
    title: 'Other / learning',
    items: ['Typescript', 'Laravel', 'Django', 'Express', 'SQL'],
  },
};

export const works: Work[] = [
  {
    slug: 'calsa',
    name: 'Calsa',
    image: {
      url: '/calsa-sq.png',
      urlBig: '/calsa.png',
      alt: 'Image of a woman making bread',
    },
    company: 'The Sandbox',
    info: 'Website for Calsa, the leading bread-making company in Argentina. On their site, you can find information and recipes to create using their products.',
    role: 'I was responsible for maintaining the site and implementing new features requested by the client.',
    stack: ['Html', 'Css', 'Javascript', 'Laravel', 'Vue'],
    links: ['https://www.calsa.com.ar'],
  },
  {
    slug: 'salud-digestiva',
    name: 'Salud Digestiva',
    image: {
      urlBig: '/salud.png',
      url: '/salud-sq.png',
      alt: 'Image of macbook pro with the site as background',
    },
    company: 'The Sandbox',
    info: 'Website belonging to Eurofarma laboratory with a large amount of content related to digestive health.',
    role: 'I played a key role in the design, development, and subsequent maintenance of the website, from its inception to its release.',
    stack: ['Html', 'Css', 'Javascript', 'Laravel'],
  },
  {
    slug: 'lpharma-consultores',
    name: 'Lpharma',
    image: {
      urlBig: '/lpharma.png',
      url: '/lpharma-sq.png',
      alt: 'Lpharma Consultores logo next to a bottle of tablets.',
    },
    company: 'Freelance',
    info: 'I developed this website for Lpharma Consultores, a leading consulting firm in the market.',
    role: 'I developed this site from start to finish and was responsible for some design decisions',
    stack: ['Html', 'Css', 'Javascript'],
    links: ['https://www.lpharmaconsultores.com/'],
  },
  {
    slug: 'ugd',
    name: 'Un gran dia',
    image: {
      urlBig: '/ugd.png',
      url: '/ugd-sq.png',
      alt: 'Image of UGD app opening',
    },
    company: 'The Sandbox',
    info: 'UGD (Un Gran Día) is an app created to support smokers on their journey to quit smoking. It was developed in collaboration with the Argentine Association of Respiratory Medicine (AAMR).',
    role: "I was part of the application's development from the beginning to its first release on the app stores.",
    stack: ['Html', 'Css', 'Javascript', 'Ionic', 'Angular'],
  },
];

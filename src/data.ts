import { DefaultLink, Company, CareerExperience, Skills, Work } from '@/types';

export const mainPhrase: string =
  "I'm Mariano, a frontend developer who has a passion for JavaScript, design, and animations.";

export const aboutTexts: string[] = [
  "I am a frontend developer from Argentina, with 3 years of experience in web development. I'm a JavaScript enthusiast, and currently, I'm learning about advanced and high-performance animations.",
  'I studied industrial design for a few years at UBA, which gave me a design background that I apply in my career today.',
  'I love creating and developing amazing things with beautiful and interactive interfaces while constantly seeking new knowledge.',
];

export const menuLinks: DefaultLink[] = [
  {
    text: 'About',
    link: '/#about',
  },
  {
    text: 'Career',
    link: '/#career',
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
  //   {
  //     link: 'https://twitter.com/marianpedrini',
  //     text: 'https://twitter.com/marianpedrini',
  //     appName: 'X',
  //   },
];

export const careerItems: CareerExperience[] = [
  {
    period: 'Now - 2022',
    companies: [
      {
        id: 4,
        link: 'https://egodesign.io/',
        name: 'Ego Agency',
        job: 'Software Developer',
        description:
          'I’m currently working at Agencia Ego, creating experiences for important international brands recognized worldwide like Toyota Chile, Kinto, Lexus, Veritran and many others. I work with HTML, CSS, Javascript, React and Python (Django).',
      },
    ],
  },

  {
    period: `2022 - 2021`,
    companies: [
      {
        id: 2,
        link: 'https://www.thesandbox.com.ar/',
        name: 'The Sandbox',
        job: 'Fullstack Developer',
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
    period: '2020',
    companies: [
      {
        id: 1,
        link: 'https://www.digitalhouse.com/ar',
        name: 'Digital House',
        description: 'I started learning web development.',
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
    items: ['GSAP', 'Typescript', 'Django', 'Express', 'SQL'],
  },
};

export const works: Work[] = [
    {
        id: 1,
        slug: 'portfolio',
        name: '2023 Portfolio',
        image: {
          url: '/images/portfolio-2023.png',
          alt: 'Image of 2023 portfolio',
        },
        company: 'Personal Project',
        info: 'My current portfolio.',
        role: 'This site was designed by me and is made using latest technologies.',
        stack: ['Next','React', 'Tailwind', 'Html', 'Css'],
        links: undefined,
      },
  {
    id: 2,
    slug: 'avicii',
    name: 'Avicii Fanpage',
    image: {
      url: '/images/avicii.png',
      alt: 'Image of Avicii fanpage',
    },
    company: 'Personal Project',
    info: 'A personal project created in memory of Avicii to hone my skills and reinforce key concepts.',
    role: 'Both the development and the simple design were carried out by me. I did the design in Figma, and I implemented the development using React and Tailwind CSS.',
    stack: ['React', 'Tailwind', 'Html', 'Css', 'Javascript'],
    links: ['https://avicii-mp.vercel.app/'],
  },
  {
    id: 3,
    slug: 'calsa',
    name: 'Calsa',
    image: {
      url: '/images/calsa.png',
      alt: 'Image of a woman making bread',
    },
    company: 'The Sandbox',
    info: 'Website for Calsa, the leading bread-making company in Argentina. On their site, you can find information and recipes to create using their products.',
    role: 'I was responsible for maintaining the site and implementing new features requested by the client.',
    stack: ['Html', 'Css', 'Javascript', 'Laravel', 'Vue'],
    links: ['https://www.calsa.com.ar'],
  },
  {
    id: 4,
    slug: 'studio-ghibli',
    name: 'Studio Ghibli',
    image: {
      url: '/images/ghibli.png',
      alt: 'Image of Ghibly studio',
    },
    company: 'Personal Project',
    info: 'Own project created to reinforce concepts such as API integration, handling favorites (stored in LocalStorage), basic animations, and error or empty state management.',
    role: 'Both the development and the simple design were carried out by me. I did the design in Figma, and I implemented the development using React and Tailwind CSS.',
    stack: ['Html', 'Css', 'Javascript', 'React', 'Tailwind'],
    links: ['https://studio-ghibli-mp.vercel.app/'],
  },
  {
    id: 5,
    slug: 'salud-digestiva',
    name: 'Salud Digestiva',
    image: {
      url: '/images/salud.png',
      alt: 'Image of macbook pro with the site as background',
    },
    company: 'The Sandbox',
    info: 'Website belonging to Eurofarma laboratory with a large amount of content related to digestive health.',
    role: 'I played a key role in the design, development, and subsequent maintenance of the website, from its inception to its release.',
    stack: ['Html', 'Css', 'Javascript', 'Laravel'],
    links: undefined,
  },
  {
    id: 6,
    slug: 'lpharma-consultores',
    name: 'Lpharma',
    image: {
      url: '/images/lpharma.png',
      alt: 'Lpharma Consultores logo next to a bottle of tablets.',
    },
    company: 'Freelance',
    info: 'I developed this website for Lpharma Consultores, a leading consulting firm in the market.',
    role: 'I developed this site from start to finish and was responsible for some design decisions',
    stack: ['Html', 'Css', 'Javascript'],
    links: ['https://www.lpharmaconsultores.com/'],
  },
//   {
//     id: 7,
//     slug: 'ugd',
//     name: 'Un gran dia',
//     image: {
//       url: '/images/ugd.png',
//       alt: 'Image of UGD app opening',
//     },
//     company: 'The Sandbox',
//     info: 'UGD (Un Gran Día) is an app created to support smokers on their journey to quit smoking. It was developed in collaboration with the Argentine Association of Respiratory Medicine (AAMR).',
//     role: "I was part of the application's development from the beginning to its first release on the app stores.",
//     stack: ['Html', 'Css', 'Javascript', 'Ionic', 'Angular'],
//     links: [
//       'https://apps.apple.com/no/app/un-gran-d%C3%ADa-dejar-de-fumar/id6443335749',
//     ],
//   },
];

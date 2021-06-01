import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'HOME | pewriebontal', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "pewriebontal's landing page",
  keywords: 'Pewrie Bontal, pewriebontal, Min Thu Khine, pewriebontal.ml',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'pewriebontal',
  subtitle: "I'm a 18 yrs old boy.",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "My name is pewriebontal and I'm Unity3d developer.",
  paragraphTwo: "I'm 18 yrs old and live in Burma.",
  paragraphThree: 'Currently working on pacman 3D and I like to watch movies.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  /* {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Send Mail',
  email: 'hello@pewriebontal.ml',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/pewriebontal',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/pewriebontal',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pewriebontal/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pewriebontal',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

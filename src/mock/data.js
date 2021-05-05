import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'HOME | pewriebontal', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "pewriebontal's landing page", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'pewriebontal',
  subtitle: "I'm a 18 yrs old boy",
  cta: "OK, I don't care!",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "My name is pewriebontal and I'm Unity developer.",
  paragraphTwo: "I'm 18 yrs old and live in Burma.",
  paragraphThree: 'Currently working on PACMAN 3D and I like to watch movies.',
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
  cta: '',
  btn: '',
  email: 'pewriebontal@outlook.com',
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

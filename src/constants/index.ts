// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  python,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  Eventum,
  Travelease,
  uni_clo,
  portfolio,
  swipehire,
  v2_hair,
  youtube,
  linkedin,
  instagram,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "projects",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Traveller",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
] as const;


// Projects
export const PROJECTS = [
  {
    name: "Eventum",
    description:
      "Eventum is a sleek event management platform designed for simplicity and speed. Users can create, browse, and register for events with ease.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Eventum,
    source_code_link: "https://github.com/Ayushkashyap011/Eventum",
    live_site_link: "https://eventum4u.netlify.app/",
  },
  
  {
    name: "Portfolio",
    description:
      "Portfolio is a personal branding site showcasing projects, skills, and achievements — crafted to leave a bold digital impression.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "V2-Hair-Saloon",
    description:
      "V2 Hair Saloon is a modern web app for hassle-free salon appointment booking. It features OTP-based login/signup and separate dashboards for users and admins.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: v2_hair,
    source_code_link: "https://github.com/Ayushkashyap011/V2-hair-saloon",
    live_site_link: "https://v2-hair-saloon.onrender.com/",
  },
  {
    name: "TravelEase",
    description:
      "TravelEase is a smart bus reservation system that lets users book, manage, and track bus rides with ease — featuring real-time schedules, seat selection, and seamless ticketing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Travelease,
    source_code_link: "https://github.com/Ayushkashyap011/",
    live_site_link: "https://eventum4u.netlify.app/",
  },
  {
    name: "UNI-CLO",
    description:
      "This project is an e-commerce website designed for a men's clothing store named UNI_CLO. The site features a clean, modern layout with a focus on ease of navigation.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: uni_clo,
    source_code_link: "https://github.com/Ayushkashyap011",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
  {
    name: "SwipeHire",
    description:
      "This project is an e-commerce website designed for a men's clothing store named UNI_CLO. The site features a clean, modern layout with a focus on ease of navigation.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "JWT-Token",
        color: "pink-text-gradient",
      },
    ],
    image: swipehire,
    source_code_link: "https://github.com/Ayushkashyap011",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

// export const CERTIFICATES = [
//   {
//     name: "Full Stack Web Development",
//     image: "aws", // Just the file name, folder is fixed in component
//   },
//   {
//     name: "Data Structures in JavaScript",
//     image: "dsjs.png",
//   },
//   // Add more certificates here
// ];

  

export const SOCIALS = [
  
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ayush-kashyap-097681259/",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/kashyap9317/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Ayushkashyap011/",
  },
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/.",
  },
] as const;

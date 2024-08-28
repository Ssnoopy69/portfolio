import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  dstu,
  users,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Three.js Developer",
    company_name: "AYD",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Built interactive 3D visualizations with Three.js, boosting user engagement on the clothing site.",
      "Integrated 3D models into the website, improving product visualization and user experience.",
      "Optimized SQL database queries, improving data retrieval speed and overall site performance.",
      "Added popup ads to the website to showcase new collections, boosting user awareness and interest.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "NNA",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2024 - April 2022",
    points: [
      "Developed an AI-powered chatbot for a mobile app Kidcare for control parental, enhancing user engagement and personalization.",
      "Spearheaded the integration of third-party APIs into a web application, expanding its functionality and attracting new user segments.",
      "Implemented a responsive design for a web application, ensuring optimal performance and usability across all devices.",
      "Maintained and updated APIs, ensuring seamless integration and functionality while promptly fixing errors on websites to enhance reliability and user experience.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "THE REVISION",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - April 2023",
    points: [
      "Developed and maintained dynamic websites with customized themes and plugins.",
      "Crafted responsive web designs ensuring seamless display across various devices.",
      "Designed and managed relational databases to support web applications.",
      "Created detailed 3D models of cars and other objects for enhanced visual appeal.",
      "Managed game modifications, enhancing gameplay with custom textures and models.",
    ],
  },
  {
    title: "3D VR Game for chemical reaction Developer",
    company_name: "DSTU",
    icon: dstu,
    iconBg: "#383E56",
    date: "Jan 2022 - July 2022",
    points: [
      "Developed a Unity3D educational mobile game with a custom 3D-VR interface.",
      "Led the game development project, achieving high user satisfaction and positive feedback from educators.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and pointing constructive feedback from other educators.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Tunet Business",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - April 2023",
    points: [
      "Developed a Unity3D mobile game that effectively introduced players to Tunisian traditions, receiving acclaim for its educational value.",
      "Designed an engaging 3D interface that significantly enhanced user immersion and interaction with Tunisian cultural content.",
      "Designed and managed relational databases to support Unity3D game application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "J'apprécie beaucoup votre travail. Vous êtes vraiment talentueux.",
    name: "Nour Ben Yahia",
    designation: "CEO",
    company: " Tech Accessibility",
    image: users,
  },
  {
    testimonial:
      "Ce fut un réel plaisir de travailler avec vous. Vous rendez tout si simple et agréable!",
    name: "Toumi Hamza",
    designation: "COO",
    company: "NNA Resources",
    image: users,
  },
  {
    testimonial: "Вы отличный человек, желаю вам всего самого лучшего в жизни.",
    name: "Елена Сергеевна",
    designation: "Руководитель студии",
    company: "Липецкий государственный педагогический университет (ЛГПУ)",
    image: users,
  },
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "An e-commerce site offering trendy T-shirts with a sleek logo and elegant traditional Arabic clothing, blending modern style with cultural heritage for a unique shopping experience.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ssnoopy69/khlifa-store",
  },
  {
    name: "Kidcare",
    description:
      "A mobile app using AI to provide comprehensive parental control, enabling parents to monitor and manage their children's device usage for safer and healthier digital habits.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ssnoopy69/ChatBot-Kidcare",
  },
  {
    name: "The Revision",
    description:
      "A web application to manage a gaming server and track your character data, offering seamless server administration and real-time character monitoring for an enhanced gaming experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ssnoopy69/revisioi-panel",
  },
];

export { services, technologies, experiences, testimonials, projects };

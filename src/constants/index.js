import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  firebase,
  html,
  css,
  reactjs,
  tailwind,
  vite,
  git,
  next,
  geex,
  ism,
  hitsb,
  hit,
  simon,
  taskmaster,
  solar,
  threejs,
  passgen,
  checkr,
  teambrain,
  ece,
  finai,
  pypigeon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "C++ Development",
    icon: mobile,
  },
  {
    title: "Backend Integration",
    icon: backend,
  },
  {
    title: "UI/UX Design",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Next",
    icon: next,
  },
];

const experiences = [
    {
    title: "React Developer",
    company_name: "GEEX",
    icon: geex,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Hackfest-25, IIT ISM Dhanbad",
    icon: ism,
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Developing and maintaining web application using React.js, Three.js and Next.js",
      "Collaborating with cross-functional teams including designers, ml engineers and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code presentation and getting constructive feedback on our product.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "IEEE HIT Student Branch",
    icon: hitsb,
    iconBg: "#383E56",
    date: "April 2025 - present",
    points: [
      "Developing and maintaining fully functional website using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create entire product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ECE Department, Haldia Institute of Technology",
    icon: hit,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Dec 2025",
    points: [
     "Developing and maintaining fully functional website using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create entire product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Our website was very much older, so we given it to Prem for some UI updates and improvements. Earlier it was'nt that much secure Prem suggested us to integrate authentication & our data is more secure & UI is also very good.",
    name: "Prof. Dr. Chanchal Kumar Dey",
    designation: "HOD",
    company: "ECE Dept. (HIT)",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    testimonial:
      "He actually works really well, he completed all the tasks assigned to him & also used his own knowledge to make them even more better, i truely appreciate his work. All the best Prem!!",
    name: "Mr. Archisman Kundu",
    designation: "Chairperson",
    company: "IEEE HIT SB",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have worked in a lot of projects with Prem, it's very easy to work with him. He's really good at contributing with the frontend segment along with the management of the entire project. My best wishes are always with him.",
    name: " Mr. Gurdeep Singh",
    designation: "AI/ML Expert",
    company: "GEEX",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
   {
    name: "Fin.ai",
    description:
      "Fin.ai is a full-stack personal investment portfolio tracker that allows users to manage, monitor & grow their investments with real-time stock data & AI-powered suggestions.",
    tags: [
     
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      
    ],
    image: finai,
    source_code_link: "https://github.com/misanthropic-codes/GeekAlpha-Hackfest",
  }, {
    name: "TeamBrain.ai",
    description:
      "AI-powered unified memory layer that integrates scattered knowledge from Slack, Docs, Notion, GitHub, and Drive into a centralized, searchable team brain.",
    tags: [
     
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      
    ],
    image: teambrain,
    source_code_link: "https://github.com/ranjan-29Dev/TeamBrain",
  }, {
    name: "Departmental Website",
    description:
      "Full stack currently operational Official website of Electronics and communication Engineering Department of Haldia Institute of Technology integrated with firebase.",
    tags: [
     
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      
    ],
    image: ece,
    source_code_link: "https://github.com/ecehithaldia/Official_Website",
  },
   {
    name: "PyPigeon",
    description:
      "It's a clean & minimalist blog website built in react.js and the backend is in python. It has two modes (light and dark) which can be changed with a button in navbar.",
    tags: [
     
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      
    ],
    image: pypigeon,
    source_code_link: "https://github.com/ranjan-29Dev/PyPigeon",
  }, {
    name: "Check₹",
    description:
      "It's a simple currency value convertor website can be used to check the value of all the types of currency, it uses an api to give the realtime value of that currency.",
    tags: [
     
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      
    ],
    image: checkr,
    source_code_link: "https://github.com/ranjan-29Dev/checkR",
  }, {
    name: "PassGen",
    description:
      "A normal password generator website, which generates random passwords based on the demand by the user like contain special character, numbers, length of the password.",
    tags: [
     
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      
    ],
    image: passgen,
    source_code_link: "https://github.com/ranjan-29Dev/passGen",
  },
  {
    name: "Orbitron",
    description:
      "Orbitron is a Three.js-based interactive 3D space visualization that allows users to explore celestial objects with smooth orbit controls and realistic textures.",
    tags: [
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
    ],
    image: solar,
    source_code_link: "https://github.com/ranjan-29Dev/Orbitron",
  },
  {
    name: "SimonSays",
    description:
      "Simon Says is a memory-based game where players must follow an increasing sequence of colors. Test your memory skills and see how far you can go.",
    tags: [
     
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: simon,
    source_code_link: "https://github.com/ranjan-29Dev/SimonSays",
  },
  {
    name: "taskMaster",
    description:
      "TaskMaster is a lightweight task manager that helps users add and remove tasks dynamically. It features a sleek, dark-themed UI with smooth interactions.",
    tags: [
      
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: taskmaster,
    source_code_link: "https://github.com/ranjan-29Dev/taskMaster",
  },
];

export { services, technologies, experiences, testimonials, projects };

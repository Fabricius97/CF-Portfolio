import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  engineer,
  carpenter,
  developer,
  spacetourism,
  appleclone,
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
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Network Technician",
    icon: backend,
  },
  {
    title: "System Integrator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "Carpentry Student & Apprentice",
    company_name: "High School",
    icon: carpenter,
    iconBg: "#E6DEDD",
    date: "2013 - March 2017",
    points: [
      "Completed vocational education in carpentry, focusing on construction techniques, materials, and project planning.",
      "Worked as a carpenter after graduation, gaining hands-on experience in building, renovation, and woodworking.",
      "Developed a strong foundation in teamwork, problem-solving, and following detailed project specifications.",
    ],
  },
  {
    title: "Web Development Student",
    company_name: "Techover Academy",
    icon: developer,
    iconBg: "#E6DEDD",
    date: "January 2023 - June 2023",
    points: [
      "Completed an intensive web development program focusing on the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Gained hands-on experience in building full-stack applications, developing both frontend and backend solutions.",
      "Learned best practices in responsive design, version control with Git, and deploying web applications.",
      "Collaborated with classmates on group projects, simulating real-world development workflows and improving teamwork skills.",
    ],
  },
  {
    title: "Telecom and Network Technician",
    company_name: "Elektronikhuset",
    icon: engineer,
    iconBg: "#E6DEDD",
    date: "March 2017 - Present",
    points: [
      "Specialized in building network infrastructures, including fiber welding, installing Unifi systems, access points, and switches.",
      "Responsible for project planning, creating job quotes, and managing network installations from start to finish.",
      "Gained experience in configuring switches to optimize network performance and ensure seamless connectivity.",
      "Developed a deep understanding of network solutions and troubleshooting, providing high-quality service to clients.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Space Tourism",
    description:
      "Web application providing information about space travel, including destinations like the Moon and Mars, astronauts, and the technology enabling space exploration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: spacetourism,
    source_code_link: "https://github.com/Fabricius97/Space-Tourism-Page",
    live_code_link: "https://space-tourism-page-ebon.vercel.app/",
  },
  {
    name: "Apple Clone",
    description:
      "A responsive web application that replicates the Apple website, featuring sleek animations, interactive elements, and a modern design, allowing users to explore various products and services.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: appleclone,
    source_code_link: "https://github.com/Fabricius97/Apple-Website",
    live_code_link: "https://apple-clone-delta-two.vercel.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

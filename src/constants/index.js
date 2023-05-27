import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  mongodb,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,
  techshop,
  cryptowallet,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
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
    title: "Python Native Developer",
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
    name: "Python",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2018 - Feb 2019",
    points: [
      "Developing and maintaining web applications using Python and related frameworks like Flask, Django, and FastAPI.",
      "Collaborating with cross-functional teams, including designers, product managers, and fellow developers, to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility in Python-based web applications.",
      "Participating in code reviews and providing constructive feedback to other Python developers.",
    ]
  },
  {
    title: "Python backend Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Aug 2020",
    points: [
      "Developing and maintaining backend functionality for web applications using Python and related frameworks like Flask, Django, and FastAPI.",
      "Collaborating with cross-functional teams, including designers, product managers, and fellow developers, to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility in Python-based web applications.",
      "Participating in code reviews and providing constructive feedback to other Python developers.",
    ],    
  },
  {
    title: "Web Developer",
    company_name: "Upwork",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2018 - Aug 2020",
    points: [
      "Developing and maintaining web applications using HTML, CSS, and Python Flask framework.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility using HTML and CSS.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],    
  },
  {
    title: "Full stack Developer",
    company_name: "Hatch Apps",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Present",
    points: [
      "Developing and maintaining web applications using Python and related frameworks like Flask, Django, and FastAPI.",
      "Collaborating with cross-functional teams, including designers, product managers, and fellow developers, to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility in Python-based web applications.",
      "Participating in code reviews and providing constructive feedback to other Python developers.",
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Shishir as the Python stack developer on our project. His technical expertise was invaluable",
    name: "Sandy Smith",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "he was able to quickly identify and solve complex problems. He was always willing to go the extra mile to ensure that our project was a success.",
    name: "David Johnson",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "He is incredibly organized and detailed-oriented, which makes him an asset in any team environment",
    name: "Emma Williams",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const projects = [
  {
    name: "Techshop E-commerce",
    description:
      "An E-commerce website with a clean and minimal UI design that accepts Cryptocurrency payment",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: techshop,
    source_code_link: "https://github.com/shishir1337/ecommerce-website",
  },
  {
    name: "Crypto wallet",
    description:
      "A Cryptocurrency wallet based on android that allows users to send, recieve, and manage multiple wallets and the same time.",
    tags: [
      {
        name: "ionic",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: cryptowallet,
    source_code_link: "https://github.com/shishir1337",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "next-js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shishir1337/",
  },
];

export { services, technologies, experiences, testimonials, projects };

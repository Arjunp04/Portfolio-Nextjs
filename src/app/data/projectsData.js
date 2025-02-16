import projectOne from "../assets/nutsiqMockup.png";
import projectTwo from "../assets/blogifyhub.png";
import projectThree from "../assets/fancyfinds.png";
import projectFour from "../assets/mockup.png";

export const projectsData = [
  {
    title: "FancyFinds4U",
    des: "A full-stack MERN eCommerce clothing store with a responsive UI, secure authentication, product filtering, payment integration, and an admin panel for seamless management.",
    src: projectFour,
    githubLink: "https://github.com/Arjunp04/FancyFinds4U-Ecommerce-app",
    liveDemoLink: "https://fancyfinds4u.vercel.app/",
  },
  {
    title: "BlogifyHub",
    des: "BlogifyHub, a MERN stack-powered blog app, using Reactjs(Vite), MongoDB, Express.js, and Node.js, with a touch of Tailwind CSS for a user-friendly and stylish writing experience.",
    src: projectTwo,
    githubLink: "https://github.com/Arjunp04/BlogifyHub-MERN",
    liveDemoLink: "https://blogifyhub.vercel.app/",
  },
  {
    title: "Nuts IQ Store",
    des: "NutIQ Store is an e-commerce web application created with Vite (React) utilizes Firebase as the backend and Tailwind for the CSS styling, providing a seamless shopping experience.",
    src: projectOne,
    githubLink:
      "https://github.com/Arjunp04/E-commerce-NutsIQ-Store-using-Vite--React-----Firebase",
    liveDemoLink: "https://nutsiqstore.vercel.app",
  },
  {
    title: "E-commerce frontend",
    des: "Designed a responsive e-commerce UI using HTML5 and CSS3, featuring a dynamic home page, styled authentication forms, and a mobile-friendly interactive layout.",
    src: projectThree,
    githubLink: "https://github.com/Arjunp04/E-commerce-frontend",
    liveDemoLink: "https://fancyfinds-frontend.vercel.app/",
  },
];

//*************************** experienceData *******************************//

export const experienceData = {
  position: "MERN Stack Developer",
  company: "Purezza Technologies",
  timeline: "Jan 2024 - July 2024",
  techStack: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux",
    "Tailwind CSS",
    "Postman",
  ],
  des: [
    {
      project: "Resume Portal",
      description: [
        "Developed UI pages according to Figma designs and integrated APIs into the frontend for smooth data flow.",
        " Fixed responsiveness issues to ensure cross-device compatibility.",
      ],
    },
    {
      project: "Matrimony Site",
      description: [
        "Developed responsive frontend UI pages with features like searching and filtering for users.",
        " Created backend RESTful APIs and integrated the PhonePe third-party payment system.",
        " Tested APIs using Postman.",
      ],
    },
    {
      project: "Photo Frame ",
      description: [
        "Developed a responsive landing page with animations and built additional pages.",
        " Integrated APIs from the frontend to support data interaction for custom photo frames.",
      ],
    },
    {
      project: "Quote and Invoice Generator",
      description: [
        "Led frontend development using Next.js, integrated APIs, and coordinated between frontend and backend teams.",
        " Assigned tasks and ensured efficient collaboration to meet project deadlines.",
      ],
    },
  ],
};

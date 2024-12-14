import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";


export const HERO_CONTENT = `
I am a web developer with expertise in React.js, Next.js, and Node.js, creating dynamic and responsive web solutions. My focus is on blending functionality with design to deliver user-centric experiences. I excel in building scalable systems and integrating seamless backend functionality. With a passion for innovation, I strive to craft unique digital products. My work reflects attention to detail, technical precision, and creative problem-solving. I aim to transform ideas into impactful solutions that engage and inspire.`;



export const EXPERIENCES = [
  {
    year: "June-2023 - July-2023",
    role: "Project Engineer Intern ",
    company: "Bharat Heavy Electricals Limited(BHEL).",
    description: `Led a team in conducting ETAP simulations for load flow, short circuit, 
    and motor startup analyses to optimize power systems. Designed and implemented advanced testing protocols to enhance 
    manufacturing efficiency and ensure compliance with industry standards.
    Collaborated with engineers and project managers to define system requirements and deliverables, ensuring timely completion of key milestones.`,
    technologies: ["ETAP"],
  },
];

export const PROJECTS = [
  {
    title: "Expense Tracker",
    image: project1,
    description:
      "A fully functional Expense Tracker Application built using React.js, focusing on efficiency and user experience. The app allows users to manage their expenses seamlessly, offering features like adding, editing, and deleting transactions with real-time updates.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Student Management system",
    image: project2,
    description:
      "A comprehensive Student Management System built using Next.js and React.js, designed for scalability and ease of use. The application supports efficient student data management with robust backend integration, dynamic frontend features, and seamless real-time updates for an enhanced user experience.",
    technologies: ["Next.js","Typescript","Prisma","Mysql","HTML","Tailwand CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  
];

export const CONTACT = {
  address: "Hitech-city, Hyderabad, Telangana",
  phoneNo: "+918919509629",
  email: "ucteegala77@gmail.com",
};

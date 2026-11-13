// All editable content lives here so components stay clean.

export const personalInfo = {
  name: "Md. Hasan Akond",
  nickname: "Hasan",
  title: "Full Stack Web Developer",
  intro:
    "Full-stack web developer passionate about clean code, seamless user experiences, and modern web technologies. I build complete web solutions from database to browser.",
  location: "Dhaka, Bangladesh",
  email: "hasanakondd@gmail.com",
  cvLink: "/cv.pdf", // TODO: put your CV file in the /public folder as cv.pdf
  profileImage: "/profile.jpg",
  // TODO: replace with your photo, e.g. put profile.jpg in /public and use "/profile.jpg"
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutInfo = {
  description:
    "My journey in web development started with a curiosity about how things work behind the screen, which quickly grew into a passion for building full-stack applications. Today, I specialize in bridging the gap between design and engineering. I love taking an idea from a rough concept to a fully deployed product, handling everything from database modeling and server-side logic to interactive frontend design. When I'm not coding, I'm usually exploring new web technologies and finding ways to make my applications faster and more accessible.",
  education: [
    { degree: "BBA (ongoing)", institute: "Bangladesh Open University (BOU)" },
    { degree: "Diploma in Engineering", institute: "Bangladesh" },
  ],
  goals:
    "I want to grow into a full-stack developer who builds support and CRM products, combining my customer support experience with solid engineering skills.",
  profile: [
    { label: "Name", value: "Md. Hasan Akond" },
    { label: "Location", value: "Dhaka, Bangladesh" },
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Languages", value: "Bangla, English" },
  ],
};

export const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React.js", level: 70 },
  { name: "Python", level: 75 },
  { name: "Django", level: 70 },
  { name: "Git & GitHub", level: 80 },
];

export const projects = [
  {
    id: 1,
    title: "AI Job Application Tracker",
    description:
      "An intelligent career management web application built with Django and Google Gemini that helps job seekers organize applications and optimize their job search with AI assistance.",
    image: "/ai-job-application.jpg",
    technologies: ["Python", "Django", "HTML"],
    liveUrl: "ai-job-application-tracker",
    githubUrl: "https://github.com/hasanakondd-rgb/ai-job-application-tracker",
  },
  {
    id: 2,
    title: "Rokto Lagbe",
    description:
      "A community-driven blood donation platform designed to connect urgent blood seekers with verified donors quickly and reliably.",
    image: "/rokto-lagbe.jpg",
    technologies: ["Django", "JavaScript", "HTML","CSS"],
    liveUrl: "rokto-lagbe",
    githubUrl: "https://github.com/hasanakondd-rgb/rokto-lagbe",
  },
  {
    id: 3,
    title: "Single-Vendor E-Commerce Platform",
    description:
      "A complete online storefront built for a single brand, handling the full customer journey from product browsing to order management.",
    image: "/e-commerce.jpg",
    technologies: ["Django", "JavaScript", "HTML","CSS"],
    liveUrl: "single-vendor-ecommerce",
    githubUrl: "https://github.com/hasanakondd-rgb/single-vendor-ecommerce",
  },
  {
    id: 4,
    title: "Bank Account Transaction System",
    description:
      "A secure financial management system built to simulate core banking operations with strict data integrity and transaction tracking.",
    image: "/bank-account.jpg",
    technologies: ["HTML", "Python"],
    liveUrl: "bank-account-transaction-system",
    githubUrl: "https://github.com/hasanakondd-rgb/bank-account-transaction-system",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/hasanakondd-rgb" },
  { name: "LinkedIn", url: "https://linkedin.com/in/hasan-akond-3aa5241a0" },
  { name: "Facebook", url: "https://facebook.com/" }, // TODO: add your profile URL
];

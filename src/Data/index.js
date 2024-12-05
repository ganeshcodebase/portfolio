import ExpImg from "../Assets/Images/exp.svg";
import Suitcase from "../Assets/Images/Suitcase.svg";
import HeadSet from "../Assets/Images/Headset.svg";
import GraduationCap from "../Assets/Images/Graduation Cap.svg";
import Business from "../Assets/Images/Business.svg";
import Eduford from "../Assets/Images/p2.png";
import Cara from "../Assets/Images/p1.png";
import Sfoundation from "../Assets/Images/p3.png";
import OLMS from "../Assets/Images/p4.png";
import WhatsApp from "../Assets/Images/WhatsApp.svg";
import SendMail from "../Assets/Images/Send Email.svg";
import Linkedin from "../Assets/Images/linkedIn-dark.svg";
import LinkedinImg from "../Assets/Images/linkedin.svg";
import Instagram from "../Assets/Images/instagram.svg";
import Github from "../Assets/Images/github.svg";
import Cifar from "../Assets/Images/cifar-10.png";
import Face from "../Assets/Images/data.jpg";
import AI from "../Assets/Images/ai.png";

export const HomePageData = {
  name: "Ganesh Guntuku",
  designation: "Software Engineer",
  about:
    "I specialize in crafting scalable full-stack applications with seamless and engaging user experiences.",
  buttonText: "Say Hello",
  scroll: "I'm Software Engineer",
  scrollDown: "Scroll Down",
  data: [
    {
      url: "https://www.linkedin.com/in/ganesh-guntuku-977a66168/",
      img: LinkedinImg,
    },
    { url: "https://www.instagram.com", img: Instagram },
    { url: "https://github.com/ganeshcodebase", img: Github },
  ],
};
export const AboutPageData = {
  heading: "About Me",
  desc: "My Introduction",
  data: [
    { name: "Experience", exp: "1.6+ Years", img: ExpImg },
    { name: "Completed", exp: "5+ Projects", img: Suitcase },
    { name: "Support", exp: "Online 24/7", img: HeadSet },
  ],
  description:
    "Dynamic Software Engineer with 1.6 years of experience in designing, developing, and deploying web applications. Skilled in modern technologies like React, Redux, Frappe Framework, ERPNext, and RESTful APIs to create scalable solutions. Proficient in translating business needs into technical outcomes, ensuring high-quality software delivery. Motivated to work on innovative projects that enhance growth and efficiency.",
  buttonText: "Download CV",
  buttonUrl:
    "https://drive.google.com/file/d/1GwcikHkVkWVaox7AW7EsrkU5JdX1HM-0/view?usp=sharing",
};

export const SkillsPageData = {
  heading: "Skills",
  desc: "My Technical level",
  data: [
    {
      name: "Frontend Development & Libraries",
      skills: [
        { name: "HTML", desc: "Advanced" },
        { name: "CSS", desc: "Advanced" },
        { name: "JavaScript", desc: "Intermediate" },
        { name: "ReactJS", desc: "Intermediate" },
        { name: "Redux", desc: "Intermediate" },
        { name: "Sagas", desc: "Intermediate" },
        { name: "Bootstrap", desc: "Intermediate" },
        { name: "MUI", desc: "Intermediate" },
        { name: "Framer Motion", desc: "Intermediate" },
        { name: "REST API", desc: "Intermediate" },
      ],
    },
    {
      name: "Backend Development & Tools",
      skills: [
        { name: "Python", desc: "Intermediate" },
        { name: "Frappe", desc: "Intermediate" },
        { name: "ERPNext", desc: "Intermediate" },
        { name: "MySQL", desc: "Intermediate" },
        { name: "Mariadb", desc: "Intermediate" },
        { name: "SQL", desc: "Intermediate" },
        { name: "Docker", desc: "Intermediate" },
        { name: "Nginx", desc: "Intermediate" },
        { name: "Git", desc: "Intermediate" },
        { name: "GitHub", desc: "Intermediate" },
      ],
    },
  ],
};

export const ExperiencePageData = {
  heading: "Experience & Education",
  desc: "My Personal Journey",
  data: [
    {
      heading: "Software Engineer",
      sub_heading: "Easy Cloud Software Solutions",
      skills: ["Web Developement,", " Project Management,", " Team Management"],
      image: Business,
      date: "2023 - Present",
      color: "#2196f3",
    },
    {
      heading: "Web Developer Intern",
      sub_heading: "Easy Cloud Software Solutions",
      skills: ["HTML,", " CSS,", " JavaScript,", " React JS"],
      image: Business,
      date: "May 2023 - Nov 2023",
      color: "#2196f3",
    },
    {
      heading: "Web Developer Intern",
      sub_heading: "The Sparks Foundation",
      skills: [
        "HTML,",
        " CSS,",
        " JavaScript,",
        " Payment Gateway Integration",
      ],
      image: Business,
      date: "Jun 2022 - Jul 2022",
      color: "#2196f3",
    },
    {
      heading: "Machine learning with Python",
      sub_heading: "Sure Trust",
      skills: [
        "Python, ",
        "Machine Learning, ",
        "Numpy, ",
        "Pandas, ",
        "MatplotLib",
      ],
      image: GraduationCap,
      date: "Dec 2022",
      color: "#e91e63",
    },
    {
      heading: "Entrepreneurship and Leadership Development Program",
      sub_heading: "Moonshot Junior",
      skills: ["Entrepreneurship, ", "Leadership"],
      image: GraduationCap,
      date: "Jul 2021 - Oct 2021",
      color: "#e91e63",
    },
    {
      heading: "Bachelor of Technology",
      sub_heading:
        "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
      skills: ["Computer Science and Engineering (Grade - 8.44)"],
      image: GraduationCap,
      date: "2019 - 2023",
      color: "#e91e63",
    },
    {
      heading: "Pre University Course",
      sub_heading:
        "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
      skills: "M.P.C (Grade - 7.5)",
      image: GraduationCap,
      date: "2017 - 2019",
      color: "#e91e63",
    },
    {
      heading: "High School",
      sub_heading: "Government High School, Ponduru",
      skills: "Grade - 9.8",
      image: GraduationCap,
      date: "2016 - 2017",
      color: "#e91e63",
    },
  ],
};

export const ProjectsPageData = {
  heading: "Projects",
  desc: "Most Recent Work",
  sections: [
    {
      name: "All",
      children: [
        {
          name: "Ecommerce Website",
          image: Cara,
          url: "https://github.com/ganeshcodebase/E-commerce-Website?tab=readme-ov-file",
          demo: "https://ganeshcodebase.github.io/E-commerce-Website/",
        },
        {
          name: "Online Library Management System",
          image: OLMS,
          url: "https://github.com/ganeshcodebase/OLMS",
          demo: "/",
        },
        {
          name: "Eduford Static Responsive Website",
          image: Eduford,
          url: "https://github.com/ganeshcodebase/Static-Website-Eduford-",
          demo: "https://ganeshcodebase.github.io/Static-Website-Eduford-/",
        },
        {
          name: "AI Models on Question and answer Generation",
          image: AI,
          url: "https://github.com/ganeshcodebase/AI-MODELS",
          demo: "",
        },
      ],
    },
    {
      name: "Web",
      children: [
        {
          name: "Ecommerce Website",
          image: Cara,
          url: "https://github.com/ganeshcodebase/E-commerce-Website?tab=readme-ov-file",
          demo: "https://ganeshcodebase.github.io/E-commerce-Website/",
        },
        {
          name: "Online Library Management System",
          image: OLMS,
          url: "https://github.com/ganeshcodebase/OLMS",
          demo: "/",
        },
        {
          name: "Eduford Static Responsive Website",
          image: Eduford,
          url: "https://github.com/ganeshcodebase/Static-Website-Eduford-",
          demo: "https://ganeshcodebase.github.io/Static-Website-Eduford-/",
        },
        {
          name: "sparks foundation Payment Gateway Integration",
          image: Sfoundation,
          url: "https://github.com/ganeshcodebase/Sparks-foundation-internship-payment-gateway-integration",
          demo: "https://ganeshcodebase.github.io/Sparks-foundation-internship-payment-gateway-integration/",
        },
      ],
    },
    // {
    // name: "App",
    // children: [{ name: "", image: "", url: "s", demo: "" }],
    // },
    {
      name: "AI/ML",
      children: [
        {
          name: "Image detection Using ML on Cifar 10 Dataset",
          image: Cifar,
          url: "https://github.com/ganeshcodebase/Machine-Learning-project-on-CNN-Cifar10-Dataset",
          demo: "",
        },
        {
          name: "Realtime Face Expression Recognition Using ML",
          image: Face,
          url: "https://github.com/ganeshcodebase/Realtime-Face-Expression-Recognition-using-CNN_ML",
          demo: "",
        },
        {
          name: "AI Models on Question and answer Generation",
          image: AI,
          url: "https://github.com/ganeshcodebase/AI-MODELS",
          demo: "",
        },
      ],
    },
  ],
};

export const ContactPageData = {
  heading: "Contact",
  desc: "contact me",
  left_title: "Talk to me",
  right_title: "Write me your project",
  buttonText: "Send Message",
  buttonValue: "ganeshguntuku.dev@gmail.com",
  data: [
    {
      icon: SendMail,
      name: "Email",
      value: "ganeshguntuku.dev@gmail.com",
      button: "Write me",
      send: "ganeshguntuku.dev@gmail.com",
    },
    {
      icon: WhatsApp,
      name: "Whatsapp",
      value: "9182994733",
      button: "Write me",
      send: "9182994733",
    },
    {
      icon: Linkedin,
      name: "Linkedin",
      value: "ganesh-guntuku-977a66168",
      button: "Write me",
      send: " https://www.linkedin.com/in/ganesh-guntuku-977a66168/",
    },
  ],
};

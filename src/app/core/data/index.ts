import { ContactInformation, Project, Skill, SocialNetwork } from "../interfaces";

export const contactInformation: Array<ContactInformation> = [
  {
    id: 1,
    icon: "./assets/icons/icon_mail.svg",
    title: "email",
    text: "jairdeyner730791@gmail.com",
    htmlElement: {
      tag: "a",
      href: "mailto:jairdeyner730791@gmail.com",
    },
  },
  {
    id: 2,
    icon: "./assets/icons/icon_phone.svg",
    title: "teléfono",
    text: "+51 949726263",
    htmlElement: {
      tag: "a",
      href: "tel:+51951167340",
    },
  },
  {
    id: 3,
    icon: "./assets/icons/icon_location.svg",
    title: "ubicación",
    text: "Ate, Lima, Perú",
    htmlElement: {
      tag: "p",
    },
  },
];

export const socialNetworks: Array<SocialNetwork> = [
  {
    id: 1,
    icon: "./assets/icons/icon_twitter.svg",
    href: "https://twitter.com/jairtellodev",
  },
  {
    id: 2,
    icon: "./assets/icons/icon_linkedin.svg",
    href: "https://www.linkedin.com/in/jairdeyner",
  },
  {
    id: 3,
    icon: "./assets/icons/icon_github.svg",
    href: "https://github.com/jairdeyner",
  },
];

export const skills: Array<Skill> = [
  {
    name: "HTML 5",
    img: "./assets/images/skills/skill_html.svg",
  },
  {
    name: "CSS 3",
    img: "./assets/images/skills/skill_css.svg",
  },
  {
    name: "JavaScript",
    img: "./assets/images/skills/skill_js.svg",
  },
  {
    name: "React JS",
    img: "./assets/images/skills/skill_react.svg",
  },
  {
    name: "Angular",
    img: "./assets/images/skills/skill_angular.svg",
  },
  {
    name: "Java",
    img: "./assets/images/skills/skill_java.svg",
  },
  {
    name: "MySQL",
    img: "./assets/images/skills/skill_mysql.svg",
  },
  {
    name: "Firebase",
    img: "./assets/images/skills/skill_firebase.svg",
  },
  {
    name: "Git",
    img: "./assets/images/skills/skill_git.svg",
  },
  {
    name: "GitHub",
    img: "./assets/images/skills/skill_github.svg",
  },
  {
    name: "Figma",
    img: "./assets/images/skills/skill_figma.svg",
  },
];

export const projects: Array<Project> = [
  {
    img: "./assets/images/projects/portfolio-screen.png",
    name: "Portafolio - Angular",
    repository: "https://github.com/Jair1996/portafolio",
  },
  {
    img: "./assets/images/projects/portfolio-screen.png",
    name: "Portafolio - React",
    repository: "https://github.com/jairdeyner/portfolio",
    homepage: "https://jairdeyner.vercel.app/",
  },
  {
    homepage: "https://calvic.vercel.app",
    img: "./assets/images/projects/calvic-screen.png",
    name: "CALVIC",
    repository: "https://github.com/Jair1996/calvic-app",
  },
  {
    homepage: "https://gifexpert.vercel.app",
    img: "./assets/images/projects/gifexpert-screen.png",
    name: "Gif Expert",
    repository: "https://github.com/jairdeyner/gif-expert",
  },
];

import { ContactInformation, SocialNetwork } from "../interfaces";

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

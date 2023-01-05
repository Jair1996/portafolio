export interface SocialNetwork {
  id: number;
  icon: string;
  href: string;
}

export interface AnchorElement {
  tag: "a";
  href: string;
}

interface ParagraphElement {
  tag: "p";
}

export interface ContactInformation {
  id: number;
  icon: string;
  title: string;
  text: string;
  htmlElement: AnchorElement | ParagraphElement;
}

export interface Skill {
  name: string;
  img: string;
}

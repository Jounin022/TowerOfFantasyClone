import { StaticImageData } from "next/image";
import * as Img from "./images";

export interface navOptInterface {
  activeImg?: StaticImageData;
  inactiveImg?: StaticImageData;
  alt?: string;
  number?: string;
  name?: string;
  page?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  w: number;
  h: number;
}

export const NavOptionsArr: navOptInterface[] = [
  {
    page: 1,
    number: "01",
    name: "Inicio",
    w: 57,
    h: 18,
  },
  {
    page: 2,
    number: "02",
    name: "Characters",
    w: 130,
    h: 13,
  },
  {
    page: 3,
    number: "03",
    name: "Noticias",
    w: 90,
    h: 18,
  },
  {
    page: 4,
    number: "04",
    name: "Explorar Tof",
    w: 127,
    h: 13,
  },
  {
    page: 5,
    number: "05",
    name: "About the Game",
    w: 120,
    h: 11,
  },
  {
    page: 6,
    number: "06",
    name: "Features",
    w: 120,
    h: 11,
  },
  {
    page: 7,
    number: "07",
    name: "Creatower",
    w: 115,
    h: 13,
  },
];

export const RightOptionsArr: navOptInterface[] = [
  {
    activeImg: Img.MusicActive,
    inactiveImg: Img.MusicInactive,
    alt: "Turn on/off Music",
    w: 750,
    h: 150,
  },
  {
    activeImg: Img.Access,
    inactiveImg: Img.Access,
    alt: "Access/Login",
    w: 750,
    h: 150,
  },
  {
    activeImg: Img.SocialMediaActive,
    inactiveImg: Img.SocialMediaInactive,
    alt: "Social Media",
    w: 250,
    h: 250,
  },
  {
    activeImg: Img.LanguageActive,
    inactiveImg: Img.LanguageInactive,
    alt: "Languages",
    w: 250,
    h: 250,
  },
  {
    activeImg: Img.Download,
    inactiveImg: Img.Download,
    alt: "Download",
    w: 1300,
    h: 450,
  },
];

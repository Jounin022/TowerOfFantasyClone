import { navPages, navTools } from "./types";
import * as Img from "public/landing-page/navigationBar"
export const NavOptionsArr: navPages[] = [
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
      page: 4 || 5 || 6 || 7,
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
  
  export const RightOptionsArr: navTools[] = [
    {
      activeImg: Img.MusicActive.src,
      inactiveImg: Img.MusicInactive.src,
      alt: "Turn on/off Music",
      w: 30,
      h: 30,
    },
    {
      activeImg: Img.Access.src,
      inactiveImg: Img.Access.src,
      alt: "Access/Login",
      w: 30,
      h: 30,
    },
    {
      activeImg: Img.SocialMediaActive.src,
      inactiveImg: Img.SocialMediaInactive.src,
      alt: "Social Media",
      w: 30,
      h: 30,
    },
    {
      activeImg: Img.LanguageActive.src,
      inactiveImg: Img.LanguageInactive.src,
      alt: "Languages",
      w: 30,
      h: 30,
    },
    {
      activeImg: Img.Download.src,
      inactiveImg: Img.Download.src,
      alt: "Download",
      w: 150,
      h: 50,
    },
  ];
  
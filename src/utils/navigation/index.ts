import { StaticImageData } from 'next/image';
import * as Img from './images';

interface navOptInterface {
    activeImg:StaticImageData,
    inactiveImg:StaticImageData,
    activeNumber:StaticImageData,
    inactiveNumber:StaticImageData,
    page:1 | 2 | 3 | 4 | 5 | 6 | 7,
    alt:string,
    w:number,
    h:number,  
}   

interface topRightNavOptInterface {
    activeImg:StaticImageData,
    inactiveImg:StaticImageData,
    alt:string,
    w:number,
    h:number,  
}

export const NavOptionsArr:navOptInterface[] = [
    {
    activeImg:Img.HomeActive,
    inactiveImg:Img.HomeInactive,
    activeNumber:Img.Active01,
    inactiveNumber:Img.Inactive01,
    page:1,
    alt:'Inicio',
    w:57,
    h:18,  
    },
    {
    activeImg:Img.NewsActive,
    inactiveImg:Img.NewsInactive,
    activeNumber:Img.Active02,
    inactiveNumber:Img.Inactive02,
    page:2,
    alt:'Noticias',
    w:90,
    h:18,  
    },
    {
    activeImg:Img.ExploreActive,
    inactiveImg:Img.ExploreInactive,
    activeNumber:Img.Active03,
    inactiveNumber:Img.Inactive03,
    page:3,
    alt:'Explorar Tof',
    w:127,
    h:13,  
    },
    {
    activeImg:Img.AboutActive,
    inactiveImg:Img.AboutInactive,
    activeNumber:Img.Active04,
    inactiveNumber:Img.Inactive04,
    page:4,
    alt:'About the Game',
    w:120,
    h:11,  
    },
    {
    activeImg:Img.CharactersActive,
    inactiveImg:Img.CharactersInactive,
    activeNumber:Img.Active05,
    inactiveNumber:Img.Inactive05,
    page:5,
    alt:'Characters',
    w:120,
    h:11,  
    },
    {
    activeImg:Img.FeaturesActive,
    inactiveImg:Img.FeaturesInactive,
    activeNumber:Img.Active06,
    inactiveNumber:Img.Inactive06,
    page:6,
    alt:'Features',
    w:120,
    h:11,  
    },
    {
    activeImg:Img.CreatowerActive,
    inactiveImg:Img.CreatowerInactive,
    activeNumber:Img.Active07,
    inactiveNumber:Img.Inactive07,
    page:7,
    alt:'Creatower',
    w:115,
    h:13,  
    },
]

export const RightOptionsArr:topRightNavOptInterface[] = [
    {
    activeImg:Img.MusicActive,
    inactiveImg:Img.MusicInactive,
    alt:'Turn on/off Music',
    w:750,
    h:150,  
    },
    {
    activeImg:Img.Access,
    inactiveImg:Img.Access,
    alt:'Access/Login',
    w:750,
    h:150,   
    },
    {
    activeImg:Img.SocialMediaActive,
    inactiveImg:Img.SocialMediaInactive,
    alt:'Social Media',
    w:250,
    h:250,  
    },
    {
    activeImg:Img.LanguageActive,
    inactiveImg:Img.LanguageInactive,
    alt:'Languages',
    w:250,
    h:250,  
    },
    {
    activeImg:Img.Download,
    inactiveImg:Img.Download,
    alt:'Download',
    w:1300,
    h:450,  
    },
   
]


type ImgElementStyle = NonNullable<JSX.IntrinsicElements["img"]["style"]>;

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

type StaticImport = { default: StaticImageData } | StaticImageData;

type CommonImage = {
  img: string ;
  objFit?: ImgElementStyle["objectFit"];
  objPosition?: ImgElementStyle["objectPosition"];
  quality?:number;
};

export interface IImage {
  alt?:string;
  imgCss?:ImgElementStyle;
  'mobile'?: CommonImage;
  'tablet'?: CommonImage;
  'desktop'?: CommonImage;
}

export interface ICharacter {
    number: number;
    name: string;
    fade: string;
    fade_M: string;
    img: string;
    img_M: string;
    active: string;
    inactive: string;
    weapon: string;
    weapon_M: string;
    tab: string;
    mainColors: {
        primary:string;
        secondary:string;
    };
    hueRotate?: string; // property set to change hue from blue to character main color
    audio?: string;
}

export interface navPages {
  number: string;
  name: string;
  page: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  w: number;
  h: number;
}

export interface navTools {
  activeImg: string;
  inactiveImg: string;
  alt: string;
  w: number;
  h: number;
}

export interface ICities {
  number: number;
    title: string;
    story: string;
    iconImg: string;
    cityImg: string;
    isActive: (selected: number) => boolean;

}
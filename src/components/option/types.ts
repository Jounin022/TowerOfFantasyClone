import { StaticImageData } from "next/image";

type ImgOptionProps = {
    activeImg: StaticImageData;
    inactiveImg: StaticImageData;
    alt:string;
    w: number;
    h: number;
    text?: never;
    isActive?: boolean;
    action: () => void;
    line?: 1 | 0;
}

interface TextOptionProps {
    activeImg?: never;
    inactiveImg?: never;
    alt?:never;
    w: number;
    h: number;
    text: string;
    isActive?: boolean;
    action: () => void;
    line?: 1 | 0;
}
  
export type OptionProps =  ImgOptionProps | TextOptionProps
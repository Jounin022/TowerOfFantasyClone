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
import { styled , css } from 'src/styles/stitches.config';
import { ICharacter } from 'utils/types';
import { ResponsiveImage } from "utils/functions";

export const charBackground = styled(ResponsiveImage);
export const bgFadeStyle = (actvPage:number,charPg:number) => {
  return {
    transition: `opacity ${actvPage === charPg ? "1" : "0.4"}s  ease-in-out 0s`,
    opacity: 0.2
    }
}
export const bgStyle = (actvPage:number,charPg:number) => {
  return { 
    transition: `opacity ${actvPage === charPg ? "1" : "0.4"}s  ease-in-out 0s`,
    opacity: 0.90
    }
}
export const bgColorStyle = (actvPage:number,charPg:number,activeCharacter:ICharacter) => {
  return { 
    filter: `hue-rotate(${activeCharacter.hueRotate})`,
    transition: `opacity ${actvPage === charPg ? "1" : "0.4"}s  ease-in-out 0s`,
    opacity: 0.90
    }
}
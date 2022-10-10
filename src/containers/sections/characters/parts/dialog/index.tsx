import { ICharacter } from "utils/characters/types";
import * as S from "./style";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import { getResponsiveImage } from "utils/functions";

interface DialogProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[]
}

export const Dialog = ({activePage,activeCharacter,characters}:DialogProps) => { 

    const GetDialogImage = () => {
        return getResponsiveImage({
          mobile:{img:characters[activeCharacter].tab, objFit:"contain", objPosition:"left" }, 
        })
      }

    return (
        <S.dialogWrapper  css={{
            transition: `all ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71) 1s`,
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
         }}>
            {GetDialogImage()}
       </S.dialogWrapper>
 
  )}
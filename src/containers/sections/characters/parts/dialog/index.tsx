import { ICharacter } from "utils/characters/types";
import * as S from "./style";
import { CHARACTER_PAGE_NUMBER } from "../../index"

interface DialogProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[]
}

export const Dialog = ({activePage,activeCharacter,characters}:DialogProps) => { 
    return (
        <S.dialogWrapper  css={{
            transition: `all ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71) 1s`,
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
         }}>
           <S.dialog
            desktop={{img:characters[activeCharacter].tab, objFit:"contain", objPosition:"left" }}
          />
       </S.dialogWrapper>
 
  )}
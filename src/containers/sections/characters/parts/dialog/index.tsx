import { ICharacter } from "utils/types";
import * as S from "./style";
import { CHARACTER_PAGE_NUMBER } from "../../index"

interface DialogProps {
    activePage:number,
    activeCharacter:ICharacter,
}

export const Dialog = (props:DialogProps) => { 
    return (
        <S.dialogWrapper  css={{
            transition: `all ${props.activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71) 1s`,
            opacity: props.activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
         }}>
           <S.dialog
            desktop={{img:props.activeCharacter.tab, objFit:"contain", objPosition:"left" }}
          />
       </S.dialogWrapper>
 
  )}
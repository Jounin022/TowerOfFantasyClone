import * as S from "./style";
import { ICharacter } from "utils/characters/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"

interface BackgroundProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[]
}

export const Background = ({activePage,activeCharacter,characters}:BackgroundProps) => { 
    return (
        <S.charBackground css={{
            transition: `transform opacity ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71) 1s`,
            "&:after": { transition: `opacity ${activePage === CHARACTER_PAGE_NUMBER ? "1.5" : "0.4"}s linear  ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.1"}s`,  opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
            },

            "@mobile": {
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 0.4 : 0,
            "&:after": { bg: { i: characters[activeCharacter].fade_M, s: "auto", p: "top"}},
            },

            "@tablet": {
            transform: activePage === CHARACTER_PAGE_NUMBER ? " unset" : "translateX(-100%)",
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
            "&:after": {bg: { i: characters[activeCharacter].fade, s: "cover" }},
            },
            
            "@desktop": {
            "&:after": {bg: {i: characters[activeCharacter].fade,s: "contain",p: "left bottom"},
            },
        },
    }}
    mobile={{img:characters[activeCharacter].background_M, objFit:"cover"}} 
    tablet={{img:characters[activeCharacter].background, objFit:"none" ,objPosition:"left bottom"}} 
    desktop={{img:characters[activeCharacter].background, objFit:"none",objPosition:"left bottom"}} 
    />
       
  )}
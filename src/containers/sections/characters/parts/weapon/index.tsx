import { ICharacter } from "utils/characters/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import * as S from "./style";

interface WeaponProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[]
}

export const Weapon = ({activePage,activeCharacter,characters}:WeaponProps) => { 
    return (
        <S.weaponWrapper css={{
            transition: `opacity, transform ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  ease-in-out 0s`,
            transform: activePage === CHARACTER_PAGE_NUMBER ? " unset" : "translateX(100%)",
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
         }} >
        <S.weapon
        css={{transition: `opacity, transform ${ activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71)`}}
        mobile={{img:characters[activeCharacter].weapon_M, objFit:"contain" }} 
        tablet={{img:characters[activeCharacter].weapon_M, objFit:"contain" }} 
        desktop={{img:characters[activeCharacter].weapon, objFit:"unset" }}
        />
      </S.weaponWrapper>
 
  )}
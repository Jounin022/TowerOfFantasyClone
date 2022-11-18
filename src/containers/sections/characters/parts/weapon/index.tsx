import { ICharacter } from "utils/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import * as S from "./style";

interface WeaponProps {
    activePage:number,
    activeCharacter:ICharacter,
}

export const Weapon = (props:WeaponProps) => { 
    return (
        <S.weaponWrapper css={{
            transition: `opacity, transform ${props.activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  ease-in-out 0s`,
            transform: props.activePage === CHARACTER_PAGE_NUMBER ? " unset" : "translateX(100%)",
            opacity: props.activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
         }} >
        <S.weapon
        imgCss={S.weaponStyle()}
        css={{transition: `opacity, transform, ${ props.activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71)`}}
        mobile={{img:props.activeCharacter.weapon_M, objFit:"contain" }} 
        tablet={{img:props.activeCharacter.weapon_M, objFit:"contain" }} 
        desktop={{img:props.activeCharacter.weapon, objFit:"unset" }}
        />
      </S.weaponWrapper>
 
  )}
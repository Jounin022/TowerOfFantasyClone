import { ICharacter } from "utils/characters/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import * as S from "./style";
import { useDevice } from "hooks/useDevice";
import { getResponsiveImage } from "utils/functions";

interface WeaponProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[]
}

export const Weapon = ({activePage,activeCharacter,characters}:WeaponProps) => { 
  
    const GetWeaponImage = () => {
      return getResponsiveImage({
        mobile:{img:characters[activeCharacter].weapon_M, objFit:"contain" }, 
        desktop:{img:characters[activeCharacter].weapon, objFit:"unset" }
      })
    }

    return (
        <S.weaponWrapper css={{
            transition: `opacity, transform ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  ease-in-out 0s`,
            transform: activePage === CHARACTER_PAGE_NUMBER ? " unset" : "translateX(100%)",
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
         }} >

        <S.weapon css={{
            transition: `transform ${ activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71)`,
        }}>
           {GetWeaponImage()}
        </S.weapon>
        
      </S.weaponWrapper>
 
  )}
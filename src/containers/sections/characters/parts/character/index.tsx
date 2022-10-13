import * as S from "./style";
import { ICharacter } from "utils/characters/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import { getResponsiveImage } from "utils/functions";

interface CharacterProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[]
}

export const Character = ({activePage,activeCharacter,characters}:CharacterProps) => { 
// colocar descrição exata da imagem para cada linguagem , como "personagem tal fazendo arminha do bonoro"
    const GetCharacterImage = () => {
        return getResponsiveImage({
          mobile:{img:characters[activeCharacter].img_M, objFit:"cover", objPosition:"bottom",quality:100 }, 
          tablet:{img:characters[activeCharacter].img, objFit:"cover" ,quality:100}, 
          desktop:{img:characters[activeCharacter].img, objFit:"cover" ,quality:100}, 
          alt:`${characters[activeCharacter].name} character image full body`
        })  
      }

    return (
        <S.characterWrapper css={{
            transition: `opacity ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71)  0.5s`,
         }}>
  {GetCharacterImage()}
      </S.characterWrapper>
  )}
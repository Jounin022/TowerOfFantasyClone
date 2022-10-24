import * as S from "./style";
import { ICharacter } from "utils/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"

interface CharacterProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[]
}

export const Character = ({activePage,activeCharacter,characters}:CharacterProps) => { 
// colocar descrição exata da imagem para cada linguagem , como "personagem tal fazendo arminha do bonoro"
    return <S.character 
            mobile={{img:characters[activeCharacter].img_M, objFit:"cover",quality:100 }} 
            tablet={{img:characters[activeCharacter].img, objFit:"cover" ,quality:100}} 
            desktop={{img:characters[activeCharacter].img, objFit:"cover" ,quality:100}}
            alt={`${characters[activeCharacter].name} character image full body`}
           />
  }
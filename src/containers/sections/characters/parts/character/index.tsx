import * as S from "./style";
import { ICharacter } from "utils/types";
import { CHARACTER_PAGE_NUMBER } from "../../index";

interface CharacterProps {
  activePage: number;
  activeCharacter: ICharacter;
}

export const Character = (props: CharacterProps) => {
//   colocar descrição exata da imagem para cada linguagem , como "personagem tal fazendo arminha do bonoro"
  return <S.character
          mobile={{img:props.activeCharacter.img_M, objFit:"cover",quality:100 }}
          tablet={{img:props.activeCharacter.img, objFit:"cover" ,quality:100}}
          desktop={{img:props.activeCharacter.img, objFit:"cover" ,quality:100}}
          alt={`${props.activeCharacter.name} character image full body`}
         />
//   return (
    // <picture>
    //   <source media="(max-width: 799px)" srcSet={props.activeCharacter.img_M} />
    //   <source media="(min-width: 800px)" srcSet={props.activeCharacter.weapon} />
    //   <S.StyledImg
    //     src={props.activeCharacter.weapon}
    //     alt="Chris standing up holding his daughter Elva"
    //   />
    // </picture>
//   );
};

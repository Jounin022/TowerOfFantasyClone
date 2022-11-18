import * as S from "./characters.styles";
import { White_Background } from "characters/general/index"
import { Background , Character, Selector , Dialog, Weapon, ChangeButton } from "./parts"
import { Title } from "src/components/title";
import { ICharacter } from "utils/types";

export const CHARACTER_PAGE_NUMBER = 2
interface ICharactersProps {
  activeCharacter: ICharacter
  activePage: number
  setSimulacrum: (value:boolean) => void
  setActiveCharacter: (value:ICharacter) => void
  simulacrum: boolean
}

export const Characters = (props:ICharactersProps) => {
  return (
    <S.section id="section-2">
      <S.backgroundImage
      mobile={{ img:White_Background.src, objFit:"cover"}} 
      tablet={{ img:White_Background.src, objFit:"cover"}} 
      desktop={{img:White_Background.src, objFit:"cover"}} 
      />
    <S.titleWrapper>
      <Title title="PERSONAGENS"/>
    </S.titleWrapper>
    <Background {...props} />
    <Character {...props} />
    <Dialog {...props} />
    <Weapon {...props} />
    <ChangeButton {...props}/>
    <Selector {...props} />
    </S.section>
  );
};

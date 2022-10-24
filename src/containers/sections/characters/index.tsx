import * as S from "./characters.styles";
import { useState } from "react";
import { useSection } from "hooks/useSection";
import { characters } from "utils/characters"
import { White_Background } from "characters/general/index"
import { Background , Character, Selector , Dialog, Weapon, ChangeButton } from "./parts"
import { useCharacter } from "hooks/useCharacter";
import { Title } from "components/title";

export const CHARACTER_PAGE_NUMBER = 2

export const Characters = () => {
  const { activeCharacter } = useCharacter()
  const { activePage } = useSection();
  const [simulacrum, setSimulacrum] = useState(false) 
  
  const commonProps = {activeCharacter:activeCharacter.number,activePage,characters} 


  return (
    <S.section id="section-2">
      <S.backgroundImage
      mobile={{ img:White_Background, objFit:"cover"}} 
      tablet={{ img:White_Background, objFit:"cover"}} 
      desktop={{img:White_Background, objFit:"cover"}} 
      />
    <S.titleWrapper>
      <Title title="PERSONAGENS"/>
    </S.titleWrapper>
    <Background {...commonProps} />
    <Character {...commonProps} />
    <Dialog {...commonProps} />
    <Weapon {...commonProps} />
    <ChangeButton {...commonProps} simulacrum={simulacrum} setSimulacrum={setSimulacrum} />
    <Selector {...commonProps} />
    </S.section>
  );
};

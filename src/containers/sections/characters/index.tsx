import * as S from "./characters.styles";
import { useState } from "react";
import { useSection } from "hooks/useSection";
import { characters } from "characters/index"
import { Background , Character, Selector , Dialog, Weapon, ChangeButton } from "./parts"
import { useCharacter } from "hooks/useCharacter";

export const CHARACTER_PAGE_NUMBER = 2

export const Characters = () => {
  const { activeCharacter } = useCharacter()
  const { activePage } = useSection();
  const [simulacrum, setSimulacrum] = useState(false) 
  
  const commonProps = {activeCharacter:activeCharacter.number,activePage,characters} 

  return (
    <S.section id="section-2">
      <S.backgroundImage
      mobile={{img:'/assets/images/page4/p4-bg.jpg', objFit:"cover"}} 
      tablet={{img:'/assets/images/page4/p4-bg.jpg', objFit:"cover"}} 
      desktop={{img:'/assets/images/page4/p4-bg.jpg', objFit:"cover"}} 
      />
    <S.titleWrapper>
   
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

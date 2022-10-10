import * as S from "./characters.styles";
import { useState } from "react";
import { useSection } from "hooks/useSection";
import { characters } from "characters/index"
import { Background , Character, Selector , Dialog, Weapon, ChangeButton } from "./parts"

export const CHARACTER_PAGE_NUMBER = 2

export const Characters = () => {
  const { activePage } = useSection();
  const [simulacrum, setSimulacrum] = useState(false) 
  const [activeCharacter, setActiveCharacter] = useState(0);
  const commonProps = {activeCharacter,activePage,characters} 

  return (
    <S.background id="section-2">
    <S.titleWrapper>
           
    </S.titleWrapper>

    <Background {...commonProps} />
    <Character {...commonProps} />
    <Dialog {...commonProps} />
    <Weapon {...commonProps} />
    <ChangeButton {...commonProps} simulacrum={simulacrum} setSimulacrum={setSimulacrum} />
    <Selector {...commonProps} setActiveCharacter={setActiveCharacter} />
    </S.background>
  );
};

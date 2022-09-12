import {  useState } from "react"
import * as S from "./characters.styles"
import { useSection } from "hooks/useSection"
import { characters } from "utils/characters/index"

export const Characters = () => {
    const { activePage }= useSection()
    const [activeCharacter,setActiveCharacter] = useState(0)

    return (
    <S.background id="section-4">
        <S.charBackground css={{
        transform: activePage === 4 ? ' none' : 'translateX(-100%)',
        backgroundImage: characters[activeCharacter].background,
        "&:after":{
        transition: `opacity ${activePage === 4 ? "3" : "0.4"}s cubic-bezier(0.4, 0, 1, 1)`,
        backgroundImage: characters[activeCharacter].fade,
        opacity: activePage === 4 && '1',
        },
        }}
        />

        <S.characterWrapper>
          <S.character src={characters[activeCharacter].img} layout='fill' />
        </S.characterWrapper>
        

    </S.background>
    )
}
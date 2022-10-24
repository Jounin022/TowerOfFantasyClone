import * as S from "./style";
import { ICharacter } from "utils/types";
import { Background as Background_D, Background_M , Background_Color ,Background_Color_M} from "characters/general"
import { CHARACTER_PAGE_NUMBER } from "../../index"
import {useCharacter} from "hooks/useCharacter"

interface BackgroundProps {
    activePage:number,
    characters:ICharacter[]
}

export const Background = ({activePage,characters}:BackgroundProps) => { 
    const {activeCharacter} = useCharacter()
return (
<>
<S.charBackground 
imgCss={S.bgStyle(activePage,CHARACTER_PAGE_NUMBER)}
mobile={{img:Background_M.src, objFit:"cover"}} 
tablet={{img:Background_D.src, objFit:"cover",quality:100}} 
desktop={{img:Background_D.src, objFit:"contain",objPosition:"left bottom",quality:100}} 
/>
<S.charBackground 
imgCss={S.bgFadeStyle(activePage,CHARACTER_PAGE_NUMBER)}
mobile={{img:characters[activeCharacter.number].fade_M, objFit:"cover"}} 
tablet={{img:characters[activeCharacter.number].fade, objFit:"cover",quality:100}} 
desktop={{img:characters[activeCharacter.number].fade, objFit:"contain",objPosition:"left bottom",quality:100}} 
/>
<S.charBackground 
imgCss={S.bgColorStyle(activePage,CHARACTER_PAGE_NUMBER,activeCharacter)}
mobile={{img:Background_Color_M.src, objFit:"cover"}} 
tablet={{img:Background_Color.src, objFit:"cover",quality:100}} 
desktop={{img:Background_Color.src, objFit:"contain",objPosition:"left bottom",quality:100}} 
/>
</>
)}
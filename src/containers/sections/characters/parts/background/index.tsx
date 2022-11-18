import * as S from "./style";
import { ICharacter } from "utils/types";
import { Background as Background_D, Background_M , Background_Color ,Background_Color_M} from "characters/general"
import { CHARACTER_PAGE_NUMBER } from "../../index"

interface BackgroundProps {
    activePage:number,
    activeCharacter:ICharacter,
}

export const Background = (props:BackgroundProps) => { 
return (
<>
<S.charBackground 
imgCss={S.bgStyle(props.activePage,CHARACTER_PAGE_NUMBER)}
mobile={{img:Background_M.src, objFit:"cover"}} 
tablet={{img:Background_D.src, objFit:"cover",quality:100}} 
desktop={{img:Background_D.src, objFit:"contain",objPosition:"left bottom",quality:100}} 
/>
<S.charBackground 
imgCss={S.bgFadeStyle(props.activePage,CHARACTER_PAGE_NUMBER)}
mobile={{img:props.activeCharacter.fade_M, objFit:"cover"}} 
tablet={{img:props.activeCharacter.fade, objFit:"cover",quality:100}} 
desktop={{img:props.activeCharacter.fade, objFit:"contain",objPosition:"left bottom",quality:100}} 
/>
<S.charBackground 
imgCss={S.bgColorStyle(props.activePage,CHARACTER_PAGE_NUMBER,props.activeCharacter)}
mobile={{img:Background_Color_M.src, objFit:"cover"}} 
tablet={{img:Background_Color.src, objFit:"cover",quality:100}} 
desktop={{img:Background_Color.src, objFit:"contain",objPosition:"left bottom",quality:100}} 
/>
</>
)}
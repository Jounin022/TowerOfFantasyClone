import * as S from "./style";
import { createPortal } from "react-dom"; 

import { ICharacter } from "utils/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import { useEffect, useState } from "react";
import { characters } from "utils/characters";
interface BackgroundProps {
    activeCharacter: ICharacter,
    activePage:number,
    setActiveCharacter:(char:ICharacter) => void
}

export const Selector = (props:BackgroundProps) => { 
    const [renderSideMenu,setRenderSideMenu] = useState<boolean>(false)
    const [renderedDocument,setRenderDocument] = useState<boolean>(false)
    
    useEffect(()=>{
      if(props.activePage >= CHARACTER_PAGE_NUMBER){
        setTimeout(()=>{setRenderSideMenu(true)},100)
      } else {
        setRenderSideMenu(false)
      }
    },[props.activePage])

    useEffect(()=>{
      setRenderDocument(!!document)
    },[])

    return renderedDocument && createPortal(
      <S.selectorWrapper 
       css={S.handleSelectorWrapperStyle(renderSideMenu,props.activePage,CHARACTER_PAGE_NUMBER)}
      >
        {characters.map((char) => 
        <S.characterOption 
         css={S.handleCharacterOptionStyle(char,props.activeCharacter.number)}
         title={char.name}
         key={`${char.name}-opt`}
         type="button"
         onClick={() => props.setActiveCharacter(char)}
        />
        )}
      </S.selectorWrapper>,
      document.getElementById('main') || document.body) || <></>
}
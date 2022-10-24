import * as S from "./style";
import { createPortal } from "react-dom"; 

import { ICharacter } from "utils/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import { useEffect, useState } from "react";
import { useCharacter } from "hooks/useCharacter";

interface BackgroundProps {
    activeCharacter: number,
    characters: ICharacter[],
    activePage:number,
}

export const Selector = ({activeCharacter,characters, activePage}:BackgroundProps) => { 
  const { setActiveCharacter } = useCharacter()
    const [renderSideMenu,setRenderSideMenu] = useState<boolean>(false)
    const [renderedDocument,setRenderDocument] = useState<boolean>(false)
    
    useEffect(()=>{
      if(activePage >= CHARACTER_PAGE_NUMBER){
        setTimeout(()=>{setRenderSideMenu(true)},100)
      } else {
        setRenderSideMenu(false)
      }
    },[activePage])

    useEffect(()=>{
      setRenderDocument(!!document)
    },[])

    return renderedDocument && createPortal(
      <S.selectorWrapper 
       css={S.handleSelectorWrapperStyle(renderSideMenu,activePage,CHARACTER_PAGE_NUMBER)}
      >
        {characters.map((char) => 
        <S.characterOption 
         css={S.handleCharacterOptionStyle(char,activeCharacter)}
         title={char.name}
         key={`${char.name}-opt`}
         type="button"
         onClick={() => setActiveCharacter(char)}
        />
        )}
      </S.selectorWrapper>,
      document.getElementById('main') || document.body) || <></>
}
import { useState } from "react";
import { ICharacter } from "utils/characters/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import { activeCBCharacter, activeCBSimulacrum , inactiveCBCharacter , inactiveCBSimulacrum, characterArrow, simulacrumArrow } from "characters/index"
import * as S from "./style";

interface DialogProps {
    activePage:number,
    activeCharacter:number,
    characters:ICharacter[],
    simulacrum:boolean,
    setSimulacrum:(arg:boolean)=>void,
}


export const ChangeButton = ({activePage,activeCharacter,characters,simulacrum,setSimulacrum}:DialogProps) => { 
    
    return (
        <S.changeButtonWrapper  css={{
            transform: activePage === CHARACTER_PAGE_NUMBER ? " unset" : "translateX(-100%)",
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
            transition: `all ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71) 1s`,
            
         }}>

        <S.changeIcon 
        onClick={()=>setSimulacrum(!simulacrum)}
        css={{
              bg: {i: simulacrum ? characterArrow : simulacrumArrow , s: "50%", p: "bottom right"}
        }}
        /> 

        <S.changeButton 
        onClick={()=>setSimulacrum(!simulacrum)}
        role="button"
        css={{
            top: simulacrum ? "20%" : "50%" ,
            right: simulacrum ? "0%" : "20%" ,
            zIndex: simulacrum ? "2" : "3" ,
            bg: {i: simulacrum ?  inactiveCBCharacter :   activeCBCharacter , s: simulacrum ?  "90%" : "100%"}
        }}
        />

        <S.changeButton 
        onClick={()=>setSimulacrum(!simulacrum)}
        role="button"
        css={{
            top:  simulacrum ? "50%" : "20%",
            right: simulacrum ?  "20%" : "0%",
            zIndex: simulacrum ? "3" : "2" ,
            bg: {i: simulacrum ?   activeCBSimulacrum :  inactiveCBSimulacrum,s: simulacrum ?  "100%" : "90%"}
        }}
        />
        
       </S.changeButtonWrapper>
 
  )}
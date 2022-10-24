import { useState } from "react";
import { ICharacter } from "utils/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"
import { ActiveCBCharacter, ActiveCBSimulacrum , InactiveCBCharacter , InactiveCBSimulacrum, ChangeToCharacter, ChangeToSimulacrum } from "characters/general"
import * as S from "./style";
import { useCharacter } from "hooks/useCharacter";

interface DialogProps {
    activePage:number,
    simulacrum:boolean,
    setSimulacrum:(arg:boolean)=>void,
}


export const ChangeButton = ({activePage,simulacrum,setSimulacrum}:DialogProps) => { 
    const {activeCharacter} = useCharacter()
    return (
        <S.changeButtonWrapper  css={{
            transform: activePage === CHARACTER_PAGE_NUMBER ? " unset" : "translateX(-100%)",
            opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
            transition: `all ${activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71) 1s`,
            
         }}>

        <S.changeIcon 
        onClick={()=>setSimulacrum(!simulacrum)}
        css={{
              bg: {i: simulacrum ? ChangeToCharacter.src : ChangeToSimulacrum.src , s: "50%", p: "bottom right"}
        }}
        /> 

        <S.changeButton 
        onClick={()=>setSimulacrum(!simulacrum)}
        role="button"
        css={{
            top: simulacrum ? "20%" : "50%" ,
            right: simulacrum ? "0%" : "20%" ,
            zIndex: simulacrum ? "2" : "3" ,
            bg: {i: simulacrum ?  InactiveCBCharacter.src :   ActiveCBCharacter.src , s: simulacrum ?  "80%" : "90%"}
        }}
        />

        <S.changeButton 
        onClick={()=>setSimulacrum(!simulacrum)}
        role="button"
        css={{
            filter:`hue-rotate(${activeCharacter.hueRotate})`,
            top:  simulacrum ? "50%" : "20%",
            right: simulacrum ?  "20%" : "0%",
            zIndex: simulacrum ? "3" : "2" ,
            bg: {i: simulacrum ?   ActiveCBSimulacrum.src :  InactiveCBSimulacrum.src,s: simulacrum ?  "90%" : "80%"}
        }}
        />
        
       </S.changeButtonWrapper>
 
  )}
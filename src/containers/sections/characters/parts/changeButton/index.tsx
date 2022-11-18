import { CHARACTER_PAGE_NUMBER } from "../../index"
import { ActiveCBCharacter, ActiveCBSimulacrum , InactiveCBCharacter , InactiveCBSimulacrum, ChangeToCharacter, ChangeToSimulacrum } from "characters/general"
import * as S from "./style";
import { ICharacter } from "utils/types";

interface DialogProps {
    activePage:number,
    simulacrum:boolean,
    setSimulacrum:(arg:boolean)=>void,
    activeCharacter:ICharacter
}


export const ChangeButton = (props:DialogProps) => { 
    return (
        <S.changeButtonWrapper  css={{
            transform: props.activePage === CHARACTER_PAGE_NUMBER ? " unset" : "translateX(-100%)",
            opacity: props.activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
            transition: `all ${props.activePage === CHARACTER_PAGE_NUMBER ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71) 1s`,
            
         }}>

        <S.changeIcon 
        onClick={()=>props.setSimulacrum(!props.simulacrum)}
        css={{
              bg: {i: props.simulacrum ? ChangeToCharacter.src : ChangeToSimulacrum.src , s: "50%", p: "bottom right"}
        }}
        /> 

        <S.changeButton 
        onClick={()=>props.setSimulacrum(!props.simulacrum)}
        role="button"
        css={{
            top: props.simulacrum ? "20%" : "50%" ,
            right: props.simulacrum ? "0%" : "20%" ,
            zIndex: props.simulacrum ? "2" : "3" ,
            bg: {i: props.simulacrum ?  InactiveCBCharacter.src :   ActiveCBCharacter.src , s: props.simulacrum ?  "80%" : "90%"}
        }}
        />

        <S.changeButton 
        onClick={()=>props.setSimulacrum(!props.simulacrum)}
        role="button"
        css={{
            filter:`hue-rotate(${props.activeCharacter.hueRotate})`,
            top:  props.simulacrum ? "50%" : "20%",
            right: props.simulacrum ?  "20%" : "0%",
            zIndex: props.simulacrum ? "3" : "2" ,
            bg: {i: props.simulacrum ?   ActiveCBSimulacrum.src :  InactiveCBSimulacrum.src,s: props.simulacrum ?  "90%" : "80%"}
        }}
        />
        
       </S.changeButtonWrapper>
 
  )}
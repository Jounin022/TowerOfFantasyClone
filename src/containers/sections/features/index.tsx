import * as S from "./features.styles";
import { IParallax } from "./types";
import { useRef } from "react";
import { ResponsiveImage } from "utils/functions";
import { useCharacter } from "hooks/useCharacter";

import PanelImage from "../../../../public/assets/images/page5/p7-block.png"
import MainPostImage from "../../../../public/assets/images/page5/p7-img4.png"
import FilterBackImage from "../../../../public/assets/images/page5/p7-before.png"
import Description1 from "../../../../public/assets/images/page5/p7-t1.png"

export const Features = () => {
    const {activeCharacter} =useCharacter()
    const firstPosition =  useRef<HTMLDivElement>(null) 
    const secondPosition = useRef<HTMLDivElement>(null)
    const thirdPosition =  useRef<HTMLDivElement>(null)
    const parallax = (props:IParallax) => {
    if(firstPosition.current) firstPosition.current.style.transform = `translate(${(props.mouseX - props.width) * 0.01}% ,${((props.mouseY - props.height) * 0.01)+ 15}%)`
    if(secondPosition.current) secondPosition.current.style.transform = `translate(${(props.mouseX - props.width) * 0.01}% ,${((props.mouseY - props.height) * 0.01)+ 15}%)`
    if(thirdPosition.current) thirdPosition.current.style.transform = `translate(${(props.mouseX - props.width) * 0.02}% ,${((props.mouseY - props.height) * 0.02)+ 15}%)`
 };
  return (
    <S.background id="section-5">
      <S.parallax
        onMouseMove={(e) =>
          parallax({
            mouseX: e.clientX,
            mouseY: e.clientY,
            height: e.currentTarget.offsetHeight / 2,
            width: e.currentTarget.offsetWidth / 2,
          })
        }
      >
        <S.backDiv ref={firstPosition}>
          <S.backDivItem>
             <ResponsiveImage  alt="back image filter" desktop={{img:MainPostImage,objFit:'fill',objPosition:"center"}}/>
             <ResponsiveImage  alt="back image filter" desktop={{img:FilterBackImage,objFit:'fill',objPosition:"center"}}/>
          </S.backDivItem>

          <S.backDivItem >
             <ResponsiveImage  alt="back image filter" desktop={{img:MainPostImage,objFit:'fill',objPosition:"center"}}/>
             <ResponsiveImage  alt="painel de amostragem de fotos" desktop={{img:FilterBackImage,objFit:'fill',objPosition:"center"}}/>
          </S.backDivItem>
        </S.backDiv>

        <S.middleDiv ref={secondPosition}>
          <ResponsiveImage imgCss={{padding:"2.5%"}} alt="painel de amostragem de fotos" desktop={{img:MainPostImage,objFit:'cover',objPosition:"center"}}/>
          <ResponsiveImage imgCss={{filter:`hue-rotate(${activeCharacter.hueRotate})`}} alt="painel de amostragem de fotos" desktop={{img:PanelImage,objFit:'fill',objPosition:"center"}}  />
        </S.middleDiv>

        <S.frontDiv ref={thirdPosition}>
          <S.frontDivItem css={{width: '12%',height: '20%',alignSelf:'flex-start'}} >
             {/* <ResponsiveImage  alt="back image filter" desktop={{img:MainNumber,objFit:'fill',objPosition:"center"}}/> */}
<h1>01</h1>
          </S.frontDivItem>
          <S.frontDivItem css={{width: '80%',height: '25%'}} >
             <ResponsiveImage imgCss={{filter:`hue-rotate(${activeCharacter.hueRotate})`}}  alt="back image filter" desktop={{img:Description1,objFit:'fill',objPosition:"center"}}/>

          </S.frontDivItem>
        </S.frontDiv>
        
      </S.parallax>
    </S.background>
  );
};

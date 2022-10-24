import * as S from "./about.styles";
import { useState } from "react";
import { cities } from "../../../utils/cities";
import Image from "next/image";
import { Flash , Rotate } from "utils/assets/landing-page/sections/about";
import { useCharacter } from "hooks/useCharacter";
import { Title } from "components/title";
import { White_Background } from "utils/assets/landing-page/sections/about"
import { Text_M, Text } from "utils/assets/landing-page/sections/about"

export const About = () => {
  const { activeCharacter } = useCharacter()
  const [selectedCity, setSelectedCity] = useState(1);

  const beforeOptionImg = (isActive:boolean) =>{
    return isActive ? "url('/assets/images/page3/p3-btn-bg-a.png')" : "url('/assets/images/page3/p3-btn-bg.png')"
  }

  const afterOptionImg = (isActive:boolean) =>{
    return isActive ? "url('/assets/images/page3/p3-btn-after-a.png')" : "url('/assets/images/page3/p3-btn-after.png')"
  }

  return (
    <S.section id="section-4">
      <S.background alt="white background" 
        mobile={{img:White_Background.src,objFit:"cover"}}
        tablet={{img:White_Background.src,objFit:"cover"}}
        desktop={{img:White_Background.src,objFit:"cover"}}
      />

      <S.TitleWrapper>
        <Title title="DESCUBRA TOF" />
      </S.TitleWrapper>

      <S.floatingMainCircle  css={{ filter:`hue-rotate(${activeCharacter.hueRotate})`}}>
        <S.rotatingBackground  
          imgCss={{animation: `${S.rotate} 3s infinite`}}
          mobile={{img:Rotate.src ,objFit:'fill'}}
          tablet={{img:Rotate.src ,objFit:'fill'}}
          desktop={{img:Rotate.src ,objFit:'fill'}}
        />

        <S.flash 
        alt="A.I.D.A symbol"
        css={{ filter:`hue-rotate(${activeCharacter.hueRotate})`,width:"50px",height:"50px"}}
        mobile={{img:Flash.src ,objFit:'fill'}}
        tablet={{img:Flash.src ,objFit:'fill'}}
        desktop={{img:Flash.src ,objFit:'fill'}}
        />
      </S.floatingMainCircle>    

      <S.floatingTab  css={{ filter:`hue-rotate(${activeCharacter.hueRotate})`}}>
        <S.tabBackground 
        mobile={{img:Text_M.src ,objFit:'fill'}}
        tablet={{img:Text.src ,objFit:'fill'}}
        desktop={{img:Text.src ,objFit:'fill'}}
         />
        <h2>Fundação da civilização</h2>
        <p>
          Através de um plano de colonização interestelar, os humanos criaram
          uma nova civilização em um planeta chamado Aida
          <br />
          <br />
          Lá, construíram a Torre da Fantasia a fim de minerar Omnium, uma
          energia potente e misteriosa contida no cometa Mara.
        </p>
      </S.floatingTab>      

      <S.bottomBackground >
        {/* {cities.map((city) => {
          return (
            <S.cityOption
            key={city.number}
            type="button"
            title={city.title}
            css={{
                backgroundImage: `url(${city.iconImg})`,
                width: city.isActive(selectedCity) ? '100px' : '70px',
                height: city.isActive(selectedCity) ? '100px' : '70px',
                "&:before": {
                  filter: city.isActive(selectedCity) ? "none" : `hue-rotate(${activeCharacter.hueRotate})`,
                  backgroundImage: beforeOptionImg(city.isActive(selectedCity)),
                  width: city.isActive(selectedCity) ? '110px' : '90px',
                  height: city.isActive(selectedCity) ? '110px' : '90px',
                  top: city.isActive(selectedCity) ? "-5px" : "-10px",
                  left: city.isActive(selectedCity) ? "-5px" : "-10px",
                  opacity: city.isActive(selectedCity) ? "1" : "0.6",
                },
                "&:after": {
                  filter: city.isActive(selectedCity) ? "none" : `hue-rotate(${activeCharacter.hueRotate})`,
                  backgroundImage: afterOptionImg(city.isActive(selectedCity)),
                  width: city.isActive(selectedCity) ? '90px' : '75px',
                  height: city.isActive(selectedCity) ? '90px' : '75px',
                  top:city.isActive(selectedCity) ? '5px' : '-3px',
                  left:city.isActive(selectedCity) ? '5px' : '-3px',
                },
                "@desktop": {
                  bottom: city.bottom,
                  right: city.right,
                },
              }}
              onClick={() => setSelectedCity(city.number)}
            />
          );
        })} */}
      </S.bottomBackground>
    
      {/* <S.movingBackground css={{backgroundImage: `url('/assets/images/page3/discover${selectedCity}.jpg')`}}/> */}
      {/* <S.rotatingCircles css={{ filter:`hue-rotate(${activeCharacter.hueRotate})`}} /> */}
      {/* <S.subBackground css={{ filter:`hue-rotate(${activeCharacter.hueRotate})`}} /> */}
    </S.section>
  );
};

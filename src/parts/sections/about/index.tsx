import * as S from "./about.styles";
import { useState } from "react";
import { cities } from "../../../utils/cities";
import Image from "next/image";
import hands from "../../../../public/assets/images/page3/p3-flash.png";
export const About = () => {
  const [selectedCity, setSelectedCity] = useState(1);

  const beforeOptionImg = (isActive:boolean) =>{
    return isActive ? "url('/assets/images/page3/p3-btn-bg-a.png')" : "url('/assets/images/page3/p3-btn-bg.png')"
  }

  const afterOptionImg = (isActive:boolean) =>{
    return isActive ? "url('/assets/images/page3/p3-btn-after-a.png')" : "url('/assets/images/page3/p3-btn-after.png')"
  }

  return (
    <S.background id="section-3">

      <S.title />

      <S.floatingMainCircle>
        <Image alt="A.I.D.A symbol" src={hands} width={50} height={50} />
      </S.floatingMainCircle>    

      <S.floatingTab>
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

      <S.bottomBackground>
        {cities.map((city) => {
          return (
            <S.cityOption
            key={city.number}
            css={{
                backgroundImage: `url(${city.iconImg})`,
                width: city.isActive(selectedCity) ? '100px' : '70px',
                height: city.isActive(selectedCity) ? '100px' : '70px',
                "&:before": {
                  backgroundImage: beforeOptionImg(city.isActive(selectedCity)),
                  width: city.isActive(selectedCity) ? '110px' : '90px',
                  height: city.isActive(selectedCity) ? '110px' : '90px',
                  top: city.isActive(selectedCity) ? "-5px" : "-10px",
                  left: city.isActive(selectedCity) ? "-5px" : "-10px",
                  opacity: city.isActive(selectedCity) ? "1" : "0.6",
                },
                "&:after": {
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
        })}
      </S.bottomBackground>
    
      <S.movingBackground css={{backgroundImage: `url('/assets/images/page3/discover${selectedCity}.jpg')`}}/>
      <S.rotatingCircles />
      <S.subBackground />
    </S.background>
  );
};

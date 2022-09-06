import * as S from "./about.styles";
import { useState } from "react";
import { cities } from "../../../utils/cities";
import Image from "next/image";
import hands from "../../../../public/assets/images/page3/p3-flash.png";
export const About = () => {
  const [selectedCity, setSelectedCity] = useState(1);

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
                width: city.size(selectedCity),
                height: city.size(selectedCity),
                "&:before": {
                  backgroundImage: city.backgroundImage(selectedCity),
                  width: city.beforeSize(selectedCity),
                  height: city.beforeSize(selectedCity),
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

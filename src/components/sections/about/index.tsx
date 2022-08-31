import * as S from "./about.styles";
import { useState } from "react";
import Image from "next/image";
import hands from "../../../../public/assets/images/page3/p3-flash.png";
export const About = () => {
  const [selectedCity, setSelectedCity] = useState(1);
  const b1 = selectedCity === 1 ? "p3-btn-after-a.png" : "p3-btn-bg.png";
  const b2 = selectedCity === 2 ? "p3-btn-after-a.png" : "p3-btn-bg.png";
  const b3 = selectedCity === 3 ? "p3-btn-after-a.png" : "p3-btn-bg.png";
  return (
    <S.background id="section-3">
      <S.title />
      <S.floatingMainCircle  >
        <Image alt="A.I.D.A symbol" src={hands} width={50} height={50} />
      </S.floatingMainCircle >
      <S.floatingTab>
        <h2>Fundação da civilização</h2>
        <p>
          Através de um plano de colonização interestelar, os humanos criaram
          uma nova civilização em um planeta chamado Aida<br /><br />
          Lá, construíram a Torre da Fantasia a fim de minerar Omnium, uma
          energia potente e misteriosa contida no cometa Mara.
        </p>
        .
      </S.floatingTab>
      <S.rotatingCircles  />
      <S.bottomBackground>
        <S.cityOption
          css={{
            backgroundImage: "url('/assets/images/page3/p3-img1-m.png')",
            width: `${selectedCity === 1 ? 80 : 50}px`,
            height: `${selectedCity === 1 ? 80 : 50}px`,
            "&:before": {
              backgroundImage: `url('/assets/images/page3/${b1}')`,
              width: `${selectedCity === 1 ? 100 : 70}px`,
              height: `${selectedCity === 1 ? 100 : 70}px`,
            },
          }}
          onClick={() => setSelectedCity(1)}
        />
        <S.cityOption
          css={{
            backgroundImage: "url('/assets/images/page3/p3-img2-m.png')",
            width: `${selectedCity === 2 ? 80 : 50}px`,
            height: `${selectedCity === 2 ? 80 : 50}px`,
            "&:before": {
              backgroundImage: `url('/assets/images/page3/${b2}')`,
              width: `${selectedCity === 2 ? 100 : 70}px`,
              height: `${selectedCity === 2 ? 100 : 70}px`,
            },
          }}
          onClick={() => setSelectedCity(2)}
        />

        <S.cityOption
          css={{
            backgroundImage: "url('/assets/images/page3/p3-img3-m.png')",
            width: `${selectedCity === 3 ? 80 : 50}px`,
            height: `${selectedCity === 3 ? 80 : 50}px`,
            "&:before": {
              backgroundImage: `url('/assets/images/page3/${b3}')`,
              width: `${selectedCity === 3 ? 100 : 70}px`,
              height: `${selectedCity === 3 ? 100 : 70}px`,
            },
          }}
          onClick={() => setSelectedCity(3)}
        />
      </S.bottomBackground>
      <S.movingBackground
      
        css={{
          backgroundImage: `url('/assets/images/page3/discover${selectedCity}.jpg')`,
        }}
      />
    </S.background>
  );
};

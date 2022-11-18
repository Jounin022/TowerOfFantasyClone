import * as S from "./about.styles";
import { Flash, Rotate } from "public/landing-page/sections/about";
import { Title } from "src/components/title";
import {
  White_Background,
  Circle_1,
  Circle_2,
  Circle_3,
  Circle_4,
  Circle_5,
  Circle_6,
  Sub_Background,
  Sub_Background_M,
} from "public/landing-page/sections/about";
import { Text_M, Text } from "public/landing-page/sections/about";
import { ICharacter, ICities } from "utils/types";

interface IAboutProps {
  cities: ICities[];
  activeCharacter: ICharacter;
  activeCity: number;
  setActiveCity: (v: number) => void;
}

export const About = (props: IAboutProps) => {

  return (
    <S.section id="section-4">
      <S.background
        alt="white background"
        mobile={{ img: White_Background.src, objFit: "cover" }}
        tablet={{ img: White_Background.src, objFit: "cover" }}
        desktop={{ img: White_Background.src, objFit: "cover" }}
        imgCss={{ top: 0, left: 0 }}
      />

      <S.TitleWrapper>
        <Title title="DESCUBRA TOF" />
      </S.TitleWrapper>

      <S.AidaDiv
        css={{ filter: `hue-rotate(${props.activeCharacter.hueRotate})` }}
      >
        <S.circle
          alt="circle"
          mobile={{ img: Rotate.src, objFit: "fill" }}
          tablet={{ img: Rotate.src, objFit: "fill" }}
          desktop={{ img: Rotate.src, objFit: "fill" }}
        />
        <S.aidaSymbol
          alt="A.I.D.A symbol"
          imgCss={{ scale: 0.6 }}
          mobile={{ img: Flash.src, objFit: "scale-down" }}
          tablet={{ img: Flash.src, objFit: "scale-down" }}
          desktop={{ img: Flash.src, objFit: "scale-down" }}
        />
      </S.AidaDiv>

      <S.subBackgroundWrapper>
        <S.subBackgroundImage
          imgCss={{ filter: `hue-rotate(${props.activeCharacter.hueRotate})` }}
          mobile={{ img: Sub_Background_M.src, objFit: "fill" }}
          tablet={{ img: Sub_Background_M.src, objFit: "fill" }}
          desktop={{ img: Sub_Background.src, objFit: "fill" }}
        />
      </S.subBackgroundWrapper>

      <S.floatingTab
        css={{ filter: `hue-rotate(${props.activeCharacter.hueRotate})` }}
      >
        <S.tabBackground
          mobile={{ img: Text_M.src, objFit: "fill" }}
          tablet={{ img: Text.src, objFit: "fill" }}
          desktop={{ img: Text.src, objFit: "fill" }}
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

      <S.bottomBackground></S.bottomBackground>

      <S.bigCircleWrapper>
        <S.cityBigImage
          alt="circle"
          imgCss={{
            borderRadius: "50%",
            scale: "0.9",
            animation: `${S.moveBackground} 30s ease-in-out infinite`,
          }}
          desktop={{
            img: props.cities[2].cityImg,
            objFit: "cover",
          }}
        />
        <S.circle
          imgCss={{
            filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
            animation: `${S.rotate} 10s ease-in-out infinite`,
          }}
          alt="circle"
          desktop={{ img: Circle_1.src, objFit: "fill" }}
        />
        <S.circle
          imgCss={{
            filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
            animation: `${S.rotateBack} 10s linear infinite`,
          }}
          alt="circle"
          desktop={{ img: Circle_2.src, objFit: "fill" }}
        />
        <S.circle
          imgCss={{
            filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
            animation: `${S.rotate} 10s ease-in infinite`,
          }}
          alt="circle"
          desktop={{ img: Circle_3.src, objFit: "fill" }}
        />
        <S.circle
          imgCss={{
            filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
            animation: `${S.rotateBack} 10s linear infinite`,
          }}
          alt="circle"
          desktop={{ img: Circle_4.src, objFit: "fill" }}
        />
        <S.circle
          imgCss={{
            filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
            animation: `${S.rotate} 10s linear infinite`,
          }}
          alt="circle"
          desktop={{ img: Circle_5.src, objFit: "fill" }}
        />
        <S.circle
          imgCss={{
            filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
            animation: `${S.rotateBack} 10s ease-in-out infinite`,
          }}
          alt="circle"
          desktop={{ img: Circle_6.src, objFit: "fill" }}
        />
      </S.bigCircleWrapper>
    </S.section>
  );
};

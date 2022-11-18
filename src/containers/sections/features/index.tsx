import * as S from "./features.styles";
import { IParallax } from "./types";
import { useRef } from "react";
import { ResponsiveImage } from "utils/functions";
import {
  Description1,
  FilterBackImage,
  MainPostImage,
  PanelImage,
  White_Background,
} from "public/landing-page/sections/features";
import { ICharacter } from "utils/types";

interface IFeaturesProps {
  activeCharacter: ICharacter;
}

export const Features = (props: IFeaturesProps) => {
  const firstPosition = useRef<HTMLDivElement>(null);
  const secondPosition = useRef<HTMLDivElement>(null);
  const thirdPosition = useRef<HTMLDivElement>(null);
  const parallax = (props: IParallax) => {
    if (firstPosition.current)
      firstPosition.current.style.transform = `translate(${
        (props.mouseX - props.width) * 0.01
      }% ,${(props.mouseY - props.height) * 0.01 + 15}%)`;
    if (secondPosition.current)
      secondPosition.current.style.transform = `translate(${
        (props.mouseX - props.width) * 0.01
      }% ,${(props.mouseY - props.height) * 0.01 + 15}%)`;
    if (thirdPosition.current)
      thirdPosition.current.style.transform = `translate(${
        (props.mouseX - props.width) * 0.02
      }% ,${(props.mouseY - props.height) * 0.02 + 15}%)`;
  };
  return (
    <S.background id="section-5">
      <ResponsiveImage
        alt="background"
        mobile={{
          img: White_Background.src,
          objFit: "cover",
          objPosition: "center",
        }}
        tablet={{
          img: White_Background.src,
          objFit: "cover",
          objPosition: "center",
        }}
        desktop={{
          img: White_Background.src,
          objFit: "fill",
          objPosition: "center",
        }}
        imgCss={{ top: 0, left: 0 }}
      />
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
            <ResponsiveImage
              alt="back image filter"
              desktop={{
                img: MainPostImage.src,
                objFit: "fill",
                objPosition: "center",
              }}
            />
            <ResponsiveImage
              alt="back image filter"
              desktop={{
                img: FilterBackImage.src,
                objFit: "fill",
                objPosition: "center",
              }}
            />
          </S.backDivItem>

          <S.backDivItem>
            <ResponsiveImage
              alt="back image filter"
              desktop={{
                img: MainPostImage.src,
                objFit: "fill",
                objPosition: "center",
              }}
            />
            <ResponsiveImage
              alt="painel de amostragem de fotos"
              desktop={{
                img: FilterBackImage.src,
                objFit: "fill",
                objPosition: "center",
              }}
            />
          </S.backDivItem>
        </S.backDiv>

        <S.middleDiv ref={secondPosition}>
          <ResponsiveImage
            imgCss={{ padding: "2.5%"}}
            alt="painel de amostragem de fotos"
            desktop={{
              img: MainPostImage.src,
              objFit: "cover",
              objPosition: "center",
            }}
          />
          <ResponsiveImage
            imgCss={{
              filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
              top:0, left:0
            }}
            alt="painel de amostragem de fotos"
            desktop={{
              img: PanelImage.src,
              objFit: "fill",
              objPosition: "center",
            }}
          />
        </S.middleDiv>

        <S.frontDiv ref={thirdPosition}>
          <S.frontDivItem
            css={{ width: "12%", height: "20%", alignSelf: "flex-start" }}
          >
            {/* <ResponsiveImage  alt="back image filter" desktop={{img:MainNumber,objFit:'fill',objPosition:"center"}}/> */}
            {/* <h1>01</h1> */}
          </S.frontDivItem>
          <S.frontDivItem css={{ width: "80%", height: "25%" }}>
            <ResponsiveImage
              imgCss={{
                filter: `hue-rotate(${props.activeCharacter.hueRotate})`,
              }}
              alt="back image filter"
              desktop={{
                img: Description1.src,
                objFit: "fill",
                objPosition: "center",
              }}
            />
          </S.frontDivItem>
        </S.frontDiv>
      </S.parallax>
    </S.background>
  );
};

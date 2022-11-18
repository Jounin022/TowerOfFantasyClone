import * as S from "./home.styles";
import { ResponsiveImage } from "utils/functions";
import {BackgroundImage, Video,FooterImage,FooterImage_M} from "public/landing-page/sections/home"
import { ICharacter } from "utils/types";

interface IHomeProps {
  activeCharacter:ICharacter
}

export const Home = (props:IHomeProps) => {
  return (
    <S.background id="section-1">
      <S.message/>
      <S.video
        src={Video}
        muted={true}
        autoPlay={true}
        loop={true}
      ></S.video> 
      <ResponsiveImage 
      tablet={{ img:BackgroundImage.src,objFit:"cover"}}
      mobile={{ img:BackgroundImage.src,objFit:"cover"}}
      desktop={{img:BackgroundImage.src,objFit:"cover"}}
      />
      <S.footer css={{filter:`hue-rotate(${props.activeCharacter.hueRotate})`}}>
        <S.footerImage 
        mobile={{img:FooterImage_M.src,objFit:"cover"}}
        tablet={{img:FooterImage.src,objFit:"cover"}}
        desktop={{img:FooterImage.src,objFit:"fill"}}
        />
        <p>ROLAR</p>
      </S.footer>
    </S.background>
  );
};

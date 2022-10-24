import * as S from "./home.styles";
import { useCharacter } from "hooks/useCharacter";
import { useSection } from "hooks/useSection";
import { ResponsiveImage } from "utils/functions";
import {BackgroundImage, Video} from "utils/assets/landing-page/sections/home"

export const Home = () => {
  const { activePage } = useSection()
  const { activeCharacter } = useCharacter()
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
      <S.foot css={{filter:`hue-rotate(${activeCharacter.hueRotate})`}}><p>ROLAR</p></S.foot>
    </S.background>
  );
};

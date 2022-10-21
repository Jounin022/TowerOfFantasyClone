import * as S from "./home.styles";
import { useCharacter } from "hooks/useCharacter";
import { useSection } from "hooks/useSection";
import { ResponsiveImage } from "utils/functions";

import BackgroundImage from "../../../../public/assets/images/page1/background.jpg"

export const Home = () => {
  const { activePage } = useSection()
  const { activeCharacter } = useCharacter()
  return (
    <S.background id="section-1">
      <S.message/>
      <S.video
        src="/assets/videos/background-pg1.mp4"
        muted={true}
        autoPlay={true}
        loop={true}
      ></S.video> 
      <ResponsiveImage 
      tablet={{img:BackgroundImage,objFit:"cover"}}
      mobile={{img:BackgroundImage,objFit:"cover"}}
      desktop={{img:BackgroundImage,objFit:"cover"}}
      />
      <S.foot css={{filter:`hue-rotate(${activeCharacter.hueRotate})`}}><p>ROLAR</p></S.foot>
    </S.background>
  );
};

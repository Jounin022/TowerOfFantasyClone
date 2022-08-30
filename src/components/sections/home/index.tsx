import * as S from "./home.styles";
import { responsive } from "../../../styles/stitches.config";

export const Home = () => {
  return (
    <S.background id="section-1">
      <S.message {...responsive} />
      <S.video
        {...responsive}
        src="/assets/videos/background-pg1.mp4"
        muted={true}
        autoPlay={true}
        loop={true}
      ></S.video>
      <S.foot {...responsive} />
    </S.background>
  );
};

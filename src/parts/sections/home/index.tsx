import * as S from "./home.styles";

export const Home = () => {
  return (
    <S.background id="section-1">
      <S.message/>
      <S.video
        src="/assets/videos/background-pg1.mp4"
        muted={true}
        autoPlay={true}
        loop={true}
      ></S.video>
      <S.foot><p>ROLAR</p></S.foot>
    </S.background>
  );
};

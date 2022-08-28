import * as S from "./home.styles";

export const Home = () => {
  return (
    <S.background id="section-1">
      <S.message device={{ "@sm": "cellphone", "@md": "tablet_desktop" }}/>
      <S.video
        device={{ "@sm": "cellphone_tablet", "@lg": "desktop" }}
        src="/assets/videos/background-pg1.mp4"
        muted={true}
        autoPlay={true}
        loop={true}
      ></S.video>
        <S.foot device={{ "@sm": "cellphone", "@md": "tablet_desktop" }}/>
    </S.background>
  );
};

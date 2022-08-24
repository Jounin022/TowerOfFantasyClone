import * as S from "./home.styles";

const Home = () => {
  return (
    <S.background>
      <S.message device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}/>
      <S.video
        device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}
        src="/assets/videos/background-pg1.mp4"
        muted={true}
        autoPlay={true}
        loop={true}
      ></S.video>
        <S.foot device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}/>
    </S.background>
  );
};
export default Home;

import * as S from "./home.styles";

export const Home = () => {
  // const GetHomeImage = () => {
  //   return getResponsiveImage({
  //     mobile:{img:"/assets/images/page1/download-bg.jpg", objFit:"cover", objPosition:"center" }, 
  //   })
  // }
  // const GetFooterImage = () => {
  //   return getResponsiveImage({
  //     mobile:{img:"/assets/images/page1/download-bg.jpg", objFit:"cover", objPosition:"center" }, 
  //   })
  // }
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

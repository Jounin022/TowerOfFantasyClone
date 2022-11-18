import { styled } from "src/styles/stitches.config";
import { ResponsiveImage } from "utils/functions";

export const characterWrapper = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  bottom: 0,
  position: "absolute",
});

// a altura do personagem quando muda de 100 para 80 % da tela faz o
//  deslocamento acontecer translate , bottom negativo surgem o mesmo efeito
export const character = styled(ResponsiveImage, {
  bottom: "0",
  position: "absolute",
  objectFit:"cover",
  bgg:true,
  "@mobile": {
    height: "100%",
    minHeight: "500px",
    width: "100%",
  },
  "@tablet": {
    bottom: 0,
    width: "100%",
    translateY: "0%",
  },
});
export const StyledImg = styled('img',{
  position: "absolute",
  width : "500px",
  height : "500px",
  bgg :true,
  objectFit:"cover",
})
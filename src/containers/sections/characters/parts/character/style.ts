import { styled } from "styles/stitches.config";

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
export const character = styled("div", {
  bottom: "0",
  position: "absolute",
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

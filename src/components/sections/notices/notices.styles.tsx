import { styled } from "../../../styles/stitches.config";

export const background = styled("section", {
    height: "100vh",
    display: "flex",
    position: "relative",
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('/assets/images/page2/p6-bg-m.jpg')`,
        transition: '500ms all ease-in-out ',
      },
      tablet_desktop: {
        backgroundImage: `url('/assets/images/page2/p6-bg.jpg')`,
        backgroundPosition: "center",
      },
    },
  },
});

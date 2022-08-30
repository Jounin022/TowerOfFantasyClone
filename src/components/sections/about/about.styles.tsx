import { styled, keyframes } from "../../../styles/stitches.config";
import Image from "next/image"
const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { transform: "rotate(360deg)" },
  "100%": { transform: "rotate(720deg)" },
});

const slide = keyframes({
  "0%": { backgroundPosition: "left 100px" },
  "50%": { backgroundPosition: "right top  100px" },
  "100%": { backgroundPosition: "left top  100px" },
});

export const background = styled("section", {
  width: "auto",
  height: "100vh",
  position: "relative",
  backgroundRepeat: "no-repeat",
  objectFit: "contain",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('/assets/images/page3/p3-top.png')`,
        backgroundSize: "100% ",
      },
      tablet: {},
      desktop: {
        backgroundImage: `url('/assets/images/page3/p3-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
  },
});

export const floatingTab = styled("article", {
  display: "flex",
  flexDirection: "column",
  fontFamily: "Arial",
  backgroundSize: "100% 100%",
  justifyContent: "end",
  position: "absolute",
  zIndex: 2,
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('/assets/images/page3/p3-text-m.png')`,
        width: "190px",
        top: "40%",
        right: "15%",
        height: "25%",
        padding: "30px 15px 0px 15px",
        "& h2": {
          display: "flex",
          alignItems: "center",
          backgroundImage: "url('/assets/images/page3/p3-text-title.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "80% 100%",
          paddingLeft: 10,
          width: "100%",
          height: "1rem",
          fontSize: "60%",
        },
        "& p": {
          fontSize: "55%",
          fontWeight: "lighter",
          color: "#FFFFFF",
        },
      },
      tablet: {
        backgroundImage: `url('/assets/images/page3/p3-text-m.png')`,
      },
      desktop: {
        backgroundImage: `url('/assets/images/page3/p3-text-m.png')`,
      },
    },
  },
});

export const floatingMainCircle = styled("div", {
  position: "absolute",
  width: 100,
  height: 100,
  top: "32%",
  right: "15%",
  zIndex: 2,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  transform: "translateX(70%)",
  "&:after": {
    animation: `${rotate} 3s infinite`,
    backgroundImage: `url('/assets/images/page3/p3-rotate1.png')`,
    backgroundSize: "100% 100%",
    content: "",
    position: "absolute",
    top: -20,
    left: -25,
    width: 100,
    height: 100,
  },
});

export const rotatingCircles = styled("div", {
  backgroundImage: "url('/assets/images/page3/p3-circle1.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "190vw 190vw",
  width: "190vw",
  height: "190vw",
  top: "23vw",
  left: -140,
  position: "absolute",
  zIndex: 1,
  "&:active":{
    backgroundColor: "black",
  },
  animation: `${rotate} 17s infinite `,
});


export const bottomBackground = styled("div", {
  backgroundImage: "url('/assets/images/page3/p3-bottom.png')",
  zIndex: 2,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 190%",
  position: "absolute",
  bottom: -5,
  width: "100%",
  height: "20vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  paddingLeft:'40px',
  //   paddingRight:'20px',
});

export const cityOption = styled("button", {
  borderRadius:"100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  position: "relative",
  border:'none',
  padding:0,
  margin:0,
  zIndex: 2,
  transition: 'all 500ms ease-in-out',

  "&:before":{
      transition: 'all 500ms ease-in-out',
    zIndex: 1,
    content:'',
    position:'absolute',
    opacity: 0.5,
    transform: "translate(-50%, -50%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
   },
});

// export const buttonCircle = styled(Image, {
//   borderRadius:"100%",
//   position: "absolute",
//   zIndex: 1,
//   transform: "translateX(-100%)",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "100% 100%",

// });

export const movingBackground = styled("div", {
//   backgroundImage: "url('/assets/images/page3/discover1.jpg')",
  zIndex: -1,
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto 100%",
  position: "absolute",
  transition: "all 700ms ease-in-out",
  bottom: 0,
  width: "100%",
  height: "95%",
  backgroundColor: "green",
  animation: `${slide} 12s infinite ease-in-out`,
});

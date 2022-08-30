import { styled, keyframes } from "../../../styles/stitches.config";

const rotate = keyframes({
  "100%": { transform: "rotate(360deg)" },
});

const rotateBack = keyframes({
  "100%": { transform: "rotate(-360deg)" },
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
        backgroundSize: "100%",
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
  "&:active":{
    "&:after":{
      animation: `${rotate} 0.3s linear infinite`,
      transition:"all 500ms",
      },
  },
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
 
  position: "absolute",
  zIndex: 1,
  animation: `${rotate} 20s linear infinite `,
  "&:after": {
    width: "190vw",
    height: "190vw",
    animation: `${rotateBack} 15s infinite`,
    backgroundImage: `url('/assets/images/page3/p3-circle6.png')`,
    backgroundSize: "100% 100%",
    content: "",
    position: "absolute",
  },
  "&:before": {
    width: "190vw",
    height: "190vw",
    animation: `${rotate} 30s linear infinite`,
    backgroundImage: `url('/assets/images/page3/p3-circle2.png')`,
    opacity:0.5,
    backgroundSize: "100% 100%",
    content: "",
    position: "absolute",
  },
  variants: {
    device:{
      cellphone: {
        top: "23vw",
        left: -140,
      },
      tablet: {
        top: "21vw",
        left: -200,
      },
      desktop: {
  
      }
    }
  }
});

export const title = styled("div",{
display: "flex",
position: "absolute",
width: 100,
height: 100,
backgroundRepeat: 'no-repeat',
variants:{
  device:{
    cellphone:{
      backgroundImage: `url('/assets/images/page2/p6-title-m.png')`,
      backgroundSize:"100% 100%",
      width: "260px",
      height: "80px",
      right: "auto",
      left: 15,
      top: "5%",
    },
    tablet:{
      // backgroundImage: `url('/assets/images/page2/p6-title-m.png')`,
      // width: "260px",
      // height: "60px",
      // right: "auto",
      // left: 15,
      // top: "5%",
    },
    desktop:{
      // backgroundImage: `url('/assets/images/page2/p6-title-m.png')`,
      // width: "260px",
      // height: "60px",
      // right: "auto",
      // left: 15,
      // top: "5%",
    },
   
  }
}
})

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
    transform: "translate(-50%, -50%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
   },
});

export const movingBackground = styled("div", {
  zIndex: -1,
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto 100%",
  position: "absolute",
  transition: "all 700ms ease-in-out",
  bottom: 0,
  width: "100%",
  height: "95%",
  backgroundColor: "#333",
  animation: `${slide} 20s infinite ease-in-out`,
});

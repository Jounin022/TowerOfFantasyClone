import { styled, keyframes } from "../../../styles/stitches.config";

const rotate = keyframes({
  "100%": { rotate: "360deg" },
});

const rotateBack = keyframes({
  "100%": { rotate: "-360deg" },
});

const squarePath = keyframes({
  "0%": { clipPath: "inset(0 100% 100% 0)",},
  "100%": { clipPath: "inset(0 0 0 0)",},
});

const slide = keyframes({
  "0%": { backgroundPosition: "left 100px" },
  "50%": { backgroundPosition: "right top  100px" },
  "100%": { backgroundPosition: "left top  100px" },
});

export const background = styled("section", {
  // scrollSnapAlign: 'start',
  width: "auto",
  height: "100vh",
  position: "relative",
  backgroundRepeat: "no-repeat",
  objectFit: "contain",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  "@mobile": {
    backgroundImage: `url('/assets/images/page3/p3-top.png')`,
    backgroundSize: "100%",
  },

  "@desktop": {
    backgroundImage: `url('/assets/images/page3/p3-bg.png')`,
    backgroundSize: "100% 100%",
  },
});

export const subBackground = styled("div", {
  position: "absolute",
  width: "1500px",
  height: "100%",
  backgroundImage: `url('/assets/images/page3/p3-bg-r.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  bottom:"0px",
  right: "-420px",

  "@mobile": {
    display: "none",
  },

  "@tablet": {
    display: "none",
  },

  "@desktop": {
    display: "block",
  },
});


export const TitleWrapper = styled("div", {
  position: "absolute",
  "@mobile": {
    width: "max(15%,260px)",
    maxWidth: "360px",
    maxHeight: "70px",
    height: "80px",
    right: "auto",
    left: 15,
    top: "15px",
  },
  "@tablet": {
    height: "10vw",
  },
  "@desktop": {
    left: '12%',
    top: "100px",
  },
});

export const floatingTab = styled("article", {
  display: "flex",
  flexDirection: "column",
  fontFamily: "Arial",
  backgroundSize: "100% 100%",
  justifyContent: "end",
  position: "absolute",
  zIndex: 5,
  "& h2": {
    display: "flex",
    alignItems: "center",
    backgroundImage: "url('/assets/images/page3/p3-text-title.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    paddingLeft: 10,
    width: "100%",
    height: "1rem",
    fontSize: "60%",
  },

  "@mobile": {
    backgroundImage: `url('/assets/images/page3/p3-text-m.png')`,
    width: "190px",
    top: "40%",
    right: "15%",
    height: "290px",
    padding: "30px 15px 0px 15px",

    "& p": {
      fontSize: "70%",
      fontWeight: "lighter",
      color: "#FFFFFF",
    },
  },
  
  "@tablet": {
    backgroundImage: `url('/assets/images/page3/p3-text.png')`,
    width: "250px",
    height: "200px",
    right: "unset",
    top: "36%",
    left: "95px",

    "& p": {
      fontSize: "75%",
    },

    "& h2": {
      fontSize: "80%",
    },
  },
  "@desktop": {
    "& p": {
      fontSize: "100%",
    },
    "& h2": {
      fontSize: "100%",
    },
    justifyContent: "start",
    paddingLeft: "30px",
    paddingTop: "12px",
    left: "140px",
    minWidth: "300px",
    maxWidth: "330px",
    top: "40%",
    right: "15%",
    height: "fit-content",
    marginBottom: "10px",
  },
});

export const floatingMainCircle = styled("div", {
  position: "absolute",
  width: 100,
  height: 100,
  zIndex: 5,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  transform: "translateX(70%)",
  "&:active": {
    "&:after": {
      animation: `${rotate} 0.3s linear infinite`,
      transition: "all 500ms",
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

  "@mobile": {
    top: "32%",
    right: "15%",
  },
  "@tablet": {
    right: "unset",
    left: "0px",
  },
});

export const rotatingCircles = styled("div", {
  backgroundImage: "url('/assets/images/page3/p3-circle1.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "190vw 190vw",
  width: "190vw",
  height: "190vw",
  position: "absolute",
  zIndex: 2,
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
    opacity: 0.5,
    backgroundSize: "100% 100%",
    content: "",
    position: "absolute",
  },
  "@mobile": {
    top: "23vw",
    left: -140,
  },
  "@tablet": {
    top: "21vw",
    left: -200,
  },
  "@desktop": {
    top: "unset",
    bottom: "0px",
    left: "unset",
    right: -300,
    backgroundSize: "1100px 1100px",
    width: "1100px",
    height: "88.307%",
    "&:after": {
      width: "1100px",
      height: "1100px",
    },
    "&:before": {
      width: "1100px",
      height: "1100px",
    },
  },
});

export const movingBackground = styled("div", {
  zIndex: -1,
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto 100%",
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "95%",
  backgroundColor: "#333",
  "@mobile": { 
    animation: `${slide} 20s infinite ease-in-out`,
    backgroundSize: "auto 100%",
  },
  "@desktop": {
    right: "-240px",
    height: "85%",
    backgroundSize: "100% 100%",
    width: "1000px",
    zIndex: 1,
    animation: "none",
    maskImage:`url('/assets/images/page3/mask.png')`,
    maskSize: "100% auto",
    maskRepeat:"no-repeat",
},
});


export const bottomBackground = styled("div", {
  backgroundImage: "url('/assets/images/page3/p3-bottom.png')",
  zIndex: 4,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 190%",
  position: "absolute",
  bottom: -5,
  width: "100%",
  height: "20vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  paddingLeft: "40px",
  "@desktop": {
    backgroundImage: "none",
    width: "84%",
    height: "100%",
  },
});

export const cityOption = styled("button", {
  borderRadius: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  position: "relative",
  border: "none",
  padding: 0,
  margin: 0,
  zIndex: 5,
  transition: "all 500ms ease-in-out",
  "&:before": {
    transition: "all 500ms ease-in-out",
    content: "",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  "&:after": {
    transition: "all 500ms ease-in-out",
    content: "",
    position: "absolute",
    animation: `${rotateBack} 10s linear infinite`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  "@desktop": {
    transform: "translate(50%, 50%)",
    position: "absolute",
  }
});

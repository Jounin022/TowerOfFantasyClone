import { ResponsiveImage } from "utils/functions";
import { styled, keyframes } from "src/styles/stitches.config";
import { Text_Title } from "public/landing-page/sections/about"
export const rotate = keyframes({
  "100%": { rotate: "360deg" },
});

export const rotateBack = keyframes({
  "100%": { rotate: "-360deg" },
});

export const moveBackground = keyframes({
  "0%": { objectPosition: "left" },
  "50%": { objectPosition:  "right"},
  "100%": { objectPosition: "left" },
});

// const squarePath = keyframes({
//   "0%": { clipPath: "inset(0 100% 100% 0)",},
//   "100%": { clipPath: "inset(0 0 0 0)",},
// });

// const slide = keyframes({
//   "0%": { backgroundPosition: "left 100px" },
//   "50%": { backgroundPosition: "right top  100px" },
//   "100%": { backgroundPosition: "left top  100px" },
// });

export const section = styled("section", {
  width: "auto",
  height: "100vh",
  position: "relative",
  // objectFit: "contain",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const background = styled(ResponsiveImage)

export const cityBigImage = styled(ResponsiveImage)

export const circle = styled(ResponsiveImage)

export const subBackgroundWrapper = styled("div", {
  position: "absolute",
  width: "1500px",
  height: "100%",
  bottom:"0px",
  right: "-420px",
  "@mobile": {
    display: "none",
  },
  "@desktop": {
    display: "block",
  },
});

export const subBackgroundImage = styled(ResponsiveImage)

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

export const aidaSymbol = styled(ResponsiveImage)

export const tabBackground = styled(ResponsiveImage)

export const bigCircleWrapper = styled("div",{
  position: "relative",
  transform: "translate(50vh, 20vh)",
  width:"120vh",
  height:"120vh",
})

export const floatingTab = styled("article", {
  display: "flex",
  flexDirection: "column",
  fontFamily: "Arial",
  backgroundSize: "100% 100%",
  justifyContent: "end",
  position: "absolute",
  "& h2": {
    display: "flex",
    alignItems: "center",
    backgroundImage: Text_Title,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    paddingLeft: 10,
    width: "100%",
    height: "1rem",
    fontSize: "60%",
  },
  "@mobile": {
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
    left: "150px",
    minWidth: "300px",
    maxWidth: "330px",
    top: "40%",
    height: "fit-content",
    marginBottom: "10px",
  },
});

export const AidaDiv = styled("div", {
  position: "absolute",
  width: 100,
  height: 100,
  "@mobile": {
    top: "32%",
    right: "15%",
  },
  "@tablet": {
    right: "unset",
    left: "0px",
  },
  "@desktop": {
    top:"30%",
    right: "unset",
    left: "50px",
  },
});

export const bottomBackground = styled("div", {
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
  position: "relative",
  border: "none",
  padding: 0,
  margin: 0,
  transition: "all 500ms ease-in-out",
  "&:before": {
    transition: "all 500ms ease-in-out",
    content: "",
    position: "absolute",
  },
  "&:after": {
    transition: "all 500ms ease-in-out",
    content: "",
    position: "absolute",
    animation: `${rotateBack} 10s linear infinite`,
  },
  "@desktop": {
    transform: "translate(50%, 50%)",
    position: "absolute",
  }
});

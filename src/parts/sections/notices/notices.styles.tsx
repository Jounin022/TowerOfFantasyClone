import { styled } from "../../../styles/stitches.config";
import Image from "next/image";

export const background = styled("section", {
  // scrollSnapAlign: 'start',
  width: "auto",
  height: "100vh",
  display: "flex",
  position: "relative",
  objectFit: "contain",
  backgroundRepeat: "no-repeat",
  justifyContent: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  zIndex:0,
  "@mobile": {
    backgroundImage: `url('/assets/images/page2/p6-bg-m.jpg')`,
    transition: "500ms all ease-in-out ",
  },
  "@tablet": {
    backgroundImage: `url('/assets/images/page2/p6-bg.jpg')`,
    backgroundPosition: "center",
  },
  "@desktop": {
  },
});

export const title = styled("div", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  maxWidth: "450px",
  objectFit: "contain",
  "@mobile": {
    backgroundImage: `url('/assets/images/page2/p6-title-m.png')`,
    width: "260px",
    height: "60px",
    right: "auto",
    left: 15,
    top: "5%",
  },
  "@tablet": {
    width: "350px",
    height: "90px",
    left: "7%",
  },
  "@desktop": {
    backgroundImage: `url('/assets/images/page2/p6-title.png')`,
    width: "550px",
    height: "70px",
    opacity: "100%",
    top: "10%",
  },
});

export const panel = styled("div", {
  width: "90%",
  display: "flex",
  position: "relative",
  pointerEvents: "none",
  zIndex: 5,
  "@mobile": {
    height: "80%",
    top: "15%",
  },
  "@tablet": {
    top: "19%",
    height: "90%",
  },
  "@desktop": {
    height: "80%",
    top: "16%",
  },
});

export const imagePanel = styled("div",{
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  zIndex:2,
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0px",
  left: "0px",
  "@mobile": {
    backgroundImage: `url('/assets/images/page2/p6-main-m.png')`,
  },
  "@desktop": {
    backgroundImage: `url('/assets/images/page2/p6-main.png')`,
  },

})

export const imageBanner = styled("div", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
  "@mobile": {
    backgroundImage: `url('/assets/images/page2/noticia.jpg')`,
    backgroundSize: "100% 100%",
    top: "4%",
    left: "5%",
    height: "40%",
    width: "90%",
    borderTopRightRadius: "10%",
    borderTopLeftRadius: 0,
  },
  "@tablet": {
    left: "5%",
    top: "2%",
    width: "90%",
    height: "40%",
    backgroundSize: "cover",
    backgroundImage: `url('/assets/images/page2/noticia.jpg')`,
    backgroundPosition: "center",
    borderTopLeftRadius: "0%",
  },
  "@desktop": {
    backgroundImage: `url('/assets/images/page2/noticia.jpg')`,
    backgroundSize: "cover",
    top: "10%",
    left: "2%",
    height: "60%",
    zIndex: -1,
    width: "65%",
    backgroundPosition: "center",
    borderTopRightRadius: "0%",
    borderTopLeftRadius: "10%",
  },
});
export const li = styled("li", {
  listStyle: "none",
  width: "auto",
  fontFamily: "Oxanium",
  color: "white",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  height: "50px",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 15px",
  alignItems: "center",
});

export const article = styled("article", {
  position: "absolute",
  bottom: 20,
  pointerEvents: "all",
  overflowY: "scroll",
  zIndex:3,
  "&::-webkit-scrollbar": {
    width: "10px",
    backgroundColor: "rgb(0, 224, 224)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(8, 130, 130)",
  },
  "@mobile": {
    left: 15,
    height: "38%",
    width: "90%",
  },
  "@tablet": {
  },
  "@desktop": {
    left: "15%",
    height: "25%",
    width: "52%",
  },
});

export const button = styled("button", {
  pointerEvents: "painted",
  width: "100%",
  height: "100%",
  fontSize: "1rem",
  color: "white",
  fontFamily: "Oxanium",
  backgroundColor: "transparent",
  border: "none",
  "@mobile": {
    borderRight: " solid 2px rgba(255,255,255,0.5)",
  },
  "@tablet": {
  },
  "@desktop": {
    borderRight: "none",
    borderBottom: " solid 2px rgba(255,255,255,0.5)",
  },
  "&:hover": {
    color: "#ee7951",
    cursor: "pointer",
  },
});

export const innerAside = styled("aside", {
  display: "flex",
  position: "absolute",
  zIndex:3,
  "@mobile": {
    backgroundColor: "transparent",
    flexDirection: "row",
    bottom: "43%",
    left: 13,
    width: "95%",
    height: "6.8%",
  },
  "@tablet": {
    height: "7%",
  },
  "@desktop": {
    backgroundColor: "Black",
    flexDirection: "column",
    bottom: 16,
    left: 32,
    width: "12%",
    height: "40%",
  },
});


export const twitter = styled("div", {
  position: "absolute",
  "& div": {
    marginTop: "0px !important",
    marginBottom: "0px !important",
  },
  width: "25%",
  backgroundColor: "white",
  height: "66%",
  top: "20%",
  "&::-webkit-scrollbar": {
    width: "10px",
    backgroundColor: "rgb(0, 224, 224)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(8, 130, 130)",
  },
  overflowX: "hidden",
  borderBottomRightRadius: "2 %",
  right: "7%",
  "@mobile": {
    display: "none",
  },
  "@desktop": {
    display: "block",
  },
});

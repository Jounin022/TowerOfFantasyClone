import { styled } from "src/styles/stitches.config";
import { ResponsiveImage } from "utils/functions";

export const wrapper = styled("div",{ 
    display:'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: "space-between",
    // bgg:true,
    position: "relative",
    width: "100%",
    height: "100%",
})

export const tof = styled("div",{ 
    width: "100%",
    height: "20px",
    // bgg:true,
    fontFamily:"Oxanium",
    fontSize:"15px",
    position: "relative",
    margin:0,
})
export const bar = styled(ResponsiveImage,{ 
    // fontFamily:"Oxanium",
    // fontSize:"15px",
    // margin:0,
})

export const page_title = styled("h1", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    background:"repeating-linear-gradient(135deg, #e4e4f1, #e4e4f1 10px, transparent 10px, transparent 15px);",
    // fontWeight:"800",
    fontSize:"35px",
    // fontSize:"35px",
    fontFamily:"Oxanium",
    width: "100%",
    height: "70%",
    // opacity: "0.5",
    // textAlign: "center",
    // textJustify: "center",
    padding: '0 auto',
    // backgroundColor: "blue",
    position: "relative",
    margin:0,
  });
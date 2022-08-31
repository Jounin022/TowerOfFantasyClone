import { styled } from "../../styles/stitches.config";

export const li = styled("li", {
  listStyle: "none",
  position: "relative",
  zIndex:11,
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    in: {
      topBar: {
        marginRight: 30,
        "&::after": {
          content: `''`,
          position: "absolute",
          backgroundImage: `url('/assets/images/general/navigationBar/nav-line.png')`,
          opacity: 0,
          left: 0,
          bottom: -15,
          height: 4,
          zIndex: -1,
          // transform: "scalex(0) ",
          transition: "all 400ms cubic-bezier(0.25,0.46,0.45,0.94) 0s",
        },
        "&:hover":{
          "&::after": {
            opacity: 1,
            transform: "scalex(1)",
          },
        }
      },
      sideBar: {
        width:30,
        height: 30,
      },
      sideBarTop: {
        width:26,
        height: 30,
        transform: 'translate(2px ,190px)'
      },
      sideBarBottom: {
        width:30,
        height: 30,
        transform: 'translate(3px ,-185px)'
      },
      topBarRight:{
        marginRight: 0,
        marginLeft:20,
      }
    },
  },
});

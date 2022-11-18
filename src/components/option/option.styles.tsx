import { styled } from "src/styles/stitches.config";

export const li = styled("li", {
  listStyle: "none",
  position: "relative",
  zIndex:11,
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
      haveLine: { 
        true: {
        "&::after": {
          content: `''`,
          position: "absolute",
          backgroundImage: `url('/assets/images/general/navigationBar/nav-line.png')`,
          opacity: 0,
          left: 0,
          bottom: -14,
          height: 4,
          zIndex: -1,
          transition: "all 400ms cubic-bezier(0.25,0.46,0.45,0.94) 0s",
        },
        "&:hover":{
          "&::after": {
            opacity: 1,
            transform: "scalex(1)",
          },
        }
      },
      },
  },
});

export const Button = styled("button", {
  border: 'none',
  background: 'transparent',
  fontFamily:"Oxanium",
  fontSize:"18px",
  
})

import { styled } from "../../styles/stitches.config";

export const navbar = styled("nav", {
  width: "100%",
  height: "7vw",
  backgroundImage: `url('/assets/images/general/navigationBar/top.png')`,
  display: "flex",
  position: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  zIndex:10,
  variants: {
    device: {
      cellphone: {
        opacity: 0,
        transition: '1s ',
      },
      tablet: {
        opacity: 0,
      },
      desktop: {
        opacity: 1,
        transition: '1s ',
      },
    },
  },
});

export const logo = styled('figure', {
  width: "15vw",
  height: "5vw",
  position: "relative",
  display: 'block',
  margin:0,
}); 

export const ul = styled('ul', {
position: 'absolute',
height: "3.7vw",
margin:0,
padding:0,
display: "flex",
alignItems: "center",
justifyContent: "flex-start",
top: 0,
variants:{
  position:{
    left:{
      left: '19vw',
    },
    right:{
      left: '67vw',
    }
  }
}
}); 

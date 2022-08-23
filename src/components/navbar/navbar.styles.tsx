import { styled } from "../../styles/stitches.config";
import topBar from "../../styles/assets/images/general/navigationBar/top.png";

export const navbar = styled("nav", {
  width: "100%",
  height: "7vw",
  backgroundImage: `url(${topBar.src})`,
  display: "flex",
  position: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  variants: {
    color: {
      cellphone: {
        // backgroundColor: 'Green'
        display: "none",
      },
      tablet: {
        display: "block",
        // backgroundColor: 'Red'
      },
      desktop: {
        display: "block",
        // backgroundColor: 'Blue'
      },
    },
  },
});

export const logo = styled('div', {
  width: "15vw",
  height: "5vw",
  position: "relative",
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

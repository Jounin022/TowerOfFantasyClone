import { ResponsiveImage } from "utils/functions";
import { styled } from "src/styles/stitches.config";

export const navbar = styled("nav", {
  width: "100%",
  display: "flex",
  position: "fixed",
  height: "100px",
  zIndex:10,
      '@mobile': {
        opacity: 0,
        transition: '1s ',
      },
      "@tablet": {
        opacity: 0,
      },
      "@desktop": {
        flexDirection: 'row',
        opacity: 1,
        transition: '0s',
      },
   
});

export const logo = styled('figure', {
  width: "15vw",
  height: "70px",
  position: "relative",
  display: 'block',
  margin:0,
}); 

export const background = styled(ResponsiveImage)

export const ul = styled('ul', {
position: 'absolute',
height: "55px",
margin:0,
padding:0,
display: "flex",
alignItems: "center",
justifyContent: "space-between",
top: 0,
variants:{
  position:{
    left:{
      width: "25%",
      left: '16%',
    },
    right:{
      
      width: "25%",
      right: '0',
    }
  }
  
}
}); 

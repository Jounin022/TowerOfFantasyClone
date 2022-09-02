import { styled } from "../../styles/stitches.config";

export const navbar = styled("nav", {
  width: "100%",
  display: "flex",
  position: "fixed",
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
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('/assets/images/general/navigationBar/top.png')`,
        height: "7vw",
        opacity: 1,
        transition: '0s',
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
      "& li":{
        alignSelf:"end",
        marginBottom:"15px",
      }
    },
    right:{
      left: '67vw',
    }
  }
  
}
}); 

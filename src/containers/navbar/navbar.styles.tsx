import { styled } from "../../styles/stitches.config";

export const navbar = styled("nav", {
  width: "100%",
  display: "flex",
  position: "fixed",
  zIndex:10,
//  display:'none',
      '@mobile': {
        opacity: 0,
        transition: '1s ',
        // display: 'none',
      },
      "@tablet": {
        opacity: 0,
      },
      "@desktop": {
        flexDirection: 'row',
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('/assets/images/general/navigationBar/top.png')`,
        height: "98px",
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

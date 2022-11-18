import { builtinModules } from "module";
import { styled } from "src/styles/stitches.config";

export const changeButtonWrapper = styled('div', {
    "@mobile":{
     display: 'flex',
     width:"150px",
     height:"7%",
     position:"absolute",
     justifyContent:"flex-end",
     top:"10px",
     left:"10px",
    },
    "@tablet":{
      width:"20%",
      minWidth: '230px',
      maxWidth: '300px',
      height:"12%",
      // bgg:true,  
      top:"23%",
      left:"50px",
    },

  
  })
  
  export const changeIcon = styled('div', {
  left:0,
  width:'20%',
  height:'50%',
  position:'absolute',
  })  

  export const changeButton = styled('div', {
  width:'80%',
  transition: 'all 0.5s ease-in-out',
  transitionProperty:'top,right,bottom,left',
  height:'50%',
  position:'absolute',
  })
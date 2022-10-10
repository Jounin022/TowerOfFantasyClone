import { styled } from "styles/stitches.config";

export const dialogWrapper = styled('div', {
   
    "@mobile":{
     display: 'none',
     width:"40%",
     height:"25%",
     bottom:"100px",
     minWidth: '800px',
     maxWidth: '800px',
     position:"absolute",
     left:"200px",
    },
    "@tablet":{
      // display: 'block',
    },
    "@desktop":{
      display: 'block',
    },
  
  })
  
  export const dialog = styled('div', {
  width:'100%',
  height:'100%',
  filter: 'drop-shadow(0 0 2rem black)',
  // backgroundColor:'blue',
  })
import { styled } from "src/styles/stitches.config";
import { ResponsiveImage } from "utils/functions";

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
    "@desktop":{
      display: 'block',
    },
  
  })
  
  export const dialog = styled(ResponsiveImage, {
  width:'100%',
  height:'100%',
  filter: 'drop-shadow(0 0 2rem black)',
  // backgroundColor:'blue',
  })
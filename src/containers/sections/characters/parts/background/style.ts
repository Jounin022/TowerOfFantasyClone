import { styled } from 'styles/stitches.config';

export const charBackground = styled('div', {
    position: "absolute",
    bottom: 0,
    left: 0,
    transition: "all 1s ease-in-out",
    "@mobile":{
      width: "100%",
      height: "100%",
      bottom: 'unset',
      top:0,
      "&:after": {
        bottom: 'unset',
        top:0,
      }
    },
    "@tablet":{
      bottom: 0,
      top: 'unset',
      width: "100%",
      height: "66%",
    },
  
    "@desktop":{
      bottom: 0,
      top: 'unset',
      width: "100%",
      minWidth: '950px',
      height: "66%",
    },
  
    "&:after": {
      opacity: 0,
      content: '',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      width: "100%",
      height: "100%",
    },
  
  });
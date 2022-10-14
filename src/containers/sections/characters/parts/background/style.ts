import { styled } from 'styles/stitches.config';
import { ResponsiveImage } from "utils/functions";

export const charBackground = styled(ResponsiveImage, {
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
  export const charBackgroundImage = styled(ResponsiveImage)
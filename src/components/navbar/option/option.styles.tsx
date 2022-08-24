import { styled } from "../../../styles/stitches.config";  
 
export const li = styled("li",{
    marginRight:30, 
    listStyle:'none',
    position: 'relative',
    '&::after': {
      content: `''`,
      position: 'absolute',
      backgroundImage:`url('/assets/images/general/navigationBar/nav-line.png')` ,
      opacity: 0,
      left:0,
      bottom:-8,
      height: 2,
      zIndex:-1,
      transform: 'scalex(0) ',
      transition: "all 400ms cubic-bezier(0.25,0.46,0.45,0.94) 0s",
    },
    '&:hover': {
      '&::after': {
        opacity:1,
        transform: 'scalex(1)',
      },
      cursor:'pointer',
    },

});
import { styled } from "styles/stitches.config";

export const characterOption  = styled('button',{
  
    "@mobile":{
      height: '90%',
      padding:'10px',
      aspectRatio:'1/1',
      border:'none',
      boxShadow:'0px 0px 5px 2px rgba(0,0,0,0.3)',
    "&:after":{
      content:'',
      top:0,
      left:0,
      position: "absolute",
      height: '100%',
      scale:1.1,
      aspectRatio:'1/1',
    }
  },
  "@desktop":{
    height: 'unset',
    width: '90%',
    minWidth: '100%',
    "&:after":{
      height: 'unset',
      width: '100%',
    }
  },
  position:'relative',
  "&:focus-visible":{
    scale:1.2,
    outline: 'none',
    top:0,
  }
  
  })
  
  export const selectorWrapper  = styled('div',{
    "@mobile":{
    top:"75px",
    width: '100vw',
    height: '70px',
  },
  "@desktop":{
    top:"60%",
    transform: 'translateY(-45%)',
    width: '6%',
    height: '55vh',
    flexDirection: 'column',
    left:"3%",
  },
    gap:15,
    overflow: 'hidden',
    position: 'relative',
    padding:5,
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'center', 
  })
  
import { styled } from '../../../styles/stitches.config';
import Image from 'next/image'
export const background = styled('section', {
  backgroundImage: "url('/assets/images/page4/p4-bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: 'auto',
  height: '100vh',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  objectFit: 'contain',
  display: 'flex',
  overflow: 'hidden',
});

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
    width: 800,
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
export const weapon = styled('div', {
  "@mobile":{
    filter: 'drop-shadow(0 0 0.75rem black)',
  },
  "@desktop":{
    filter: 'none',    
  },
  width: '100%',
  height: '100%',
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  position: "absolute",
  bottom: 0,
  right: 0,
  transition: "all 1s ease-in-out",
});


export const weaponWrapper  = styled('div',{
  "@mobile":{
    bottom:"5%",
    width: "100vw",
    height: "40vh",
    position: "absolute",
  },
  "@desktop":{
    bottom:"15%",
    width: "30%",
    height: "70%",
    right:"5%",
    position: "absolute",
  }
})

export const characterWrapper  = styled('div',{
width: '100vw',
"@mobile":{
  height: '80vh',
},
"@desktop":{
  height: '100vh',
},
display: 'flex',
justifyContent: 'center',
bottom :0,
position: 'absolute',
})

export const character = styled('div',{
bottom:0,
width: '100%',
height: '100%',
position: 'absolute',
})

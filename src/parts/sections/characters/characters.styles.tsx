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
});

export const charBackground = styled('div', {
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex:1,
  width: 800,
  height: "66%",
  transition: "all 1s ease-in-out",
  "&:after": {
    opacity: 0,
    content: '',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    zIndex:2,
    width: "100%",
    height: "100%",
  },

});


export const characterWrapper  = styled('div',{
width:'100px',
height:'100px',
})

export const character = styled(Image,{
width:'100px',
height:'100px',
position: 'relative',
})

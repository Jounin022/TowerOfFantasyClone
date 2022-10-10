import { styled } from '../../../styles/stitches.config';

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

export const titleWrapper = styled("div",{
  position:"absolute",
  width:"22%",
  height:"10%",
  top: '10%',
  left: '10%',
  
  "@mobile":{
    display:"none",
  },
  "@desktop":{
    display:"flex",
  },
})
export const title = styled("div",{
  position:"absolute",
  width:'100%',
  height:'100%',
})
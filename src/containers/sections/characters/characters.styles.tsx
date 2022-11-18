import { ResponsiveImage } from 'utils/functions';
import { styled } from 'src/styles/stitches.config';

export const section = styled('section', {
  // backgroundImage: "url('/assets/images/page4/p4-bg.jpg')",
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  // objectFit: 'contain',
  width: 'auto',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
});

export const backgroundImage = styled(ResponsiveImage);

export const titleWrapper = styled("div",{
  position:"absolute",
  width:"22%",
  height:"10%",
  top: '14%',
  left: '9%',
  
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
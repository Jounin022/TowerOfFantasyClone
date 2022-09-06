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
});

export const charBackground = styled('div', {
  backgroundImage: "url('/assets/images/page4/nemesis/Nemesis-bg.png')",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex:1,
  width: 800,
  height: "66%",
  "&:before": {
    backgroundImage: "url('/assets/images/page4/nemesis/Nemesis-fade.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    zIndex:2,
    width: 100,
    height: 100,
  },

});

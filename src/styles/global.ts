import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  'html,body': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollbarWidth: 'none', 
    overflowX: 'hidden', 
  },
  
  body:{
     height:'100vh',
  }
})
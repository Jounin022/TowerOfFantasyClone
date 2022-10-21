import { useCharacter } from 'hooks/useCharacter'
import { globalCss } from './stitches.config'
export const globalStyles = globalCss({
  'html,body': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollbarWidth: 'none', 
    backgroundColor:'#333',
    "&::-webkit-scrollbar":{
      display:'none',
    },
  },

  
  "*":{
  boxSizing: 'border-box',
  },
  "@font-face":{
    fontFamily: 'Oxanium',
    fontWeight: 400,
    fontStyle: 'normal',
   },
  body:{
     height:'100vh',
  },

})

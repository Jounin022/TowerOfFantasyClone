import { ResponsiveImage } from "utils/functions"
import { styled } from "src/styles/stitches.config"
export const background = styled('section',{
    width:'auto',
    height:'100vh',
    position: 'relative',
    objectFit:'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    })  

    export const parallax = styled('div',{
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',  
  
})


export const frontDivItem = styled('div',{    
    position: 'relative',
    }
)


export const backDivItem = styled('div',{   
    clipPath: 'polygon(100% 0, 100% 90%, 85% 100%, 0% 100%, 0 15%, 10% 0)',
    width: '25%',
    height: '150px',
    position: 'relative',
    
})

export const backDiv = styled('div',{
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15%',
    alignItems: 'center',
})
export const middleDiv = styled('div',{
    position: 'absolute',
    width: '60%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
})
export const frontDiv = styled('div',{
    position: 'absolute',
    width: '60%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center',
    })
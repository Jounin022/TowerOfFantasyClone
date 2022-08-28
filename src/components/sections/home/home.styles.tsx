import { styled } from "../../../styles/stitches.config"    

export const video = styled('video',{
width:'100vw',
position:'absolute',
left: '50%',
top: '50%',
transform: 'translate(-50%,-50%)',
variants:{
    device: {
        cellphone_tablet: {
          display: 'none',
        },
        desktop: {
            display:  'block',
        },
      },
},
})      

export const background = styled('section',{
backgroundImage:`url('/assets/images/page1/download-bg.jpg')`,
backgroundSize:'cover',
backgroundPosition:'center',
width:'auto',
height:'100vh',
position: 'relative',
backgroundRepeat:"no-repeat",
objectFit:'contain',
display: 'flex',

})          


export const message = styled('div',{
    backgroundRepeat:"no-repeat",
    backgroundPosition:'center',
    position: 'absolute',
    margin: '0 auto',
    width: '100vw',
    objectFit:'contain',
    zIndex:1,
    variants: {
        device:{
            cellphone: {
                backgroundImage:`url('/assets/images/page1/home-tittle-m.png')`,
                backgroundSize:'contain',
                transition: '500ms all cubic-bezier(0.42,0,0.65,1.5)',
                height: 500,
                top:90,
            },
            tablet_desktop: {  
                backgroundImage:`url('/assets/images/page1/home-tittle.png')`,
                backgroundSize:'800px',
                height: 100,
                top:430,
                
            },
    }
}
})  

export const foot = styled('footer',{
backgroundPosition:'center',
left: 0,
bottom: 0,
pointerEvents:'none',
width:"100vw",
position: 'absolute',
backgroundRepeat:"no-repeat",
zIndex: 1,
variants: {
    device:{
        cellphone: {
            backgroundImage:`url('/assets/images/page1/p1-bottom-m.png')`,
            backgroundSize:'100% ',
            height:'8vw',
        },
        tablet_desktop: {  
            backgroundImage:`url('/assets/images/page1/p1-bottom.png')`,
            backgroundSize:'100% 100%',
            height:'100vh',
        },
}
}
})      
import { styled } from "../../../styles/stitches.config"
// import backgroundImage from "/assets/images/page1/download-bg.jpg";
export const video = styled('video',{
width:'100vw',
position:'absolute',
left: '50%',
top: '50%',
transform: 'translate(-50%,-50%)',
variants:{
    device: {
        cellphone: {
          display: 'none',
        },
        tablet: {
            display:  'none',
        },
        desktop: {
            display:  'block',
        },
      },
},
})      

export const background = styled('article',{
backgroundImage:`url('/assets/images/page1/download-bg.jpg')`,
backgroundColor:'Green',
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
                transition: '500ms ',
                height: 500,
                top:90,
            },
            tablet: {  
                backgroundImage:`url('/assets/images/page1/home-tittle.png')`,
                backgroundSize:'800px',
                height: 100,
                top:450,
                
            },
            desktop: { 
                backgroundImage:`url('/assets/images/page1/home-tittle.png')`,
                backgroundSize:'800px',
                transition: '500ms ',
                height: 100,
                top:450,
                
            },
    }
}
})  

export const foot = styled('div',{
backgroundSize:'100% 100%',
backgroundPosition:'center',
left: 0,
bottom: 0,
pointerEvents:'none',
width:"100vw",
position: 'absolute',
backgroundRepeat:"no-repeat",
zIndex: 100,
variants: {
    device:{
        cellphone: {
            backgroundImage:`url('/assets/images/page1/p1-bottom-m.png')`,
            // height: '0px 100vw',
            // backgroundColor:'Green',
            backgroundSize:'100% ',
            bottom: 0,
            height:'8vw',
            // transition: '500ms ',
        },
        tablet: {  
            backgroundImage:`url('/assets/images/page1/p1-bottom.png')`,
            backgroundSize:'100% 100%',
            height:'100vh',
        },
        desktop: { 
            backgroundImage:`url('/assets/images/page1/p1-bottom.png')`,
            backgroundSize:'100% 100%',
            height:'100vh',
            // transition: '500ms ',
     },
}
}
})      
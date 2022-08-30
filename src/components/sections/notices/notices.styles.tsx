import Image from "next/image";
import { styled } from "../../../styles/stitches.config";

export const background = styled("section", {
  height: "100vh",
  display: "flex",
  position: "relative",
  objectFit: "contain",
  backgroundRepeat: "no-repeat",
  justifyContent: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('/assets/images/page2/p6-bg-m.jpg')`,
        transition: "500ms all ease-in-out ",
      },
      tablet: {
        backgroundImage: `url('/assets/images/page2/p6-bg.jpg')`,
        backgroundPosition: "center",
      },
      desktop: {},
    },
  },
});

export const title = styled("div", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  objectFit: "contain",
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('/assets/images/page2/p6-title-m.png')`,
        width: "260px",
        height: "60px",
        left: 15,
        right: "auto",
        top: "5%",
      },
      tablet: {
        backgroundImage: `url('/assets/images/page2/p6-title.png')`,
        width: "550px",
        height: "70px",
        left: "7%",
        top: "13%",
        opacity: "0%",
      },
      desktop: {
        opacity: "100%",
        top: "13%",
      },
    },
  },
});

export const panel = styled("div", {
  width: "95%",
  display: "flex",
  position: "absolute",
  objectFit: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  pointerEvents: "none",
  zIndex: 5,
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('/assets/images/page2/p6-main-m.png')`,
        height: "80%",
        top: "15%",
      },
      tablet:{
        top: "19%",
        height: "100%",
      },
      desktop: {
        backgroundImage: `url('/assets/images/page2/p6-main.png')`,
        height: "75%",
        top: "16%",
      },
    },
  },
});
export const li = styled('li',{
  listStyle: 'none',
  width: 'auto',
  fontFamily: 'Oxanium',
  color: 'white',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  height: '50px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 15px',
  alignItems: 'center',

})
export const article = styled('article',{
position: "absolute",
bottom: 20,
overflow: "hidden",
overflowY: "scroll",
variants: {
  device:{
    cellphone: {
      left: 15,
      height: "38%",
      width: "95%",
    },
    tablet:{

    },
    desktop: {
      left: 220,
      height: "25%",
      width: "45vw",

  },
}
},
})  

export const button = styled('button',{
pointerEvents: "painted",
width: '100%',
height: '100%',
fontSize: '1rem',
color: 'white',
fontFamily:'Oxanium',
backgroundColor:'transparent',
border:'none',
variants: {
  device:{
    cellphone: {
      borderRight:' solid 2px rgba(255,255,255,0.5)',
    },
    tablet:{},
    desktop: {
      borderRight:'none',
    borderBottom:' solid 2px rgba(255,255,255,0.5)',
  },
}
},

"&:hover":{
  color: '#ee7951',
  cursor: 'pointer',
},
})

export const innerAside = styled("aside", {
  display: 'flex',
  position: "absolute",
  variants: {
    device: {
      cellphone: {
        backgroundColor:'transparent',
        flexDirection:'row',
        bottom: '43%',
        left: 13,
        width: "95%",
        height: "6.8%",
      },
      tablet: {
        height: "7%",
      },
      desktop: {
        backgroundColor:'Black',
        flexDirection:'column',
        bottom: 16,
        left: 32,
        width: "12%",
        height: "40%",
      }
    }
  },
})

export const image = styled("div", {
  position: "absolute",
  backgroundSize:"100% 100%",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
  variants: {
    device: {
      cellphone: {
        backgroundImage: `url('/assets/images/page2/noticia.jpg')`,
        top: "18.5%",
        left: "7%",
        height: "30%",
        width: "85%",
        borderTopRightRadius:"10%",
        borderTopLeftRadius:0,
      },
      tablet: {
        top: "23%",
        height: "40%",
        backgroundImage: `url('/assets/images/page2/noticia.jpg')`,
        backgroundPosition: "center",
        borderTopLeftRadius:"0%",
      },
      desktop: {
        backgroundImage: `url('/assets/images/page2/noticia.jpg')`,
        top: "24%",
        left: "4%",
        height: "44%",
        width: "62%",
        backgroundPosition: "center",
        borderTopRightRadius:"0%",
        borderTopLeftRadius:"10%",
      }
    },
  },
});

export const twitter = styled("div", {
  position: "absolute",
 "& div":{
  marginTop:"0px !important",
  marginBottom:"0px !important",
 },
  width: "27%",
  backgroundColor: "green",
  height: "60%",
  top: "23%",
  overflow: "scroll",
  overflowX:'hidden',
  borderBottomRightRadius:"20%",
  right: "4%",
  variants: {
    device:{
      cellphone: {
        display: "none",
      },
      tablet:{

      },
      desktop: {
        display: 'block',
      }
    },
    }
})

import { ResponsiveImage } from "utils/functions"
import { styled } from "src/styles/stitches.config"

export const aside = styled('aside',{
width: 50,
height: 180,
position: "fixed",
justifyContent: "center",
alignItems: "center",
overflow: 'hidden',
flexDirection: 'column',
top: "30%",
right: 10,
zIndex:10,
    "@mobile":{
        display: 'none',
    },
    "@desktop":{
        display: 'flex',
    },

})
export const background = styled(ResponsiveImage)
export const ul = styled('ul',{
    display: "flex",
    flexDirection: "column",
    gap:'40px' ,
    position: "relative",
    right: 20,
    transition: "all 500ms",
})

export const upArrow = styled("button",{
position: "absolute",
top:10,
backgroundColor: "transparent",
border: "none",
width:'25px',
height:'25px',
})

export const downArrow = styled("button",{
position: "absolute",
bottom:10,
backgroundColor: "transparent",
border: "none",
width:'25px',
height:'25px',
})
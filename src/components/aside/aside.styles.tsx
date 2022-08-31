import { styled } from "../../styles/stitches.config"
import { Option } from "../option"

export const aside = styled('aside',{
backgroundImage: `url('/assets/images/general/sidePagination/scrollBox.png')`,
backgroundRepeat: 'no-repeat',
backgroundSize: 'contain',
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
    "@tablet":{
        display: 'none',
    },
    "@desktop":{
        display: 'flex',
    },

})

export const ul = styled('ul',{
    display: "flex",
    flexDirection: "column",
    gap:'40px' ,
    position: "relative",
    right: 20,
    transition: "all 500ms",
})
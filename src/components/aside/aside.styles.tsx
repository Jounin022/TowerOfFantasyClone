import { styled } from "../../styles/stitches.config"

export const aside = styled('aside',{
backgroundImage: `url('/assets/images/general/sidePagination/scrollBox.png')`,
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
backgroundPosition: 'center',
width: 37,
height: 140,
position: "fixed",
display: "flex",
justifyContent: "center",
alignItems: "center",
top: 250,
right: 30,
zIndex:10
})

export const ul = styled('ul',{
    display: "flex",
    flexDirection: "column",
    gap:'50px' ,
})
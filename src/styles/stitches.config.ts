import { createStitches } from '@stitches/react'
interface IBackground {i:string , s?:string, p?:string}
export const mediaSizes = {
  mobile: '(min-width: 0px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)',
}
export const { styled, css, globalCss, getCssText ,keyframes ,config} = createStitches({
    media: mediaSizes,
    utils:{
      bgg: (value:boolean) => ({
        backgroundColor:"green" ,
      }),
      paddingX:(value:number)=>({
        paddingLeft:value,
        paddingRight:value,
      }),
      marginX:(value:string)=>({
        marginLeft: value,
        marginRight: value,
      }),
      br: (value:number) => ({
        borderRadius: value,
      }),
      bg: ({i, s, p }:IBackground) => ({
      backgroundImage:`url('${i}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: s || '100% 100%',
      backgroundPosition: p || "center",
      })
    }
  })
// export const responsive:any = {device: { "@sm": "mobile", "@md": "tablet", "@lg": "desktop"}}// as ComponentProps<S>

  // export const myTheme = createTheme({})
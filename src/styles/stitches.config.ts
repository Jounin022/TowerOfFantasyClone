import { createStitches, createTheme } from '@stitches/react'
export const { styled, css, globalCss, getCssText ,keyframes ,config} = createStitches({
    media: {
      sm: '(min-width: 0px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)'
    }
  })
export const responsive:any = {device: { "@sm": "cellphone", "@md": "tablet", "@lg": "desktop"}}// as ComponentProps<S>

  // export const myTheme = createTheme({})
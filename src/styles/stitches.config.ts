import { createStitches, createTheme } from '@stitches/react'
export const { styled, css, globalCss, getCssText ,keyframes ,config} = createStitches({
    media: {
      mobile: '(min-width: 0px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1024px)',
    },
  })
// export const responsive:any = {device: { "@sm": "mobile", "@md": "tablet", "@lg": "desktop"}}// as ComponentProps<S>

  // export const myTheme = createTheme({})
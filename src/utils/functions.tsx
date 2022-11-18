// import { styled } from "src/styles/stitches.config";
// import Image from "next/future/image";
// import { IImage } from "./types";

// const NextFutureImage = styled(Image);

// export const ResponsiveImage = (presets: IImage) => {
// if(typeof window !== 'undefined'){
//   if(window.innerWidth  < 768 ){
//     return <Image
//     src={presets['mobile']?.img || ""} 
//     alt={presets.alt || "image"}
//     sizes="(max-width: 1920px) 100vw,100vw"
//     quality={presets['mobile']?.quality || 75}
//     fill
//     srcSet
//     // css={{
//     //   objectFit: presets['mobile']?.objFit,
//     //   objectPosition: presets['mobile']?.objPosition,
//     //   ...presets.imgCss,
//     // }}
//   />
//   }
//   if(window.innerWidth  > 768 && window.innerWidth < 1024 ){
//     return <NextFutureImage
//     src={presets['tablet']?.img || ""} 
//     alt={presets.alt || "image"}
//     sizes="(max-width: 1920px) 100vw,100vw"
//     quality={presets['tablet']?.quality || 75}
//     layout="fill"
//     css={{
//       objectFit: presets['tablet']?.objFit,
//       objectPosition: presets['tablet']?.objPosition,
//       ...presets.imgCss,
//     }}
//     />
//   }
//   if(window.innerWidth  > 1024 ){
//     return  <NextFutureImage
//               src={presets['desktop']?.img || ""} 
//               alt={presets.alt || "image"}
//               sizes="(max-width: 1920px) 100vw,100vw"
//               quality={presets['desktop']?.quality || 75}
//               layout="fill"
//               css={{
//                 objectFit: presets['desktop']?.objFit,
//                 objectPosition: presets['desktop']?.objPosition,
//                 ...presets.imgCss,
//               }}
//             />
//   }
// }else {
//   return <></>
// }
 
// };
//////////////////////////////////////////////////////////////////////////
import { styled } from "src/styles/stitches.config";
import { IImage } from "./types";
import { mediaSizes} from "src/styles/stitches.config"

const StyledImg = styled('img',{
  width: '100%',
  height: '100%',
  position: 'absolute',
  top:0,
  left:0,
});

export const ResponsiveImage = (presets: IImage) => {
  return (
    <picture>
    <source media={mediaSizes.desktop} srcSet={presets.desktop?.img}  />
    <source media={mediaSizes.tablet} srcSet={presets.tablet?.img}  />
    <source media={mediaSizes.mobile} srcSet={presets.mobile?.img} />
    <StyledImg
      css={{
      "@mobile":{
        objectFit:presets.mobile?.objFit || 'fill',
        objectPosition:presets.mobile?.objPosition,
      },
      "@tablet":{
        objectFit:presets.tablet?.objFit || 'fill',
        objectPosition:presets.tablet?.objPosition,
      },
      "@desktop":{
        objectFit:presets.desktop?.objFit || 'fill' ,
        objectPosition:presets.desktop?.objPosition,
        },
        ...presets.imgCss
      }}
      src={presets.desktop?.img}
      alt={presets.alt}
    />
  </picture>
      
  );
};

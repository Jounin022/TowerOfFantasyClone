import { styled } from "styles/stitches.config";
import { DeviceContext, IDevice } from "contexts/device";
import Image from "next/future/image";

type ImgElementStyle = NonNullable<JSX.IntrinsicElements["img"]["style"]>;

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

type StaticImport = { default: StaticImageData } | StaticImageData;

type CommonImage = {
  img: string | StaticImport;
  objFit?: ImgElementStyle["objectFit"];
  objPosition?: ImgElementStyle["objectPosition"];
  quality?:number;
};

interface IImage {
  alt?:string;
  imgCss?:ImgElementStyle;
  'mobile'?: CommonImage;
  'tablet'?: CommonImage;
  'desktop'?: CommonImage;
}

const Test = styled(Image,{

})

export const ResponsiveImage = (presets: IImage) => {
  return (
    <DeviceContext.Consumer>
      {( currentDevice ) => presets[currentDevice.currentDeviceName]?.img ? <Test
        src={presets[currentDevice.currentDeviceName]?.img || ""}
        fill
        css={{
          objectFit:presets[currentDevice.currentDeviceName]?.objFit,
          objectPosition:presets[currentDevice.currentDeviceName]?.objPosition,
          ...presets.imgCss
        }}
        sizes="(max-width: 1920px) 100vw,100vw"
        quality={presets[currentDevice.currentDeviceName]?.quality || 75}
        placeholder="blur"
        alt={presets.alt || "image"}
        blurDataURL={presets[currentDevice.currentDeviceName]?.img.toString()}
      /> : <></>}
    </DeviceContext.Consumer>
    )
};

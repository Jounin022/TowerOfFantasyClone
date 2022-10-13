import { DeviceContext, IDevice } from "contexts/device";
import { useDevice } from "hooks/useDevice";
import Image from "next/image";

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
  'mobile'?: CommonImage;
  'tablet'?: CommonImage;
  'desktop'?: CommonImage;
}


export const getResponsiveImage = (presets: IImage) => {
  return (
    <DeviceContext.Consumer>
      {( currentDevice ) => <Image
        src={presets[currentDevice.currentDeviceName]?.img || ""}
        layout="fill"
        quality={presets[currentDevice.currentDeviceName]?.quality || 75}
        objectFit={presets[currentDevice.currentDeviceName]?.objFit}
        objectPosition={presets[currentDevice.currentDeviceName]?.objPosition}
        placeholder="blur"
        alt={presets.alt}
        blurDataURL={presets[currentDevice.currentDeviceName]?.img.toString()}
      />}
    </DeviceContext.Consumer>
    )
};

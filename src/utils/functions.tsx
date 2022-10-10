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
};

interface IImage {
  mobile?: CommonImage;
  tablet?: CommonImage;
  desktop?: CommonImage;
}

export const getResponsiveImage = (presets: IImage) => {
  const { currentDeviceName } = useDevice();
  if (currentDeviceName === "mobile") {
    return (
      <Image
        src={presets.mobile?.img || ""}
        layout="fill"
        objectFit={presets.mobile?.objFit}
        objectPosition={presets.mobile?.objPosition}
      />
    );
  }

  if (currentDeviceName === "tablet") {
    return (
      <Image
        src={presets.tablet?.img || presets.mobile?.img || ""}
        layout="fill"
        objectFit={presets.tablet?.objFit || presets.mobile?.objFit}
        objectPosition={
          presets.tablet?.objPosition || presets.mobile?.objPosition
        }
      />
    );
  }

  return (
    <Image
      src={
        presets.desktop?.img || presets.tablet?.img || presets.mobile?.img || ""
      }
      layout="fill"
      objectFit={
        presets.desktop?.objFit ||
        presets.tablet?.objFit ||
        presets.mobile?.objFit
      }
      objectPosition={
        presets.desktop?.objPosition ||
        presets.tablet?.objPosition ||
        presets.mobile?.objPosition
      }
    />
  );
};

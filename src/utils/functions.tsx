import { styled } from "styles/stitches.config";
import { DeviceContext, IDevice } from "contexts/device";
import Image from "next/future/image";
import { IImage } from "./types";

const NextFutureImage = styled(Image);

export const ResponsiveImage = (presets: IImage) => {
  return (
    <DeviceContext.Consumer>
      {(currentDevice) =>
        presets[currentDevice.currentDeviceName]?.img ? (
          <NextFutureImage
            src={presets[currentDevice.currentDeviceName]?.img || ""}
            alt={presets.alt || "image"}
            sizes="(max-width: 1920px) 100vw,100vw"
            quality={presets[currentDevice.currentDeviceName]?.quality || 75}
            placeholder="blur"
            fill
            blurDataURL={presets[currentDevice.currentDeviceName]?.img.toString()}
            css={{
              objectFit: presets[currentDevice.currentDeviceName]?.objFit,
              objectPosition: presets[currentDevice.currentDeviceName]?.objPosition,
              ...presets.imgCss,
            }}
          />
        ) : (
          <></>
        )
      }
    </DeviceContext.Consumer>
  );
};

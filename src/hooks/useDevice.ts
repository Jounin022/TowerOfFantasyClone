import { useLayoutEffect, useState } from 'react';

const isMobile = (actualWidth:number) => actualWidth < 768
const isTablet  = (actualWidth:number) => actualWidth > 768 && actualWidth < 1024
const isDesktop  = (actualWidth:number) => actualWidth > 1024


interface IDevice {
currentDeviceSize:[number,number];
currentDeviceName:'mobile'|'tablet'|'desktop';
}

export const useDevice = () => {
  const [size, setSize] = useState<IDevice>({currentDeviceSize:[0,0], currentDeviceName:'mobile'});

  useLayoutEffect(() => {
    function updateSize() {
        if(isMobile(window.innerWidth)){
            setSize({currentDeviceSize:[window.innerWidth,window.innerHeight],currentDeviceName:'mobile'});
        }
        if(isTablet(window.innerWidth)){
            setSize({currentDeviceSize:[window.innerWidth,window.innerHeight],currentDeviceName:'tablet'});
        }
        if(isDesktop(window.innerWidth)){
            setSize({currentDeviceSize:[window.innerWidth,window.innerHeight],currentDeviceName:'desktop'});
        }
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

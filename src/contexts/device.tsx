import { createContext, useLayoutEffect, useState } from "react";

export interface IDevice {
    currentDeviceSize:[number,number];
    currentDeviceName:'mobile'|'tablet'|'desktop';
}

const isMobile = (actualWidth:number) => actualWidth < 768
const isTablet  = (actualWidth:number) => actualWidth > 768 && actualWidth < 1024
const isDesktop  = (actualWidth:number) => actualWidth > 1024

export const DeviceContext = createContext({} as IDevice)
export const DeviceProvider = ({children}:any) => {
    const [currentDevice, setCurrentDevice] = useState<IDevice>({currentDeviceSize:[0,0], currentDeviceName:'mobile'});

    useLayoutEffect(() => {
      function updateSize() {
          if(isMobile(window.innerWidth)){
            setCurrentDevice({currentDeviceSize:[window.innerWidth,window.innerHeight],currentDeviceName:'mobile'});
          }
          if(isTablet(window.innerWidth)){
            setCurrentDevice({currentDeviceSize:[window.innerWidth,window.innerHeight],currentDeviceName:'tablet'});
          }
          if(isDesktop(window.innerWidth)){
            setCurrentDevice({currentDeviceSize:[window.innerWidth,window.innerHeight],currentDeviceName:'desktop'});
          }
      }
  
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    
    return (
    <DeviceContext.Provider value={currentDevice}>
    {children}
    </DeviceContext.Provider>
    )
}
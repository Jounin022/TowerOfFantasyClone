import { DeviceContext } from "contexts/device";
import { useContext } from "react";

export const useDevice = () => {
const {currentDeviceSize, currentDeviceName } = useContext(DeviceContext)
  return {currentDeviceSize, currentDeviceName};
}

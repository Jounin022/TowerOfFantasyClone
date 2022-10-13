import type { NextPage } from "next";
import DeviceIndicator from "../components/displayIndicator";
import { SectionProvider } from "../contexts/section";
import { Main } from "../containers/sections"
import { DeviceProvider } from "contexts/device";

const ToFSPA: NextPage = () => {
  return (
    <SectionProvider>
      <DeviceProvider>
      <Main/>
      <DeviceIndicator />
      </DeviceProvider>
    </SectionProvider>
  );
};

export default ToFSPA;

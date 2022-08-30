import type { NextPage } from "next";
import DeviceIndicator from "../components/displayIndicator";
import { SectionProvider } from "../contexts/section";
import { Main } from "../components/sections"

const ToFSPA: NextPage = () => {
  return (
    <SectionProvider>
      <Main/>
      <DeviceIndicator />
    </SectionProvider>
  );
};

export default ToFSPA;

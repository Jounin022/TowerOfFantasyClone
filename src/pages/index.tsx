import type { NextPage } from "next";
import DeviceIndicator from "../components/displayIndicator";
import { SectionProvider } from "../contexts/section";
import { Main } from "../containers/sections"
import { DeviceProvider } from "contexts/device";
import { CharacterProvider } from "contexts/character";

const ToFSPA: NextPage = () => {
  return (
    <SectionProvider>
      <CharacterProvider>
      <DeviceProvider>
      <Main/>
      <DeviceIndicator />
      </DeviceProvider>
      </CharacterProvider>
    </SectionProvider>
  );
};

export default ToFSPA;

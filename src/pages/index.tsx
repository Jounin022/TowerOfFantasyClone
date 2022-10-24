import type { NextPage } from "next";
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
      </DeviceProvider>
      </CharacterProvider>
    </SectionProvider>
  );
};

export default ToFSPA;

import type { NextPage } from "next";
import DeviceIndicator from "../components/displayIndicator";
import Navbar from "../components/navbar";
import {Home} from "../components/sections/home";
import {Notices} from "../components/sections/notices";
import {Features} from "../components/sections/features";
import {Characters} from "../components/sections/characters";
import {About} from "../components/sections/about"; 
import { Aside } from "../components/aside";
const ToFSPA: NextPage = () => {
  return (
    <main>
      <Navbar />
      <Aside/>
      <Home/>
      <Notices/>
      <About/>
      <Characters/>
      <Features/>
      <DeviceIndicator />
    </main>
  );
};

export default ToFSPA;

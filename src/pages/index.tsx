import type { NextPage } from "next";
import DeviceIndicator from "../components/displayIndicator";
import Navbar from "../components/navbar";
import Home from "../components/articles/home";
const ToFSPA: NextPage = () => {
  return (
    <>
      <Navbar />
      <Home/>
      {/* <Home/> */}
      <DeviceIndicator />
    </>
  );
};

export default ToFSPA;

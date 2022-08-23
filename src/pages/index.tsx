import type { NextPage } from "next";
import DeviceIndicator from "../components/displayIndicator";
import Navbar from "../components/navbar";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <DeviceIndicator />
    </>
  );
};

export default Home;

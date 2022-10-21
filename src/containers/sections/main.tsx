import { Home, Notices, Features, Characters, About } from "./index";
import { Aside } from "../aside";
import { Navbar } from "../navbar";
import { useSection } from "../../hooks/useSection";
import { useEffect } from "react";
import {styled} from "../../styles/stitches.config"

export const Main = () => {
  const { onScroll , activePage} = useSection();
  
  useEffect(() => {
    document.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);

const Main = styled('main',{
  // height: '100vh',
  // scrollSnapType: 'block mandatory',
  // scrollSnapAlign:'start',
  // overflowY:'scroll',
})

// const isSectionRendered = (pg:number) => {
//   return pg === activePage || pg < activePage + 2
// }

  return (
    <main id="main" onWheel={(e) => onScroll(e)}>
      <Navbar />
      <Aside />
      <Home />
      <Characters />
      <Notices />
      <About />
      <Features />
      {/* {isSectionRendered(1) && <Home />}
      {isSectionRendered(2) && <Characters />}
      {isSectionRendered(3) && <Notices />}
      {isSectionRendered(4) && <About />}
      {isSectionRendered(5) && <Features />} */}
    </main>
  );
};

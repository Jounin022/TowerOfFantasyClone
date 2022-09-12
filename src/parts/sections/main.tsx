import { Home, Notices, Features, Characters, About } from "./index";
import { Aside } from "../aside";
import { Navbar } from "../navbar";
import { useSection } from "../../hooks/useSection";
import { useEffect } from "react";
import {styled} from "../../styles/stitches.config"
export const Main = () => {
  const { onScroll } = useSection();

  // cancela ação padrão do scroll para não parar entre uma tela e outra
  // useEffect(() => {
  //   document.addEventListener(
  //     "wheel",
  //     (e) => {
  //       e.preventDefault();
  //     },
  //     { passive: false }
  //   );
  // }, []);

const Main = styled('main',{
  height: '100vh',
  scrollSnapType: 'block mandatory',
  scrollSnapAlign:'start',
  overflowY:'scroll',
})

  return (
    <Main onWheel={(e) => onScroll(e)}>
      <Navbar />
      <Aside />
      <Home />
      <Notices />
      <About />
      <Characters />
      <Features />
    </Main>
  );
};

import { Home, Notices, Features, Characters, About } from "./index";
import { Aside } from "../aside";
import { Navbar } from "../navbar";
import { useSection } from "../../hooks/useSection";
import { useEffect } from "react";

export const Main = () => {
  const { onScroll } = useSection();

  // cancela ação padrão do scroll
  useEffect(() => {
    document.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);
  
  return (
    <main onWheel={(e) => onScroll(e)}>
      <Navbar />
      <Aside />
      <Home />
      <Notices />
      <About />
      <Characters />
      <Features />
    </main>
  );
};

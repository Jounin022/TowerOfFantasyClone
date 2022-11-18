import { Home, Notices, Features, Characters, About } from "./index";
import { Aside } from "../aside";
import { Navbar } from "../navbar";
import { useSection } from "../../hooks/useSection";
import { useEffect, useState } from "react";
import { ICharacter } from "utils/types";
import { cities } from "utils/cities";
import { characters } from "utils/characters";

export const Main = () => {
  const { onScroll, activePage , setActivePage} = useSection();
  const [simulacrum, setSimulacrum] = useState(false) 
  const [activeCity, setActiveCity] = useState(1);
  const [activeCharacter, setActiveCharacter] = useState<ICharacter>(characters[0]);

  const props = {
    activeCharacter,
    activePage,
  }

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
    <main id="main" onWheel={(e) => onScroll(e)}>
      <Navbar {...props} setActivePage={setActivePage} />
      <Aside {...props} setActivePage={setActivePage}/>
      <Home {...props} />
      <Characters {...props} simulacrum={simulacrum} setSimulacrum={setSimulacrum} setActiveCharacter={setActiveCharacter}/>
      <Notices {...props} />
      <About {...props} activeCity={activeCity} cities={cities} setActiveCity={setActiveCity}/>
      <Features {...props} />
    </main>
  );
};

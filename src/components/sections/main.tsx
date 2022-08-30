import { Navbar, Home, Notices, Features, Characters, About, Aside} from "./index";
// import {useRef} from "react"
import { useSection } from "../../hooks/useSection";
import { useEffect, useState } from "react";
export const Main = () => {
    const {onScroll} = useSection()
    useEffect(() =>{
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
        }, { passive: false });
    },[])
    return (
        <main onWheel={(e) =>onScroll(e)}>
      <Navbar />
      <Aside/>
      <Home />
      <Notices/>
      <About/>
      <Characters/>
      <Features/>
      
    </main>
    )
}
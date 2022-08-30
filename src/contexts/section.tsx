import { createContext, useEffect, useState } from "react";
type activePageType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface sectionInterface {
  activePage: number;
  setActivePage: (page: number) => void;
}
export const SectionContext = createContext({} as sectionInterface);

export const SectionProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() =>{
      let element = document.getElementById(`section-${activePage}`)
      element?.scrollIntoView({
        block:'start',
        behavior:'smooth',
      })
},[activePage])

  return (
    <SectionContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </SectionContext.Provider>
  );
};

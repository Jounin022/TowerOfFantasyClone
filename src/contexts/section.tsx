import {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
  WheelEvent,
  WheelEventHandler,
} from "react";
type activePageType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
interface sectionInterface {
  activePage: number;
  setActivePage: (page: number) => void;
  onScroll: (event: any) => void;
}
export const SectionContext = createContext({} as sectionInterface);

export const SectionProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState<number>(1);
  
  const onScroll = (e: WheelEvent<HTMLElement | undefined>) => {
    let element = document.getElementById(`section-${activePage}`);
    if (e?.deltaY > 0 && activePage < 7) {
      setActivePage(activePage + 1);
      element?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    if (e?.deltaY < 0 && activePage > 1) {
      setActivePage(activePage - 1);
      element?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let element = document.getElementById(`section-${activePage}`);
    element?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, [activePage]);


  return (
    <SectionContext.Provider value={{ activePage, setActivePage, onScroll }}>
      {children}
    </SectionContext.Provider>
  );
};

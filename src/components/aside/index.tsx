import * as S from "./aside.styles";
import { Option } from "../option";
import { useSection } from "../../hooks/useSection";
import { NavOptionsArr } from "../../utils/navigation/index";

import ActiveTop from "../../../public/assets/images/general/sidePagination/scroll-prev.png";
import InactiveTop from "../../../public/assets/images/general/sidePagination/prev-gray.png";
import ActiveBottom from "../../../public/assets/images/general/sidePagination/scroll-next.png";
import InactiveBottom from "../../../public/assets/images/general/sidePagination/next-gray.png";

export const Aside = () => {
  // window.addEventListener("scroll", (event) => {
  // event.preventDefault();
  // event.target.scrollTop 
  // })
  const { activePage, setActivePage } = useSection();
  return (
    <S.aside device={{ "@sm": "cellphone_tablet", "@lg": "desktop" }}>
      <Option
        action={() => setActivePage(activePage > 1 ? activePage - 1 : 1 )}
        activeImg={ActiveTop}
        inactiveImg={InactiveTop}
        isActive={activePage > 1}
        in="sideBarTop"
        alt="Go previous page."
      />
      <S.ul css={{ transform: `translateY(${245 + activePage * -70}px)` }}>
        {NavOptionsArr.map((options) => {
          return (
            <Option
              key={options.page}
              activeImg={options.activeNumber}
              inactiveImg={options.inactiveNumber}
              alt={options.alt}
              in="sideBar"
              w={30}
              h={30}
              isActive={activePage === options.page}
              action={() => setActivePage(options.page)}
            />
          );
        })}
      </S.ul>
      <Option
        action={() => setActivePage(activePage < 6 ? activePage + 1 : 6 )}
        activeImg={ActiveBottom}
        inactiveImg={InactiveBottom}
        isActive={activePage < 6}
        in="sideBarBottom"
        alt="Go previous page."
      />
    </S.aside>
  );
};

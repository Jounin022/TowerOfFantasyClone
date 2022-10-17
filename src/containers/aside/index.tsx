import * as S from "./aside.styles";
import { Option } from "../../components/option";
import { useSection } from "../../hooks/useSection";
import { NavOptionsArr } from "../../utils/navigation/index";

import ActiveTop from "../../../public/assets/images/general/sidePagination/scroll-prev.png";
import InactiveTop from "../../../public/assets/images/general/sidePagination/prev-gray.png";
import ActiveBottom from "../../../public/assets/images/general/sidePagination/scroll-next.png";
import InactiveBottom from "../../../public/assets/images/general/sidePagination/next-gray.png";

export const Aside = () => {
  const { activePage, setActivePage } = useSection();
  return (
    <S.aside>
      <Option
        action={() => setActivePage(activePage > 1 ? activePage - 1 : 1 )}
        activeImg={ActiveTop}
        inactiveImg={InactiveTop}
        isActive={activePage > 1}
        alt="Go previous page."
        w={25}
        h={25}
      />
      <S.ul css={{ transform: `translateY(${245 + activePage * -70}px)` }}>
        {NavOptionsArr.map((options) => {
          return (
            <Option
              key={options.page}
              text={options.number || ""}
              w={30}
              h={30}
              isActive={activePage === options.page}
              action={() => setActivePage(options.page || 0)}
            />
          );
        })}
      </S.ul>
      <Option
        action={() => setActivePage(activePage < 6 ? activePage + 1 : 6 )}
        activeImg={ActiveBottom}
        inactiveImg={InactiveBottom}
        isActive={activePage < 6}
        w={25}
        h={25}
        alt="Go previous page."
      />
    </S.aside>
  );
};

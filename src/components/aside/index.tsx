import * as S from "./aside.styles";
import * as Images from "./images";
import { Option } from "../option";
import { useSection } from "../../hooks/useSection";

export const Aside = () => {
  const { activePage , setActivePage} = useSection();
  return (
    <S.aside>
      <S.ul>
        <Option
          activeImg={Images.Active01}
          inactiveImg={Images.Inactive01}
          alt="page one button"
          in="sideBar"
          isActive={activePage === 1}
          action={() => setActivePage(1)}
          />
        <Option
          activeImg={Images.Active02}
          inactiveImg={Images.Inactive02}
          alt="page one button"
          in="sideBar"
          isActive={activePage === 2}
          action={() => setActivePage(2)}
          />
        <Option
          activeImg={Images.Active03}
          inactiveImg={Images.Inactive03}
          alt="page one button"
          in="sideBar"
          isActive={activePage === 3}
          action={() => setActivePage(3)}
          />
        <Option
          activeImg={Images.Active04}
          inactiveImg={Images.Inactive04}
          alt="page one button"
          in="sideBar"
          isActive={activePage === 4}
          action={() => setActivePage(4)}
          />
        <Option
          activeImg={Images.Active05}
          inactiveImg={Images.Inactive05}
          alt="page one button"
          in="sideBar"
          isActive={activePage === 5}
          action={() => setActivePage(5)}
        />
  
      </S.ul>
    </S.aside>
  );
};

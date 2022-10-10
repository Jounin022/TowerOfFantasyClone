import * as S from "./navbar.styles";
import Image from "next/image";
import { Option } from "../../components/option";
import { useSection } from "../../hooks/useSection";
import { NavOptionsArr , RightOptionsArr } from "../../utils/navigation/index";
import Logo from "../../../public/assets/images/general/navigationBar/logo.png";
import { navOptInterface } from "../../utils/navigation/index";

const firstListOptions = NavOptionsArr.filter((option) => {
  if (
    option.page === 1 ||
    option.page === 2 ||
    option.page === 4 ||
    option.page === 7
  ) {
    return option;
  }
});

export const Navbar = () => {
  const { activePage, setActivePage } = useSection();

  const isThirdOpt = (activePage: number, page: number)=>{
    if(page === 3 ){
      return activePage === 3 || activePage === 4 || activePage === 5;
    }
   return activePage === page
  }
  
const RenderOption = (option:navOptInterface, position:string) => {
  //  return (
  //  <Option
  //   key={option.page}
  //   line={isThirdOpt(activePage,option.page)? 1 : 0 }
  //   activeImg={option.activeImg}
  //   inactiveImg={option.inactiveImg}
  //   isActive={isThirdOpt(activePage,option.page)}
  //   action={() => setActivePage(option.page)}
  //   // alt={option.alt}
  //   w={option.w}
  //   h={option.h}
  //  /> 
// )
}
  
  return (
    <S.navbar
    >
      <S.logo>
        <Image
          src={Logo}
          alt="Logo from tower of fantasy"
          layout="fill"
          objectFit="contain"
        />
        <figcaption hidden>Logo tower of fantasy with a sword</figcaption>
      </S.logo>

      <S.ul position="left">
        {/* {firstListOptions.map((option) =>{
          return(
            <Option
            key={option.page}
            line={isThirdOpt(activePage,option.page)? 1 : 0 }
            activeImg={option.activeImg}
            inactiveImg={option.inactiveImg}
            isActive={isThirdOpt(activePage,option.page)}
            action={() => setActivePage(option.page)}
            alt={option.alt}
            w={option.w}
            h={option.h}
          />
          )})
        } */}
      </S.ul>

      <S.ul position="right">
      {/* {RightOptionsArr.map((option) =>{
        return (
          <Option
          key={option.alt}
          activeImg={option.activeImg}
          inactiveImg={option.inactiveImg}
          action={() => console.log("5")}
          in="topBarRight"
          alt={option.alt}
          w={option.w}
          h={option.h}
        />
        )
      })} */}
      </S.ul>
    </S.navbar>
  );
};

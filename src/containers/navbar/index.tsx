import * as S from "./navbar.styles";
import Image from "next/image";
import { Option } from "../../components/option";
import { useSection } from "../../hooks/useSection";
import Logo from "../../../public/assets/images/general/navigationBar/logo.png";
import { NavOptionsArr, RightOptionsArr } from "../../utils/navigation/index";
import { useCharacter } from "hooks/useCharacter";

export const Navbar = () => {
  const {activeCharacter} = useCharacter()
  const { activePage, setActivePage } = useSection();

  const filteredNavOptionsArr = NavOptionsArr.filter((_,index)=>{return index <= 3}) 
  const dropdownOptions =  NavOptionsArr.filter((_,index)=>{return index > 3})

  const isOptActive = (pg:number) =>{
    if (pg !== 4) {
      return activePage === pg
    }
    if (pg === 4) {
      return activePage === 4 || activePage === 5 || activePage === 6 || activePage === 7
    }
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

      <S.ul position="left" css={{filter: `hue-rotate(${activeCharacter.hueRotate})`}}>
        {filteredNavOptionsArr.map((option) =>{
          return(
            <Option
            key={option.page}
            line={isOptActive(option.page) ? 1 : 0}
            isActive={isOptActive(option.page)}
            action={() => {setActivePage(option.page)}}
            text={option.name}
            w={option.w}
            h={option.h}
          />
          )})
        }
      </S.ul>

      <S.ul position="right" css={{filter: `hue-rotate(${activeCharacter.hueRotate})`}}>
      {RightOptionsArr.map((option) =>{
        return (
          <Option
          activeImg={option.activeImg}
          inactiveImg={option.inactiveImg}
          action={() => console.log("5")}
          alt={option.alt || ''}
          w={option.w}
          h={option.h}
        />
        )
      })}
      </S.ul>
    </S.navbar>
  );
};

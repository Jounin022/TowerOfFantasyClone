import * as S from "./navbar.styles";
import Image from "next/image";
import { Option } from "../../components/option";
import { Logo } from "public/landing-page/navigationBar";
import { NavOptionsArr, RightOptionsArr } from "utils/navigation";
import { Top } from "public/landing-page/navigationBar"
import { ICharacter } from "utils/types";
interface INavbarProps {
  activeCharacter: ICharacter
  activePage:number
  setActivePage:(page:number) => void
}

export const Navbar = (props:INavbarProps) => {

  const filteredNavOptionsArr = NavOptionsArr.filter((_,index)=>{return index <= 3}) 
  const dropdownOptions =  NavOptionsArr.filter((_,index)=>{return index > 3})

  const isOptActive = (pg:number) =>{
    if (pg !== 4) {
      return props.activePage === pg
    }
    if (pg === 4) {
      return props.activePage === 4 || props.activePage === 5 || props.activePage === 6 || props.activePage === 7
    }
  } 

   return (
    <S.navbar
    >
      <S.background
       mobile={{img:Top.src, objFit:"fill"}}
       tablet={{img:Top.src, objFit:"fill"}}
       desktop={{img:Top.src, objFit:"fill"}}
      />
      <S.logo>
        <Image
          src={Logo.src}
          alt="Logo from tower of fantasy"
          layout="fill"
          objectFit="contain"
        />
        <figcaption hidden>Logo tower of fantasy with a sword</figcaption>
      </S.logo>

      <S.ul position="left" css={{filter: `hue-rotate(${props.activeCharacter.hueRotate})`}}>
        {filteredNavOptionsArr.map((option) =>{
          return(
            <Option
            key={option.page}
            line={isOptActive(option.page) ? 1 : 0}
            isActive={isOptActive(option.page)}
            action={() => {props.setActivePage(option.page)}}
            text={option.name}
            w={option.w}
            h={option.h}
          />
          )})
        }
      </S.ul>

      <S.ul position="right" css={{filter: `hue-rotate(${props.activeCharacter.hueRotate})`}}>
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

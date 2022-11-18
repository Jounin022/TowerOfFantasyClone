import * as S from "./aside.styles";
import { Option } from "../../components/option";
import { NavOptionsArr } from "utils/navigation";
import {
  InactiveBottom,
  ActiveBottom,
  ActiveTop,
  InactiveTop,
} from "public/landing-page/sidePagination";
import { ScrollBox } from "public/landing-page/sidePagination";
import { ICharacter } from "utils/types";

interface IAsideProps {
  activeCharacter: ICharacter;
  activePage: number;
  setActivePage: (page: number) => void;
}

export const Aside = (props: IAsideProps) => {
  return (
    <S.aside css={{ filter: `hue-rotate(${props.activeCharacter.hueRotate})` }}>
      <S.background desktop={{ img: ScrollBox.src, objFit: "fill" }} />
      <S.upArrow
        type="button"
        css={{
          bg: {
            i: props.activePage > 1 ? ActiveTop.src : InactiveTop.src,
            p: "center",
            s: "100%",
          },
        }}
      />
      <S.ul
        css={{ transform: `translateY(${245 + props.activePage * -70}px)` }}
      >
        {NavOptionsArr.map((options) => {
          return (
            <Option
              key={options.page}
              text={options.number || ""}
              w={30}
              h={30}
              isActive={props.activePage === options.page}
              action={() => props.setActivePage(options.page || 0)}
            />
          );
        })}
      </S.ul>
      <S.downArrow
        type="button"
        css={{
          bg: {
            i: props.activePage < 7 ? ActiveBottom.src : InactiveBottom.src,
            p: "center",
            s: "100%",
          },
        }}
      />
    </S.aside>
  );
};

import { StaticImageData } from "next/image";
import { useState } from "react";
import * as S from "./option.styles";
interface OptionProps {
  activeImg?: StaticImageData;
  inactiveImg?: StaticImageData;
  w?: number;
  h?: number;
  isActive?: boolean;
  action: () => void;
  number:string
  name?: string;
  in?:"topBar" | "sideBar" | "sideBarTop" | "sideBarBottom" | "topBarRight";
  line?: 1 | 0;
}

export const Option = (props: OptionProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <S.li
      css={{"&::after": {width: props.w , opacity: props.line, transform: `scalex(${props.line})`,}}}
      in={props.in || "topBar"}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() => props.action()}
    >
      <S.Button
        css={{ height:props.h || 25, width: props.w || 25, bgg:true}}
      />
    </S.li>
  );
};

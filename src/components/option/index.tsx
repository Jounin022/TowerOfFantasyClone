import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import * as S from "./option.styles";
interface OptionProps {
  activeImg: StaticImageData;
  inactiveImg: StaticImageData;
  w?: number;
  h?: number;
  isActive?: boolean;
  action: () => void;
  alt?: string;
  in?:"topBar" | "sideBar";
}

export const Option = (props: OptionProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <S.li
      css={{"&::after": {width: props.w}}}
      in={props.in || "topBar"}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() => props.action()}
    >
      <Image
        height={props.h || 25}
        width={props.w || 25}
        alt={props.alt}
        src={active || props.isActive ? props.activeImg : props.inactiveImg}
      />
    </S.li>
  );
};

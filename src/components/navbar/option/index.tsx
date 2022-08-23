import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import * as S from "./option.styles";
interface OptionProps {
  activeImg: StaticImageData;
  inactiveImg: StaticImageData;
  w: number;
  h: number;
  action: () => void;
  alt?: string;
}

export const Option = (props: OptionProps) => {
  const [active,setActive] = useState<boolean>(false)
  return (
    <S.li onMouseOver={()=>setActive(true)} onMouseOut={()=>setActive(false)} onClick={() => props.action()}>
      <Image
        height={props.h}
        width={props.w}
        alt={props.alt}
        src={active ? props.activeImg : props.inactiveImg}
      />
    </S.li>
  );
};

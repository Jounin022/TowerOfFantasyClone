import { useState } from "react";
import { ResponsiveImage } from "utils/functions";
import * as S from "./option.styles";
import { OptionProps } from "./types";

export const Option = (props: OptionProps) => {
  const [active, setActive] = useState<boolean>(false);

if(props.activeImg && props.inactiveImg) {
  const getImg = () => {
   return active ? props.activeImg : props.inactiveImg;
  }
   return (
    <S.li
      css={{"&::after": {width: props.w , opacity: props.line, transform: `scalex(${props.line})`,}}}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() => props.action()}
    >
      <S.Button css={{ height:props.h || 25, width: props.w || 25, bgg:true}}>asdf</S.Button>
    </S.li>
  );
}

   return (
    <S.li
      css={{"&::after": {width: props.w , opacity: props.line, transform: `scalex(${props.line})`}}}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() => props.action()}
    >
      <S.Button css={{ height:props.h, width: props.w, bgg:true}}>
        {props.text}
      </S.Button>
    </S.li>
  );
};

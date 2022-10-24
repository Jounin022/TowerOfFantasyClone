import { useState } from "react";
import * as S from "./option.styles";
import { OptionProps } from "./types";

export const Option = (props: OptionProps) => {
  const [active, setActive] = useState<boolean>(false);

  if (props.activeImg && props.inactiveImg) {
 
    return (
      <S.li
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
        onClick={() => props.action()}
      >
        <S.Button css={{ height: props.h, width: props.w, bg:{i:active ? props.activeImg : props.inactiveImg} }}/>
      </S.li>
    );
  }

  return (
    <S.li css={{
        "&::after": {
          width: props.w,
          opacity: props.line,
          transform: `scalex(${props.line})`,
        },
      }}
      haveLine={!!props.line}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() => props.action()}
    >
      <S.Button
        css={{
          height: props.h,
          width: props.w,
          color: props.isActive ? "#17d3fe" : "#24555c",
          transition:"color 400ms cubic-bezier(0.25,0.46,0.45,0.94) 0s",
          textShadow:props.isActive ? "0px 0px 10px #17d3fe": 'none',
          "&:hover": { color: "#17d3fe" },
        }}
        onClick={()=>console.log(props.isActive)}
      >
        {props.text}
      </S.Button>
    </S.li>
  );
};

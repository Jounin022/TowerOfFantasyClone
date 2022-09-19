import { useState } from "react";
import * as S from "./characters.styles";
import { useSection } from "hooks/useSection";
import { characters } from "utils/characters/index";

export const Characters = () => {
  const { activePage } = useSection();
  const [activeCharacter, setActiveCharacter] = useState(0);

  return (
    <S.background id="section-4">
          <button style={{zIndex:'5', width:"50px",height:"50px"}} onClick={()=>setActiveCharacter(1)}>mudar</button>
          <button style={{zIndex:'5',width:"50px",height:"50px"}} onClick={()=>setActiveCharacter(0)}>mudar2</button>
      <S.charBackground
        css={{
          transition: `all ${
            activePage === 4 ? "1" : "0.4"
          }s  cubic-bezier(0.18, 0.1, 0.05, 0.71)`,
          "&:after": {
            transition: `opacity ${activePage === 4 ? "1.5" : "0.4"}s linear  ${
              activePage === 4 ? "1" : "0.1"
            }s`,
            opacity: activePage === 4 ? 1 : 0,
          },
          "@mobile": {
            bg: { i: characters[activeCharacter].background_M, s: "cover" },
            opacity: activePage === 4 ? 0.4 : 0,
            "&:after": {
              bg: {
                i: characters[activeCharacter].fade_M,
                s: "auto",
                p: "top",
              },
            },
          },
          "@tablet": {
            transform: activePage === 4 ? " unset" : "translateX(-100%)",
            opacity: activePage === 4 ? 1 : 0,
            bg: { i: characters[activeCharacter].background, s: "cover" },
            "&:after": {
              bg: { i: characters[activeCharacter].fade, s: "cover" },
            },
          },
        }}
      />

      <S.characterWrapper>
        <S.character
          css={{
            "@mobile": {
              bg: {
                i: characters[activeCharacter].img_M,
                s: "contain",
                p: "center",
              },
            },
            "@tablet": {
              bg: { i: characters[activeCharacter].img, s: "cover" },
            },
          }}
        />
      </S.characterWrapper>

      <S.weaponWrapper>
      <S.weapon css={{
        "@mobile":{
          bg:{i:characters[activeCharacter].weapon_M,s:"contain"},
        },
        "@desktop":{
          bg:{i:characters[activeCharacter].weapon,s:"100% 100%"},
        },
        transition: `transform ${activePage === 4 ? "1" : "0.4"}s  cubic-bezier(0.18, 0.1, 0.05, 0.71)`,
        }}
       />
    </S.weaponWrapper>

    </S.background>
  );
};

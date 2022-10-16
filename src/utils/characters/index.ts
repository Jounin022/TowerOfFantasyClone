// import * as Meryl from "characters/meryl"
import * as Nemesis from "characters/nemesis";
import * as Meryl from "characters/meryl";
import * as Claudia from "characters/claudia";
import * as Samir from "characters/samir";

import * as Items from "characters/items";
import { ICharacter } from "./types";

export const activeBorder = Items.ActiveBorder.src
export const activeCBCharacter = Items.ActiveCBCharacter.src
export const inactiveCBCharacter = Items.InactiveCBCharacter.src
export const activeCBSimulacrum = Items.ActiveCBSimulacrum.src
export const inactiveCBSimulacrum = Items.InactiveCBSimulacrum.src
export const characterArrow = Items.changeToCharacter.src
export const simulacrumArrow = Items.changeToSimulacrum.src

export const Background = Items.Background.src
export const Background_M = Items.Background_M.src
export const Background_Color = Items.Background_Color.src
export const Background_Color_M = Items.Background_Color_M.src

export const downArrow =Items.DownArrow
export const upArrow =Items.UpArrow

export const characters = [
  {
    number: 0,
    name: "Nemesis",
    fade: Nemesis.Fade.src,
    fade_M: Nemesis.Fade_M.src,
    img: Nemesis.Main.src,
    img_M: Nemesis.Main_M.src,
    active: Nemesis.Active.src,
    inactive: Nemesis.Inactive.src,
    weapon: Nemesis.Weapon.src,
    weapon_M: Nemesis.Weapon_M.src,
    tab: Nemesis.Tab.src,
    hueRotate: "-203deg",
    mainColors: { primary: "#fff" },
    // audio: Nemesis.Audio,
  },
  {
    number: 1,
    name: "Meryl",
    hueRotate: "0deg",
    fade: Meryl.Fade.src,
    fade_M: Meryl.Fade_M.src,
    img: Meryl.Main.src,
    img_M: Meryl.Main_M.src,
    active: Meryl.Active.src,
    inactive: Meryl.Inactive.src,
    weapon: Meryl.Weapon.src,
    weapon_M: Meryl.Weapon_M.src,
    tab: Meryl.Tab.src,
    mainColors: { primary: "#fff" },
    // audio: Meryl.Audio,
  },
  {
    number: 2,
    name: "Claudia",
    hueRotate: "200deg",
    fade: Claudia.Fade.src,
    fade_M: Claudia.Fade_M.src,
    img: Claudia.Main.src,
    img_M: Claudia.Main_M.src,
    active: Claudia.Active.src,
    inactive: Claudia.Inactive.src,
    weapon: Claudia.Weapon.src,
    weapon_M: Claudia.Weapon_M.src,
    tab: Claudia.Tab.src,
    mainColors: { primary: "#fff" },
    audio: Meryl.Audio,
    // audio: Claudia.Audio,
  },
  {
    number: 3,
    hueRotate: "227deg",
    name: "Samir",
    fade: Samir.Fade.src,
    fade_M: Samir.Fade_M.src,
    img: Samir.Main.src,
    img_M: Samir.Main_M.src,
    active: Samir.Active.src,
    inactive: Samir.Inactive.src,
    weapon: Samir.Weapon.src,
    weapon_M: Samir.Weapon_M.src,
    tab: Samir.Tab.src,
    mainColors: { primary: "#fff" },
    audio: Meryl.Audio,
    // audio: Samir.Audio,
  },
] as ICharacter[];

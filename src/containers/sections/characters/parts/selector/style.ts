import { styled } from "src/styles/stitches.config";
import { ICharacter } from "utils/types";
import { ActiveBorder } from "characters/general/index";

export const characterOption = styled("button", {
  "@mobile": {
    height: "90%",
    padding: "10px",
    aspectRatio: "1/1",
    border: "none",
    boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.3)",
    "&:after": {
      content: "",
      top: 0,
      left: 0,
      position: "absolute",
      height: "100%",
      scale: 1.1,
      aspectRatio: "1/1",
    },
  },
  "@desktop": {
    height: "unset",
    width: "90%",
    minWidth: "100%",
    "&:after": {
      height: "unset",
      width: "100%",
    },
  },
  position: "relative",
  "&:focus-visible": {
    scale: 1.2,
    outline: "none",
    top: 0,
  },
});

export const selectorWrapper = styled("div", {
  gap: 15,
  overflow: "hidden",
  position: "fixed",
  top: 0,
  padding: 5,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  "@mobile": {
    width: "100vw",
    height: "70px",
  },
  "@tablet": {
    // top: "70%",
    width: "100px",
    height: "50vh",
    flexDirection: "column",
    left: "unset",
    right: "3%",
  },
  "@desktop": {
    width: "70px",
    height: "55vh",
    transform: "translateY(-45%)",
    // transform: "unset",
    top: "60%",
    right: "unset",
    left: "3%",
  },
});

export const handleSelectorWrapperStyle = (
  renderSideMenu: boolean,
  activePage: number,
  CHARACTER_PAGE_NUMBER: number
) => {
  return {
    opacity: renderSideMenu ? 1 : 0,
    transition: `all  ${renderSideMenu ? "0.5" : "0"}s ${
      renderSideMenu ? "0.5" : "0"
    }s`,
    "@mobile": {
      top: activePage > CHARACTER_PAGE_NUMBER ? "0px" : "75px",
    },
    "@desktop": { top: activePage >= CHARACTER_PAGE_NUMBER ? "60%" : "10px"},
  };
};

export const handleCharacterOptionStyle = (
  char: ICharacter,
  activeCharacter: number
) => {
  return {
    bg: { i: char.number === activeCharacter ? char.active : char.inactive },
    "&:after": {
      bg: { i: char.number === activeCharacter ? ActiveBorder.src : "unset" },
    },
  };
};

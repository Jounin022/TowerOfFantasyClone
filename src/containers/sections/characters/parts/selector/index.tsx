import * as S from "./style";
import { activeBorder } from "utils/characters/index";
import { ICharacter } from "utils/characters/types";
import { CHARACTER_PAGE_NUMBER } from "../../index"

interface BackgroundProps {
    activeCharacter: number,
    characters: ICharacter[],
    activePage:number,
    setActiveCharacter: (charNum:number) => void,
}

export const Selector = ({activeCharacter,characters,setActiveCharacter, activePage}:BackgroundProps) => { 
    
    const charOptions = characters.map((opt:ICharacter) => {
        return {
            name: opt.name,
            active:   opt.active,
            inactive: opt.inactive,
            number:   opt.number,
          };
    });

    return (
        <S.selectorWrapper>
        {charOptions.map((char) => {
          return (
            <S.characterOption
              css={{
                opacity: activePage === CHARACTER_PAGE_NUMBER ? 1 : 0,
                bg: {i: char.number === activeCharacter ? char.active : char.inactive},
                "&:after": {bg: {i: char.number === activeCharacter ? activeBorder : "unset"}},
              }}
              title={char.name}
              key={`${char.name}-opt`}
              type="button"
              onClick={() => setActiveCharacter(char.number)}
            />
          );
        })}
      </S.selectorWrapper>

  )}
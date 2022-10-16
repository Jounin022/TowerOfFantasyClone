import { createContext, ReactNode, useEffect, useState } from "react";
import { ICharacter } from "utils/characters/types";
import {characters} from "utils/characters"

interface ICharacterContext {
    setActiveCharacter: (character:ICharacter) => void ;
    activeCharacter:ICharacter;
}

export const CharacterContext =  createContext({} as ICharacterContext)
export const CharacterProvider = ({children}:{children:ReactNode}) => {
    const [activeCharacter, setActiveCharacter] = useState<ICharacter>(characters[1]);

    return (
     <CharacterContext.Provider value={{setActiveCharacter,activeCharacter:activeCharacter}}>
     {children}
     </CharacterContext.Provider>
    )
}
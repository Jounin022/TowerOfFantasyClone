import { CharacterContext } from "contexts/character"
import { useContext } from "react"

export const useCharacter = () => {
    const {activeCharacter,setActiveCharacter} = useContext(CharacterContext) 
    return {activeCharacter,setActiveCharacter} 
}
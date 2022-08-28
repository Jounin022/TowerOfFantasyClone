import { useContext } from "react";
import { SectionContext } from "../contexts/section";

export const useSection = () => {
    const section = useContext(SectionContext)
    return section
}
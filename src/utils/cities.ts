import { ICities } from "./types";

import { 
  Btn_Img_1,
  Btn_Img_2,
  Btn_Img_3,
  City_1,
  City_2,
  City_3,
 } from "public/landing-page/sections/about" 

export const cities = [
  {
    number: 1,
    title: "Fundação da civilização",
    story: "Através de um plano de colonização interestelar, os humanos criaram uma nova civilização em um planeta chamado Aida<br /><br /> Lá, construíram a Torre da Fantasia a fim de minerar Omnium, uma energia potente e misteriosa contida no cometa Mara.",
    iconImg: Btn_Img_1.src,
    cityImg: City_1.src,
    isActive: (selected: number) => selected === 1,
  },
  {
    number: 2,
    title: "Cataclismo e Renascimento",
    story: "O Cataclismo provocou a radiação de Omnium e uma fenda temporal que quase destruiu toda a civilização de Aida.",
    iconImg: Btn_Img_2.src,
    cityImg: City_2.src,
    isActive: (selected: number) => selected === 2,
  },
  {
    number: 3,
    title: "Caos e desordem",
    story: "Frente a uma nova ordem mundial emergente, os autoproclamados salvadores chamados Herdeiros de Aida declararam o Omnium como culpado de todos os desastres. Eles se opõem a tudo que a Hykros defende e causam novos conflitos no mundo.",
    iconImg: Btn_Img_3.src,
    cityImg: City_3.src,
    isActive: (selected: number) => selected === 3,
  },
] as ICities[];

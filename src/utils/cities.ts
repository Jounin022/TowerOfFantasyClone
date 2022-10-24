import * as Img from "./assets/landing-page/sections/about";

export const cities = [
  {
    number: 1,
    title: "Fundação da civilização",
    story:
      "Através de um plano de colonização interestelar, os humanos criaram uma nova civilização em um planeta chamado Aida<br /><br /> Lá, construíram a Torre da Fantasia a fim de minerar Omnium, uma energia potente e misteriosa contida no cometa Mara.",
    iconImg: Img.Btn_Img_1.src,
    cityImg: Img.City_1.src,
    isActive: (selected: number) => selected === 1,
    bottom: "25%",
    right: "625px",
  },
  {
    number: 2,
    title: "Cataclismo e Renascimento",
    story:
      "O Cataclismo provocou a radiação de Omnium e uma fenda temporal que quase destruiu toda a civilização de Aida.",
    iconImg: Img.Btn_Img_2.src,
    cityImg: Img.City_2.src,
    isActive: (selected: number) => selected === 2,
    bottom: "43%",
    right: "580px",
  },
  {
    number: 3,
    title: "Caos e desordem",
    story:
      "Frente a uma nova ordem mundial emergente, os autoproclamados salvadores chamados Herdeiros de Aida declararam o Omnium como culpado de todos os desastres. Eles se opõem a tudo que a Hykros defende e causam novos conflitos no mundo.",
    iconImg: Img.Btn_Img_3.src,
    cityImg: Img.City_3.src,
    isActive: (selected: number) => selected === 3,
    bottom: "59%",
    right: "500px",
  },
];

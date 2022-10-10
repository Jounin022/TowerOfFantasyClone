export const cities = [
  {
    number: 1,
    title: 'Fundação da civilização',
    story: 'Através de um plano de colonização interestelar, os humanos criaram uma nova civilização em um planeta chamado Aida<br /><br /> Lá, construíram a Torre da Fantasia a fim de minerar Omnium, uma energia potente e misteriosa contida no cometa Mara.',
    iconImg: '/assets/images/page3/p3-img1-m.png',
    isActive: (selected:number) => selected === 1,
    bottom: '25%',
    right: '625px',
  },
  {
    number: 2,
    title: 'Cataclismo e Renascimento',
    story: 'O Cataclismo provocou a radiação de Omnium e uma fenda temporal que quase destruiu toda a civilização de Aida.',
    iconImg: '/assets/images/page3/p3-img2-m.png',
    isActive: (selected:number) => selected === 2,
    bottom: '43%',
    right: '580px',
  },
  {
    number: 3,
    title: 'Caos e desordem',
    story: 'Frente a uma nova ordem mundial emergente, os autoproclamados salvadores chamados Herdeiros de Aida declararam o Omnium como culpado de todos os desastres. Eles se opõem a tudo que a Hykros defende e causam novos conflitos no mundo.',
    iconImg: '/assets/images/page3/p3-img3-m.png',
    isActive: (selected:number) => selected === 3,
    bottom: '59%',
    right: '500px',
  },
];
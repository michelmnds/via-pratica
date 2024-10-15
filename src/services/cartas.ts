interface Carta {
  category: string;
  description: string;
  image: string;
}

export const cartas: Carta[] = [
  {
    category: "Carta de condução: A1",
    description:
      "Todos os veículos da categoria AM; motociclos de cilindrada até 125cm3 e 11kw de potência; triciclos até 15kw.",
    image: "/images/motociclo.png",
  },
  {
    category: "Carta de condução: B1",
    description:
      "Máquinas industriais ligeiras; veículos a motor para até 8 passageiros com massa máxima de 3500kg, incluindo reboque ou semirreboque de até 750kg.",
    image: "/images/ligeiro.png",
  },
  {
    category: "Carta de condução: C1",
    description:
      "Automóveis pesados de mercadorias até 7500kg, podendo atrelar um reboque ou semirreboque até 750kg.",
    image: "/images/pesado.png",
  },
  {
    category: "Carta de condução: D1",
    description:
      "automóveis pesados para até 17 lugares (16 passageiros + condutor) com comprimento máximo de 8 metros. Pode atrelar reboque até 750kg.",
    image: "/images/auto-carro.png",
  },
];


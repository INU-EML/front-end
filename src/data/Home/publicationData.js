// Home publication tabs. IDs match the categories array on each publication.
export const publicationCategories = [
  {
    id: "featured",
    label: "Featured Publications",
    description:
      "Selected research highlights from Energy Materials Laboratory.",
  },
  {
    id: "recent",
    label: "Recent Publications",
    description: "Our recent work advancing energy materials and technologies.",
  },
  {
    id: "cover",
    label: "Cover Articles",
    description: "Our research featured on the covers of scientific journals.",
  },
];

export const publicationData = [
  // featured publications
  {
    categories: ["featured"],
    title: "Switching on electrocatalytic activity in solid oxide cells",
    authors: "Jae-ha Myung, Dragos Neagu, David N. Miller & John T. S. Irvine",
    journal: "Nature, 537, 528–531 (2016).",
    year: 2016,
    image: "/images/Home/PublicationItem/publication_nature.png",
    doi: "http://www.nature.com/doifinder/10.1038/nature19090",
  },
  {
    categories: ["featured"],
    title:
      "Nanoparticle Exsolution on Perovskite Oxides: Insights into Mechanism, Characteristics and Novel Strategies",
    authors:
      "Yo Han Kim, Hyeongwon Jeong, Bo-Ram Won, Hyejin Jeon, Chan-ho Park, Dayoung Park, Yeeun Kim, Somi Lee & Jae-ha Myung",
    journal: "Nano-Micro Letters. 2024, 16(33), Article No. 33.",
    year: 2024,
    image:
      "/images/Home/PublicationItem/publication_Nanoparticle Exsolution on Perovskite Oxides- Insights into Mechanism, Characteristics and Novel Strategies.png",
    doi: "https://link.springer.com/article/10.1007/s40820-023-01258-4",
  },
  {
    categories: ["featured"],
    title:
      "Exsolution Modeling and Control to Improve the Catalytic Activity of Nanostructured Electrodes",
    authors: "Yo Han Kim, Hyeongwon Jeong, Bo-Ram Won, Jae-ha Myung",
    journal: "Advanced Materials, 35(16), 2208984 (2023).",
    year: 2023,
    image:
      "/images/Home/PublicationItem/publication_Exsolution Modeling and Control to Improve the Catalytic Activity of Nanostructured Electrodes.png",
    doi: "https://doi.org/10.1002/adma.202208984",
  },
  {
    categories: ["featured"],
    title:
      "Operando Dynamic Self-Assembly of Bifunctional Electrocatalysts for High-Performance Symmetric Molten Carbonate Cells",
    authors:
      "Bo-Ram Won, Yeeun Kim, Kab In Kim, So Yeon Park, Jong-Hyun Kim, Hyeongwon Jeong, Hyejin Jeon, Sung-Pil Yoon, and Jae-ha Myung*",
    journal: "Applied Catalysis B: Environmental, 338, 126520 (2026)",
    year: 2026,
    image:
      "/images/Home/PublicationItem/publication_Operando Dynamic Self-Assembly of Bifunctional Electrocatalysts for High-Performance Symmetric Molten Carbonate Cells.png",
    doi: "https://doi.org/10.1016/j.apcatb.2026.126520",
  },
  {
    categories: ["featured"],
    title:
      "Stability and activity controls of Cu nanoparticles for high-performance solid oxide fuel cells",
    authors:
      "Seungyeon Jo, Hyeongwon Jeong,Yo Han Kim, Dragos Neagu, Jae-ha Myung",
    journal: "Applied Catalysis B: Environmental, 285, 119828 (2021)",
    year: 2021,
    image:
      "/images/Home/PublicationItem/publication_Stability and activity controls of Cu nanoparticles for high-performance solid oxide fuel cells.png",
    doi: "https://doi.org/10.1016/j.apcatb.2020.119828",
  },

  //recent publications
  {
    categories: ["recent"],
    title:
      "Advances in sputtering-based thin-film engineering for low-temperature solid oxide fuel cells",
    authors: "Somi Lee, Yo Han Kim, Bo-Ram Won, and Jae-ha Myung*",
    journal: "Renewable and Sustainable Energy Reviews, 224, 117493 (2027)",
    year: 2026,
    image:
      "/images/Home/PublicationItem/publication_Advances in sputtering-based thin-film engineering for low-temperature solid oxide fuel cells.png",
    doi: "https://doi.org/10.1016/j.rser.2026.117493",
  },
  {
    categories: ["recent"],
    title:
      "Microstructural engineering of anode functional layers for optimized electrode–electrolyte interfaces in protonic ceramic fuel cells",
    authors:
      "Yo Han Kim#, Hoyeong Sung#, Hyeongwon Jeong, Jong-Hyun Kim, Wonjun Jang, Jun-Young Park, Sihyuk Choi*, and Jae-ha Myung*",
    journal: "Chemical Engineering Journal, 547, 179781 (2026)",
    year: 2026,
    image:
      "/images/Home/PublicationItem/publication_Microstructural engineering of anode functional layers for optimized electrode–electrolyte interfaces in protonic ceramic fuel cells.png",
    doi: "https://doi.org/10.1016/j.cej.2026.179781",
  },
  {
    categories: ["recent"],
    title:
      "Operando Dynamic Self-Assembly of Bifunctional Electrocatalysts for High-Performance Symmetric Molten Carbonate Cells",
    authors:
      "Bo-Ram Won, Yeeun Kim, Kab In Kim, So Yeon Park, Jong-Hyun Kim, Hyeongwon Jeong, Hyejin Jeon, Sung-Pil Yoon, and Jae-ha Myung*",
    journal: "Applied Catalysis B: Environmental, 338, 126520 (2026)",
    year: 2026,
    image:
      "/images/Home/PublicationItem/publication_Operando Dynamic Self-Assembly of Bifunctional Electrocatalysts for High-Performance Symmetric Molten Carbonate Cells.png",
    doi: "https://doi.org/10.1016/j.apcatb.2026.126520",
  },
  {
    categories: ["recent"],
    title: "Lattice Distortion-Driven Metal Exsolution in Perovskite Oxides",
    authors:
      "Yo Han Kim#, Uchan Jeon#, Hyeongwon Jeong, Bo-Ram Won, Jeong woo Han*, and Jae-ha Myung*",
    journal: "Advanced Science, 13(52), 2198-3844 (2026)",
    year: 2026,
    image:
      "/images/Home/PublicationItem/publication_Lattice Distortion-Driven Metal Exsolution in Perovskite Oxides.png",
    doi: "https://doi.org/10.1002/advs.75870",
  },

  // cover publications
  {
    categories: ["cover"],
    // coverLabel: "Front Cover",
    title:
      "Emerging Exsolution Materials for Diverse Energy Applications: Design, Mechanism, and Future Prospects",
    authors:
      "Hyeongwon Jeong, Yo Han Kim, Bo-Ram Won, Hyejin Jeon, Chan-ho Park, and Jae-ha Myung",
    journal: "Chemistry of Materials, 35(10), 3745–3764 (2023)",
    year: 2023,
    image:
      "/images/Home/PublicationItem/publication_Emerging Exsolution Materials for Diverse Energy Applications- Design, Mechanism, and Future Prospects.jpg",
    doi: "https://doi.org/10.1021/acs.chemmater.3c00004",
  },
  {
    categories: ["cover"],
    // coverLabel: "Front Cover",
    title:
      "In Situ Exsolution Catalyst: An Innovative Approach to Develop Highly Selective and Sensitive Gas Sensors",
    authors: "Sang Hun Kim, Hyeongwon Jeong, Bharat Sharma, and Jae-ha Myung",
    journal: "ACS Applied Materials & Interfaces, 14(16), 18275–18282 (2022)",
    year: 2022,
    image:
      "/images/Home/PublicationItem/publication_In Situ Exsolution Catalyst- An Innovative Approach to Develop Highly Selective and Sensitive Gas Sensors.jpg",
    doi: "https://doi.org/10.1021/acsami.1c22701",
  },
];

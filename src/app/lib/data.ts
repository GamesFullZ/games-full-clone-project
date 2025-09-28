export type Game = {
  slug: string;
  title: string;
  cover: string;
  description: string;
  genres: string[];
  rating?: number;
  requirements?: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots?: string[];
};

export type Collection = {
  slug: string;
  title: string;
  banner: string;
  description: string;
  games: string[]; // game slugs
};

export const games: Game[] = [
  {
    slug: "hades-ii",
    title: "Hades II",
    cover:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/hades-ii-1758827848134-193x288-5.jpg?",
    description:
      "Secuela del aclamado roguelike. Enfréntate a titanes con combate ágil y narrativa reactiva.",
    genres: ["Roguelike", "Acción"],
    rating: 4.8,
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-8400 / Ryzen 3 3300X",
      memory: "8 GB RAM",
      graphics: "GTX 1060 / RX 580",
      storage: "20 GB"
    },
    screenshots: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/hollow-knight-silksong-1757012805751-2.jpg?",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/Cyberpunk-2077-193x288-12.jpg?"
    ]
  },
  {
    slug: "pacman-world-2-repac",
    title: "Pac-Man World 2 Repac",
    cover:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/pacman-world-2-repac-1759011422374-193x288-4.jpg?",
    description:
      "Clásico de plataformas reimaginado con visuales modernos y controles refinados.",
    genres: ["Plataformas", "Aventura"],
    rating: 4.2
  },
  {
    slug: "god-of-war",
    title: "God of War",
    cover:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/God-of-War-193x288-9.jpg?",
    description: "Kratos embarca en una odisea nórdica junto a su hijo Atreus.",
    genres: ["Acción", "Aventura"],
    rating: 4.9
  }
];

export const collections: Collection[] = [
  {
    slug: "resident-evil",
    title: "Resident Evil",
    banner:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/resident-evil-1747665389414-thumbnail-13.jpg?",
    description:
      "Una selección de entregas icónicas de survival horror de la saga Resident Evil.",
    games: ["hades-ii", "god-of-war"]
  },
  {
    slug: "assassins-creed",
    title: "Assassin's Creed",
    banner:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/assassin-creed-1747615863366-thumbnail-14.jpg?",
    description: "Viaja por épocas históricas con sigilo y parkour.",
    games: ["pacman-world-2-repac"]
  }
];

export const categories: string[] = [
  "Acción",
  "Aventura",
  "Roguelike",
  "Plataformas",
  "Multijugador",
  "Indie",
];
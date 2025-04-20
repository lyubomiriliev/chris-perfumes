import { Perfume } from "../types";

export const perfumes: Perfume[] = [
  {
    id: "lv-imagination",
    name: "Imagination",
    brand: "Louis Vuitton",
    description:
      "A spirited masculine fragrance with vibrant notes of Calabrian bergamot and Sicilian cedar. Imagination unveils a refreshing fusion of spicy Chinese black tea, Italian citrus, and Tunisian neroli, embodying a sophisticated journey of the senses.",
    price: 18,
    size: "2ml",
    imageUrl: "/imagination.avif",
    category: ["Citrus", "Aromatic", "Woody"],
    notes: {
      top: ["Calabrian Bergamot", "Sicilian Citrus", "Tunisian Neroli"],
      middle: ["Nigerian Ginger", "Ceylon Cinnamon", "Chinese Black Tea"],
      base: ["Ambrox", "Guaiac Wood", "Black Tea"],
    },
    year: 2021,
    collection: "Les Parfums",
    occasion: ["Daytime", "Office", "Casual"],
    season: ["Spring", "Summer"],
    rating: 4.8,
    isNewArrival: false,
    isBestseller: true,
    availableSizes: [
      { size: "2ml", price: 18 },
      { size: "5ml", price: 35 },
      { size: "10ml", price: 65 },
    ],
  },
  {
    id: "lv-les-sables-roses",
    name: "Les Sables Roses",
    brand: "Louis Vuitton",
    description:
      "A mesmerizing olfactory journey across the desert. This luxurious Oriental fragrance combines the rich intensity of rose with smoky incense and sweet oud, evoking the mystical beauty of sand dunes under the setting sun.",
    price: 22,
    size: "2ml",
    imageUrl: "/roses.avif",
    category: ["Oriental", "Floral", "Woody"],
    notes: {
      top: ["Saffron", "Rose", "Ambrette"],
      middle: ["Incense", "Raspberry", "Cumin"],
      base: ["Oud Wood", "Amber", "Musk"],
    },
    year: 2019,
    collection: "Les Parfums",
    occasion: ["Evening", "Special Occasion", "Formal"],
    season: ["Fall", "Winter"],
    rating: 4.9,
    isNewArrival: false,
    isBestseller: true,
    availableSizes: [
      { size: "2ml", price: 22 },
      { size: "5ml", price: 45 },
      { size: "10ml", price: 85 },
    ],
  },
  {
    id: "lv-afternoon-swim",
    name: "Afternoon Swim",
    brand: "Louis Vuitton",
    description:
      "A refreshing aquatic fragrance that captures the invigorating sensation of diving into crystal clear waters. Bursting with vibrant citrus notes of orange and bergamot complemented by oceanic accords to evoke a Mediterranean escape.",
    price: 18,
    size: "2ml",
    imageUrl:
      "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg",
    category: ["Citrus", "Aquatic", "Fresh"],
    notes: {
      top: ["Sicilian Orange", "Bergamot", "Mandarin"],
      middle: ["Orange Blossom", "Jasmine", "Neroli"],
      base: ["Amberwood", "Cedar", "Musk"],
    },
    year: 2019,
    collection: "Les Colognes",
    occasion: ["Daytime", "Casual", "Leisure"],
    season: ["Spring", "Summer"],
    rating: 4.7,
    isNewArrival: false,
    isBestseller: false,
    availableSizes: [
      { size: "2ml", price: 18 },
      { size: "5ml", price: 35 },
      { size: "10ml", price: 65 },
    ],
  },
  {
    id: "lv-ombre-nomade",
    name: "Ombre Nomade",
    brand: "Louis Vuitton",
    description:
      "An opulent fragrance that showcases the most precious ingredient in perfumery: oud. This enchanting oriental creation offers a rich blend of smoky, leathery, and balsamic notes, perfect for those who appreciate intense, sophisticated scents.",
    price: 25,
    size: "2ml",
    imageUrl: "/ombreImg.png",
    category: ["Oriental", "Woody", "Spicy"],
    notes: {
      top: ["Raspberry", "Saffron", "Rose"],
      middle: ["Oud Wood", "Benzoin", "Black Pepper"],
      base: ["Amyris", "Atlas Cedar", "Patchouli"],
    },
    year: 2018,
    collection: "Les Parfums",
    occasion: ["Evening", "Special Occasion", "Formal"],
    season: ["Fall", "Winter"],
    rating: 4.9,
    isNewArrival: false,
    isBestseller: true,
    availableSizes: [
      { size: "2ml", price: 25 },
      { size: "5ml", price: 50 },
      { size: "10ml", price: 95 },
    ],
  },
  {
    id: "lv-meteore",
    name: "Attrape-Rêves",
    brand: "Louis Vuitton",
    description:
      "A vibrant and uplifting fragrance that embodies the energy of a shooting star. This sparkling creation combines zesty citrus notes with spicy pepper and aromatic nutmeg, creating an invigorating yet sophisticated masculine scent.",
    price: 18,
    size: "2ml",
    imageUrl: "/attrape.avif",
    category: ["Citrus", "Spicy", "Aromatic"],
    notes: {
      top: ["Calabrian Bergamot", "Sicilian Mandarin", "Orange"],
      middle: ["Pink Pepper", "Java Nutmeg", "Neroli"],
      base: ["Java Vetiver", "Haitian Vetiver", "Ambroxan"],
    },
    year: 2020,
    collection: "Les Parfums",
    occasion: ["Daytime", "Office", "Casual"],
    season: ["Spring", "Summer", "Fall"],
    rating: 4.7,
    isNewArrival: false,
    isBestseller: false,
    availableSizes: [
      { size: "2ml", price: 18 },
      { size: "5ml", price: 35 },
      { size: "10ml", price: 65 },
    ],
  },
  {
    id: "lv-nuit-de-feu",
    name: "L'Immensité",
    brand: "Louis Vuitton",
    description:
      "An intense and contemplative fragrance inspired by desert evenings. This rich composition blends precious incense with creamy leather and warm woods, creating a mystical experience that evokes the sacred rituals of ancient civilizations.",
    price: 22,
    size: "2ml",
    imageUrl: "/immensite.avif",
    category: ["Oriental", "Woody", "Leathery"],
    notes: {
      top: ["Olibanum", "Black Pepper", "Saffron"],
      middle: ["Leather", "Cistus", "Oud Assam"],
      base: ["White Musk", "Sandalwood", "Balsam of Peru"],
    },
    year: 2020,
    collection: "Les Parfums",
    occasion: ["Evening", "Special Occasion", "Formal"],
    season: ["Fall", "Winter"],
    rating: 4.8,
    isNewArrival: true,
    isBestseller: false,
    availableSizes: [
      { size: "2ml", price: 22 },
      { size: "5ml", price: 45 },
      { size: "10ml", price: 85 },
    ],
  },
  {
    id: "lv-on-the-beach",
    name: "On The Beach",
    brand: "Louis Vuitton",
    description:
      "A radiant and refreshing fragrance that captures the carefree spirit of summer days spent by the ocean. This invigorating blend of yuzu, neroli, and aromatic herbs evokes the sensation of warm sun and cool sea breeze on your skin.",
    price: 18,
    size: "2ml",
    imageUrl:
      "https://images.pexels.com/photos/11592804/pexels-photo-11592804.jpeg",
    category: ["Citrus", "Aromatic", "Fresh"],
    notes: {
      top: ["Yuzu", "Pink Pepper", "Bergamot"],
      middle: ["Neroli", "Rosemary", "Thyme"],
      base: ["Clary Sage", "Cypress", "Vetiver"],
    },
    year: 2021,
    collection: "Les Colognes",
    occasion: ["Daytime", "Casual", "Leisure"],
    season: ["Spring", "Summer"],
    rating: 4.6,
    isNewArrival: true,
    isBestseller: false,
    availableSizes: [
      { size: "2ml", price: 18 },
      { size: "5ml", price: 35 },
      { size: "10ml", price: 65 },
    ],
  },
  {
    id: "lv-city-of-stars",
    name: "City of Stars",
    brand: "Louis Vuitton",
    description:
      "A dazzling fragrance inspired by the enchanting nightlife of Los Angeles. This luminous creation combines zesty citrus with sweet tiare flower and sandalwood, evoking the glamour and mystery of a warm summer night under the stars.",
    price: 20,
    size: "2ml",
    imageUrl:
      "https://images.pexels.com/photos/6913135/pexels-photo-6913135.jpeg",
    category: ["Citrus", "Floral", "Woody"],
    notes: {
      top: ["Blood Orange", "Lemon", "Red Mandarin"],
      middle: ["Tiare Flower", "Lime", "Bergamot"],
      base: ["Sandalwood", "Musk", "Monoi Oil"],
    },
    year: 2022,
    collection: "Les Colognes",
    occasion: ["Evening", "Night Out", "Special Occasion"],
    season: ["Spring", "Summer"],
    rating: 4.7,
    isNewArrival: true,
    isBestseller: false,
    availableSizes: [
      { size: "2ml", price: 20 },
      { size: "5ml", price: 40 },
      { size: "10ml", price: 75 },
    ],
  },
];

export const collections = [
  {
    id: "les-parfums",
    name: "Les Parfums",
    description:
      "The signature collection featuring the most distinctive Louis Vuitton fragrances",
  },
  {
    id: "les-colognes",
    name: "Les Colognes",
    description:
      "Fresh, light fragrances inspired by summer days and seaside escapes",
  },
  {
    id: "travel",
    name: "Travel Collection",
    description:
      "Portable sizes perfect for discovering new scents or taking your favorites on the go",
  },
];

export const getNewArrivals = () =>
  perfumes.filter((perfume) => perfume.isNewArrival);
export const getBestsellers = () =>
  perfumes.filter((perfume) => perfume.isBestseller);
export const getByCollection = (collectionName: string) =>
  perfumes.filter((perfume) => perfume.collection === collectionName);
export const getByCategory = (category: string) =>
  perfumes.filter((perfume) => perfume.category.includes(category));
export const getByOccasion = (occasion: string) =>
  perfumes.filter((perfume) => perfume.occasion?.includes(occasion));
export const getBySeason = (season: string) =>
  perfumes.filter((perfume) => perfume.season?.includes(season));

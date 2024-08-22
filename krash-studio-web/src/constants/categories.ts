export const CATEGORIES = {
  people: 'People',
  planets: 'Planets',
  starships: 'Starships',
  vehicles: 'Vehicles',
  films: 'Films',
  species: 'Species',
} as const;

export type Category = keyof typeof CATEGORIES;

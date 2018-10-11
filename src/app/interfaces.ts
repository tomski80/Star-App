export interface StarsResult {
  _embedded: { stars: Array<Star> };
  _links: { first: Link;
  prev: Link;
  self: Link;
  next: Link;
  last: Link;
  profile: Link;
  search: Link; };
  page: Page;
}

export interface Star {
  name: string;
  radius: number;
  age: number;
  temperature: number;
  mass: number;
  distance: number;
  numberOfPlanets: number;
  _links: EmbeddedLinks;
}

export interface AltNameWithStars {
  _embedded: {};
  _links: EmbeddedLinks;
  page: Page;
}

export interface NameWithStar {
  star: Star;
  name: string;
  _links: AltNameLinks;
}

export interface NameStarResult {
  _embedded: { alternateNames: Array<Star>; };
  name: string;
  _links: object;
}

export interface AltName {
  name: string;
  _links: AltNameLinks;
}

export interface AltNameLinks {
  self: Link;
  alternateName: Link;
  planets: Link;
  star: Link;
  additionalNames: Link;
}

export interface EmbeddedLinks {
  self: Link;
  alternateName: Link;
  planets: Link;
  star: Link;
  additionalNames: Link;
}

export interface Planet {
  name: string;
  radius: number;
  age: number;
  temperature: number;
  mass: number;
  discoveryMethod: number;
  description: string;
  discoveryDate: string;
  list: string;
  _links: {};
  }

interface Link {
  href: string;
}

interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

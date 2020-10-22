export interface IPlanet {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IPlanets {
  count: number;
  next: string;
  previous: string;
  results: IPlanet[];
}

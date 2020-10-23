export interface IStarship {
  MGLT: string;
  cargo_capability: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  manufactured: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starships_class: string;
  url: string;
}

export interface IStarships {
  count: number;
  next: string;
  previous: string;
  results: IStarship[];
}

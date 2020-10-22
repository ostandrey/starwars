export interface IHero {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
}

export interface IHeroes {
  count: number;
  next: string;
  previous: string;
  results: IHero[];
}

interface Result {
  name: string;
  url: string;
}

interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: Array<Result>;
}

interface Pokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

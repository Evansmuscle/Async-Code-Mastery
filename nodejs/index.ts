import fetch from "node-fetch";

const getList = async (): Promise<PokemonList> => {
  try {
    const list: PokemonList = await (
      await fetch("https://pokeapi.co/api/v2/pokemon/")
    ).json();

    return list;
  } catch (err) {
    console.error(err);
  }
};

const getPokeData = async (url: string): Promise<Pokemon | string> => {
  try {
    const data: Pokemon = await (await fetch(url)).json();

    return data;
  } catch (err) {
    console.error(err);
    return "error";
  }
};

getList()
  .then((list) => getPokeData(list.results[0].url))
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

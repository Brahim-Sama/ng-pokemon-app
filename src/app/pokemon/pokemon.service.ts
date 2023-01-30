import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  //récupère la liste de pokemon
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  // récupère le pokemon selon son ID
  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id == pokemonId);
  }

  //récupère la liste de type de pokemon
  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}

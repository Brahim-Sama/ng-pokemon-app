import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  //charger la liste de tout les pokemons
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  // paramètre objet
  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      console.log(`Le pokémon demandé est : ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}

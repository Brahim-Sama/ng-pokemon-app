import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  //décrire les routes les plus spécifiques en haut et les plus générales en bas.
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  //page 404 à mettre toujours en dernier
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

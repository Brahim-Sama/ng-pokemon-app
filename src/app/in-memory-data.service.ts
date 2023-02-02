import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { POKEMONS } from "./pokemon/mock-pokemon-list";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  // createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
  //   throw new Error("Method not implemented.");
  // }

  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}

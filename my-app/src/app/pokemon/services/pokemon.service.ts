import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
    private url: string= 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }


getAllPokemon() {
  return this.http.get(`${ this.url }/pokemon?limit=1500`)
  //no le sabes Karen >:((
}

}

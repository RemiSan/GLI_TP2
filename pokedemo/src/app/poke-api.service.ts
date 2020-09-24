import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeDetails, Pokemon, PokeServiceRes } from './pokemon';
import { Observable } from 'rxjs';

const pokeLink = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(pokeLink);
  }

  getPokeminsDetails(pokemon : Pokemon): Observable<PokeDetails> {
    return this.http.get<PokeDetails>(pokemon.url);
  }
}

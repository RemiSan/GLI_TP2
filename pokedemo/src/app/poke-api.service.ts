import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';

const pokeLink = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {


  constructor(private http: HttpClient) { }

  getPokemons() : Observable<any>{
    return this.http.get(pokeLink);
  }
}

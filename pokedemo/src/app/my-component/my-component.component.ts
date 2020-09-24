import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeApiService]
})
export class MyComponentComponent implements OnInit {

  selectedPokemonId: number = -1;
  pokemonNameFilter = '';
  listPokemons: Pokemon[] = [];

  constructor(private pokemonApi: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokemonApi.getPokemons().subscribe((data) => {
      this.listPokemons = [];
      data.results.forEach((element, index) => {
        this.listPokemons.push(new Pokemon(index, element.name, element.url))
      });
    }
    );
  }

  go(): void {
    console.log('test');
  }

}


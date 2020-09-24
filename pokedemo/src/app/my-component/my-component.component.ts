import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { PokeInfoServiceService } from '../poke-info-service.service';
import { PokeDetails, Pokemon } from '../pokemon';

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
  pokeDetails : PokeDetails;

  constructor(private pokemonApi: PokeApiService, private pokeInfoService : PokeInfoServiceService) { }

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
    if (this.selectedPokemonId !== -1) {
      this.pokeInfoService.setValue(this.listPokemons[this.selectedPokemonId]);
      this.pokemonApi.getPokeminsDetails(this.listPokemons[this.selectedPokemonId]).subscribe((pokeDetails) =>
       { 
         this.pokeDetails = pokeDetails;
        }
      )
    }
  }

}


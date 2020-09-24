import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  selectedPokemonId : number = -1;
  pokemonNameFilter = '';
  listPokemons: Pokemon[] = [];

  constructor() {
    this.listPokemons.push(new Pokemon(1, "Bulbizarre"));
    this.listPokemons.push(new Pokemon(2, "Herbizarre"));
    this.listPokemons.push(new Pokemon(3, "Florizarre"));
    this.listPokemons.push(new Pokemon(4, "Salamèche"));
  };

  ngOnInit(): void {};

  myFunc():void{
    console.log('test');
  };

}


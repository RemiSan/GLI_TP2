import { Component, Input, OnInit } from '@angular/core';
import { PokeInfoServiceService } from '../poke-info-service.service';
import { PokeDetails, Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  @Input ("detail")
  pokeDetail : PokeDetails;

  pokemon : Pokemon;

  constructor(private pokeInfoService : PokeInfoServiceService) { }

  ngOnInit(): void {
    this.pokeInfoService.getObservable().subscribe((pokemon) =>
    {
      console.log('selected pokemon changed : ' + pokemon.name);
    }
    );
  }

}

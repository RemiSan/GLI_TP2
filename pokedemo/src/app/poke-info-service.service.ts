import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeInfoServiceService {
  
  public value = new Subject<Pokemon>();

  constructor() { }

  setValue(value : Pokemon) : void{
    this.value.next(value);
  }

  getObservable() : Subject<Pokemon>{
    return this.value;
  }
}

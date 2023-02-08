import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';



@NgModule({
  declarations: [
    PokemonlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonlistComponent
  ]
})
export class PokemonModule { }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  pokemons: any = {};
  p: number = 1;
  
  pokemonData: { 
    name: string,
    base_experience: number,
    height: number,
    id: number,
    location_area_encounters: string,
    weight: string
   } = { 
    name: '',
    base_experience: 0,
    height: 0,
    id: -1,
    location_area_encounters: "",
    weight: ","
   };

   pokemonAbilities: [] = [];

  constructor(private apiService: ApiService) { }

  //Función que se ejecuta al renderizar la página
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.pokemons = data.results;
      console.log(data);
    })
  }

  showPokemon(event: any, pokemonName: string) {
    console.log(event.target.id);
    console.log("nombre: ", pokemonName);
    this.apiService.getPokemon(pokemonName).subscribe(data => {
      this.pokemonData = data
      console.log(this.pokemonData);

    });

  }

}

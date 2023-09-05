import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatTableModule } from '@angular/material/table';

interface Ability {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})



export class HomeComponent implements OnInit {

  pokemons = [
    {
      name: ""
    }
  ];
  p: number = 1;
  itemsPerPage: number = 10;
  count: number = 1;
  
  sprites: {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
  } = {
    back_default: "",
    back_female: "",
    back_shiny: "",
    back_shiny_female: "",
    front_default: "",
    front_female: "",
    front_shiny: "",
    front_shiny_female: "",
  };

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

   pokemonAbilities = [
    {
      ability: {
        name: ""
      }
    }
   ];

   pokemonLocationAreaEncounters = [
    {
      location_area: {
        name: ""
      }
    }
   ];

  constructor(private apiService: ApiService) {}

  //Función que se ejecuta al renderizar la página
  ngOnInit(): void {
    this.getAllPokemons();
  }

  sortByName(event: any){
    console.log("ordenando")
  }


  getAllPokemons() {
    this.apiService.getData().subscribe(data => {
      this.pokemons = data.results;
      console.log(data);
    })
  }
  

  showPokemon(event: any, pokemonName: string) {
    console.log(event.target.id);
    console.log("nombre: ", pokemonName);
    this.apiService.getPokemon(pokemonName).subscribe(data => {
      this.pokemonData = data;
      this.sprites = data.sprites;
      this.pokemonAbilities = data.abilities;
      console.log(this.pokemonData);
      console.log(this.pokemonAbilities);
      console.log(this.pokemonAbilities[0])
    });

    this.apiService.getLocationAreaEncounters(pokemonName).subscribe(data => {
      this.pokemonLocationAreaEncounters = data;
    });

  }

}

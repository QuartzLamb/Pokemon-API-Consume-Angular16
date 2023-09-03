import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=5';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public getPokemon(pokemonName: string){
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/"+pokemonName);
  }

}

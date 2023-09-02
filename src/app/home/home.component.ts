import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data: any = {};

  constructor(private apiService: ApiService){}

  //Función que se ejecuta al renderizar la página
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }

}

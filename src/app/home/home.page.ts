import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  animal: any = [];

  async runHttp(){ 
    this.http.get('https://demo1287829.mockable.io/') // como o API dado para o estágio (http://petstore-demo-endpoint.execute-api.com/petstore/pets) estava dando erro de CORS eu ultilizei esse site para usar a mesma API dada
    .subscribe(data => {
      console.log(data);
      this.animal = data
    });
  }
  
  key: string = 'id';
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = this.reverse;
  }

}
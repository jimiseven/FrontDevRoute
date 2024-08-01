import { Component } from '@angular/core';
import { ifError } from 'assert';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  // //primera manera o manera JS
  // metodoName1( event:any ){
  //   event.preventDefault();
  //   console.log('key');
  // }

  personajes : Personaje [] = [
    {
      nombre : 'goku',
      poder : 1500
    },
    {
      nombre : 'vegeta',
      poder : 1800
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // nuevo : Personaje = {
  //     nombre : '',
  //     poder : 0
  //   }

  // //manera angular
  // agregar(){
  //   if( this.nuevo.nombre.trim().length === 0 ){
  //     return;
  //   }
  //   this.personajes.push( this.nuevo);
  //   this.nuevo = {
  //     nombre : '',
  //     poder:0
  //   }

  // }
}

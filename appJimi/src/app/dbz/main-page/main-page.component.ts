import { Personaje } from './../interfaces/dbz.interface';
import { DbzService } from './../services/dbz.services';
import { Component } from '@angular/core';
import { ifError } from 'assert';



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

  //op1 personajes: Personaje[] = []
  //op2 get personajes() : Personaje[]{
  //   return this.dbzService.personajes;
  // }


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

  // opcino anterior
  // agregarNuevoPersonaje( argumento : Personaje){
  //   console.log('main page componet');
  //   console.log( argumento);
  //   this.personajes.push(argumento);
  // }

  //uso del services INYECION DE DEPENDENCIAS
  constructor( private dbzService : DbzService ){

  }
}

import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable() //forma de usarlos
export class DbzService {

  private _personajes : Personaje[] = [
    {
      nombre : 'goku',
      poder : 1500
    },
    {
      nombre : 'vegeta',
      poder : 1800
    }
  ];

  //... operador spred buena practica
  get personajes() : Personaje[]{
    return [...this._personajes];
  }

  constructor(){
    console.log('servicio inicializacdo');
  }
}


import { DbzService } from './../services/dbz.services';
import { Component} from '@angular/core';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

  // @Input() personajes : Personaje [] = [];
  //TENER MUCHO CUIDADO CON LA ESCRITURA
  get personajes() {
    return this.dbzService.personajes;
  }


  constructor( private dbzService: DbzService){

  }
}

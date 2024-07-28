import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  heroes: string [] = ['name1', 'name3', 'name4', 'name5', 'name6']
  heroeBorrado : string = '';

  borrarHeroe(){
    if (this.heroes.length > 0) {
      this.heroeBorrado = this.heroes.pop() || '';
      // console.log(heroeBorrado);
    } else {
      console.log('No hay héroes para eliminar');
    }
  }

}

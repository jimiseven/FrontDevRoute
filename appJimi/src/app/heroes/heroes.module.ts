import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from '../contador/contador/contador.component';

@NgModule({
  declarations: [//compónentes importantes visible para toda la app
    HeroeComponent,
    ListadoComponent
  ],
  exports: [//que cosas seran publicas
    HeroeComponent,
    ListadoComponent
  ],
  imports: [//solo entran lo modulos, UNICAMENTE
    CommonModule//se utiliza cuando usamos directivas en este componete (ngIf, ngFor)
  ]

})


export class HeroeModule {

}

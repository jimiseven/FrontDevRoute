import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContadorComponent } from "./contador/contador.component";


@NgModule({
  declarations: [//compónentes importantes visible para toda la app
    ContadorComponent
  ],
  exports: [//que cosas seran publicas
    ContadorComponent
  ],
  imports: [//solo entran lo modulos, UNICAMENTE
    CommonModule//se utiliza cuando usamos directivas en este componete (ngIf, ngFor)
  ]

})


export class ContadorModule {

}

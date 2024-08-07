import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})

export class HeroeComponent {
  nombre: string = "Iroman";
  edad: number = 45;

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman'
  }

  cambiarEdad():void{
    console.log("edad");
    this.edad = 30;
  }

  sumarr(): number{
    console.log("22222");
    return 222;
  }

}

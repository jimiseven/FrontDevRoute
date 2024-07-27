import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: 'app.component.html',//lugar de donde sale el html
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Contador app';
  numero: number = 10;

  // //usando metodos para las funciones
  // sumar(){
  //   this.numero += 1;  
  // }
  // restar(){
  //   this.numero -= 1;  
  // }

  //recibiendo un valor y usandolo

  base: number = 5;
  acumular(valor : number){
    this.numero += valor;
  }
}


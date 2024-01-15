import { Component } from '@angular/core';

@Component({
  selector: 'app-LabsComponentmponent',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'bienvenido';//este dato lo estamos pasando atraves del html
  task = [
    'Lista de: ',
    'Componentes',
    'de computadores'
  ]
  name = 'jimi joe';

  clickHandler(){
    alert('hola!')
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }
}

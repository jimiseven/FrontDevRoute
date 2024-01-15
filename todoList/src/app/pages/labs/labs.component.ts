import { signal } from '@angular/core';
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
  name = signal('jimi joe');
  age = 18;


  clickHandler(){
    alert('hola!')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }
}

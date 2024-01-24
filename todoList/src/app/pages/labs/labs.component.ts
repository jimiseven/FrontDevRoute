import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'; //importacion del modulo
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-LabsComponent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], //uso del modulo
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  title = 'bienvenido'; //este dato lo estamos pasando atraves del html
  tasks = signal(['Lista de: ', 'Componentes', 'de computadores']);
  name = signal('jimi joe');
  age = 17;

  person = signal({
    name: 'joe',
    age: 17,
  });

  colorCtrl = new FormControl(); //paquete de angular forms
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  }); //paquete de angular forms

  nameCtrl = new FormControl(50, {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  }); //paquete de angular forms


  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  clickHandler() {
    alert('hola!');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}

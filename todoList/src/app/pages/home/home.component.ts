import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  signal,
} from '@angular/core';
//import { title } from 'process';
//computed, effect, signal son lo elementos mas importantes en el ecosistemas de angular

import { Task } from '../../models/task.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    // 'tarea a',
    // 'tarea b',
    // 'tarea c',
    // 'tarea d',
    // 'tarea e',
    {
      id: Date.now(),
      title: 'crear proyecto',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'crear proyecto 2',
      completed: true,
    },
    {
      id: Date.now(),
      title: 'crear proyecto 3',
      completed: true,
    },
  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  injector = inject(Injector);

  //momento en el que se inicializa un componente en el local storage
  ngOnInit() {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks);
    }
    this.trackTasks();
  }

  // constructor(){
  //   // effect(() =>{
  //   //   const tasks = this.tasks();
  //   //   console.log(tasks);
  //   //   localStorage.setItem('tasks', JSON.stringify(tasks));//cada que hagamos un cambio en el estado de la aplicacion, se actualizara el estado del localstorage en el jason
  //   // })
  // }

  trackTasks() {
    effect(
      () => {
        const tasks = this.tasks();
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks)); //cada que hagamos un cambio en el estado de la aplicacion, se actualizara el estado del localstorage en el jason
      },
      { injector: this.injector }
    ); //vigilante que efectua una accion de acuerdo al cambio
  } //realizamo la injeccion del effect, por que no esta en el constructor

  changeHandler() {
    // const input = event.target as HTMLInputElement;
    // const newTask = input.value;
    if (this.newTaskCtrl.valid) {
      //verificamos la valides del input
      const value = this.newTaskCtrl.value.trim(); //limpia los estapacios de fin y final
      if (value !== '') {
        this.addTaks(value); //guardamos el valor con addTaks
        this.newTaskCtrl.setValue(''); //limpiamos el input despues de recoger el valor
      }
    }
  }

  addTaks(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  deleteTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => position !== index)
    );
  }

  updateTaks(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  }

  updateTaskEd(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: true,
          };
        }
        return {
          ...task,
          editing: false,
        };
      });
    });
  }

  //estado que se basa en el estado de otros estados..
  //un estado que depende de otros estados es un estado computado
  filter = signal<'all' | 'pending' | 'completed'>('all');
  taskByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks(); //mucho cuidado con el nombre de las variables

    if (filter === 'pending') {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  });

  updateText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            title: input.value,
            editing: false,
          };
        }
        return task;
      });
    });
  }

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter), console.log(filter); //renderisamos el valor de filter por el console log
  }
}

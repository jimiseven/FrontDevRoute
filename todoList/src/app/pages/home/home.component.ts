import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
//import { title } from 'process';

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
    const tasks = this.tasks();//mucho cuidado con el nombre de las variables


    if (filter === 'pending') {
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
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
    this.filter.set(filter),
     console.log(filter); //renderisamos el valor de filter por el console log
  }
}

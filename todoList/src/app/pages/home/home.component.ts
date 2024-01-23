import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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
      const value = this.newTaskCtrl.value.trim();//limpia los estapacios de fin y final
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

  updateTaskEd(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: true
          };
        }
        return {
          ...task,
          editing: false
        }
      });
    });
  }

  updateText(index: number, event : Event){
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            title: input.value,
            editing: false
          };
        }
        return task;
      });
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { title } from 'process';


import { Task } from '../../models/task.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal <Task[]>([
    {
      id: Date.now(),
      title : 'crear proyecto',
      completed : false
    },
    {
      id: Date.now(),
      title : 'crear proyecto 2',
      completed : true
    }
  ]);


  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTaks(newTask);
  }

  addTaks(Title: string){
    const newTask = {
      id : Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }
}

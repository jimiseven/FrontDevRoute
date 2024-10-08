import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  fromHijo(event: string){
    console.log('escuchando desde hijo');
    console.log(event);
  }
}
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

constructor(){
  const initProducts:Product[] = [
    {
      id:Date.now(),
      title:'Pro 1',
      price: 101,
      image: 'https://picsum.photos/640/640?r=12',
      creatAt : new Date().toISOString() 
    },
    {
      id:Date.now(),
      title:'Pro 2',
      price: 102,
      image: 'https://picsum.photos/640/640?r=12',
      creatAt : new Date().toISOString()
    },
    {
      id:Date.now(),
      title:'Pro 3',
      price: 103,
      image: 'https://picsum.photos/640/640?r=12',
      creatAt : new Date().toISOString()
    },
  ]
  this.products.set(initProducts);
}

  

  fromHijo(event: string){
    console.log('escuchando desde hijo');
    console.log(event);
  }
}

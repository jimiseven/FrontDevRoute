import { Product } from './../../../../models/product.model';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';


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
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'pro 1',
        price: 100,
        image : 'https://picsum.photos/640/640'
      },
      {
        id: Date.now(),
        title: 'pro 2',
        price: 101,
        image : 'https://picsum.photos/640/640'
      }
    ];
    this.products.set(initProducts)
  }
//constructor de con informacion

  fromChild(event : string){
    console.log('evento escuchado desde el padre');
    console.log(event);
  }
}

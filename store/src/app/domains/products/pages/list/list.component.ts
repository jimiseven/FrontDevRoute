import { Product } from './../../../../models/product.model';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  // cart = signal<Product[]>([]); ya no necesitamos por que estamos usando un servicio

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'pro 1',
        price: 100,
        image : 'https://picsum.photos/640/640',
        creationAt : new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 2',
        price: 101,
        image : 'https://picsum.photos/640/640',
        creationAt : new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 3',
        price: 102,
        image : 'https://picsum.photos/640/640',
        creationAt : new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 4',
        price: 103,
        image : 'https://picsum.photos/640/640',
        creationAt : new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 5',
        price: 104,
        image : 'https://picsum.photos/640/640',
        creationAt : new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'pro 2',
        price: 105,
        image : 'https://picsum.photos/640/640',
        creationAt : new Date().toISOString()
      }

    ];
    this.products.set(initProducts)
  }
//constructor de con informacion

  // fromChild(event : string){
  //   console.log('evento escuchado desde el padre');
  //   console.log(event);
  // }

  addToCart(product  : Product){
    // console.log('desde el comp hijo');
    // console.log(event);
    // this.cart.update(prevState => [...prevState, product]) ya no lo necesitamos por el servicio
    this.cartService.addToCart(product);
  }
}

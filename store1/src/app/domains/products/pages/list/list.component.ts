import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
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
  private cartServices = inject(CartService);
  // cart = signal<Product[]>([]); (quitado por uso del store)

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

  

  addCart(product: Product){
    this.cartServices.addToCart(product);
  }
}

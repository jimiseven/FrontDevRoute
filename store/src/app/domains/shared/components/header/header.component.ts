
import { CartService } from './../../services/cart.service';
import { Component, Input, SimpleChanges, inject, input, signal } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  //una vez que usamos servicios para la comunicacion de padres he hijos ya
  //no es necesario utilizar un input para recibir los valores
  // @Input({required: true}) cart: Product[] = [];

  //total = signal(0);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;


  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   const cart = changes['cart'];
  //   if(cart)[
  //     this.total.set(this.calTot())
  //   ]
  // }

  // calTot(){
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }
}

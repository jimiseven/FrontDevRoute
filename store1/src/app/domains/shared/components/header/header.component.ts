import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideMenu = signal(true);
  private cartServices = inject(CartService);
  cart = this.cartServices.cart;
  total = this.cartServices.total;

  // @Input({required : true}) cart: Product[] = []; (ya no se usara , gracias al store, pero tenemos que inyectar el servicio)
  toogleSideMenu(){
    this.hideMenu.update(prevState => !prevState)
  }

}

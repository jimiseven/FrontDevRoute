import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideMenu = signal(true);
  tot = signal(0);

  @Input({required : true}) cart: Product[] = []; 
  toogleSideMenu(){
    this.hideMenu.update(prevState => !prevState)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    const cart = changes['cart'];
    if(cart){
      this.tot.set(this.calcTol());
    }
  }

  calcTol(){
    return this.cart.reduce((total, product) =>total + product.price, 0);
  }
}

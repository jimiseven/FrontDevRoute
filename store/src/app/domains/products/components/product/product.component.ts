import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
//ya no se recibira dato por dato sino todo el objeto
@Input({required: true}) product!: Product;

  // @Input({required: true}) img: string = '';//entre los campor que tenemos podemos realizar restricciones
  // @Input() price: number = 0;
  // @Input() title: string = '';


  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('clic form child');
    this.addToCart.emit('hola desde el hijo'+ this.product.title);//llegara a el padre
  }
}

import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required : true}) product!: Product;
  // @Input() img : string = '../../../../../assets/imgs/productos_default.png';
  // @Input() price : number = 0;
  // @Input() title : string = '';

  @Output() addToCart = new EventEmitter();

  addCartHand() {
    console.log('click desde el hijo');
    this.addToCart.emit('hola desde el hijo' + this.product.title);
  }
}


// si utilizamos dentro del input(requiered : true), si o si tenemos que mandar el datos desde list component

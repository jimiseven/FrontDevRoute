import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLink],
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
    this.addToCart.emit(this.product);
  }
}


// si utilizamos dentro del input(requiered : true), si o si tenemos que mandar el datos desde list component

import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) img: string = '';//entre los campor que tenemos podemos realizar restricciones
  @Input() price: number = 0;
  @Input() title: string = '';


  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('clic form child');
    this.addToCart.emit('hola desde el hijo');//llegara a el padre
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required :true}) img : string = '';
  @Input() price: number = 0;
  @Input() title: string = '';

  @Output() addToCart = new EventEmitter();//comunicacion hijo -> padre

  addCartHandler(){
    console.log('click from chield');
    this.addToCart.emit('mensaje desde hijo');
  }
}

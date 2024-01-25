import { Component, Input, input } from '@angular/core';

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
}

import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img : string = '';
  @Input() price : number = 0;
  @Input() title : string = '';
}


// si utilizamos dentro del input(requiered : true), si o si tenemos que mandar el datos desde list component

import { CommonModule} from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-counter',//nombre del selector
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required : true}) duration =0;
  @Input({required : true}) message ='';

  constructor(){
//no asincrono
    console.log('contructor');
    console.log('-' .repeat(10))

  }

  ngOnChanges(changes: SimpleChanges){//se ejecuta antes y despues, por que mesaje cambia de forma dinamica
    console.log('ngOnChanges');
    console.log('-' .repeat(10));
    console.log(changes);
  }
}

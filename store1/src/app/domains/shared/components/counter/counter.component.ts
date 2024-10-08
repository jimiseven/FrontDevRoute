import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = 's';

  constructor() {
    // solo elementos asincronos, antes del render
    console.log('contructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //corre duarnte se este renderizando el componente
    //Add '${implements OnChanges}' to the class.
    console.log('contructor');
    console.log('-'.repeat(10));
    console.log(changes);
  }
}

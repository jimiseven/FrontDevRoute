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
//no asincrono, no tendria que ser asincrono
// correria antes del render
    console.log('contructor');
    console.log('-' .repeat(10))

  }

  ngOnChanges(changes: SimpleChanges){//se ejecuta antes y despues, por que mesaje cambia de forma dinamica
    console.log('ngOnChanges');
    console.log('-' .repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    //se ejecuta solo una vez despúes de renderizar la app
    console.log('ngOnInit');
    console.log('-' .repeat(10));
    console.log('duration =>' , this.duration);
    console.log('message =>' , this.message);

  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterVieewInit');
    console.log('-' .repeat(10));

  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destrid');
    console.log('-' .repeat(10));
  }

}

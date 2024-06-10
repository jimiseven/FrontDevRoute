import { CommonModule} from '@angular/common';
import { Component, Input, SimpleChanges, signal, ɵɵresolveWindow } from '@angular/core';


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
  counter = signal(0);
  counterRef : number | undefined;

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
    const duration = changes['duration'];
    // // console.log(duration);
    // if (duration) {//seria una validacion basica
    //   this.doSomething();
    //   }
    //si queremos validar con un valor anterior seria de la siguiente manera
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }

  }

  ngOnInit(){
    //se ejecuta solo una vez despúes de renderizar la app
    console.log('ngOnInit');
    console.log('-' .repeat(10));
    console.log('duration =>' , this.duration);
    console.log('message =>' , this.message);
    window.setInterval(()=>{
      console.log("log");
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
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
    // window.clearInterval(this.counterRef)
  }


  //validaremos si queresmos que se actualice el estado de messages o duration
  //ten en cuanta que te es asincrono, el codigo de ejecuta de arriba a abajo y a todos lados
  doSomething(){
    console.log('change duration');
  }
}

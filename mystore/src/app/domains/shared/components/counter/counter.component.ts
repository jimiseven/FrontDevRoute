import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [ProductComponent, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';
  counter = signal(0);

  contructor(){//no es asincronico

    console.log('contructor');
    console.log('-'.repeat(10));
  }


  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if (duration){
      this.doAlgo();
    }

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration ->', this.duration);
    console.log('message ->', this.message);
    window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1)
    }, 1000);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngafteron init');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ng destroy');
    console.log('-'.repeat(10));
  }

  doAlgo() {
    console.log('change duration')
  }
}

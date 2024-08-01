import { Component } from '@angular/core';


interface Personaje {
  nombre : string;
  poder : number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // //primera manera o manera JS
  // metodoName1( event:any ){
  //   event.preventDefault();
  //   console.log('key');
  // }


  nuevo : Personaje = {
      nombre : 'name 1',
      poder : 1400
    }

  //manera angular
  metodoName1(){
    console.log(this.nuevo)
  }
}

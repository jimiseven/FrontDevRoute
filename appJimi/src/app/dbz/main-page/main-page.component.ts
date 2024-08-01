import { Component } from '@angular/core';

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


  //manera angular
  metodoName1(){
    console.log('hola hola')
  }
}

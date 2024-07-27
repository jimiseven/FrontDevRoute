import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { ContadorComponent} from './contador.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

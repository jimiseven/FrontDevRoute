import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';//importado

const routes: Routes = [
  { path: '',
    component:ExampleComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppRoutingModule {}

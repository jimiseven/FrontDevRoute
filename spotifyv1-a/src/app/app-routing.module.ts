import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren:()=> import('./modules/home/home.module').then (m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppRoutingModule {}

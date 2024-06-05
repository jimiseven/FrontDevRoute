// import { AboutComponent } from './domains/info/pages/about/about.component';
// import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';


// export const routes: Routes = [
//     {
//         path: '', component: HomeComponent,
//     },
//     {
//         path: 'about', component: AboutComponent
//     }
// ];


//===

import { Routes } from '@angular/router';

// import { ListComponent } from './domains/info/pages/';
import { AboutComponent } from './domains/info/pages/about/about.component';


export const routes: Routes = [
    // {
    //     path: '',
    //     component: ListComponent
    // },
    {
        path: 'about',
        component: AboutComponent
    }
];

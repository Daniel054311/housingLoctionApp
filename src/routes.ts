import {Routes} from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DetailsComponent } from './app/details/details.component';






const routeConfing:Routes = [

  {  
    path:'',
    component:HomeComponent,
    title:'Home page'
},

{  
    path:'details/:id',
    component:DetailsComponent,
    title:'details page'
}
];

export default routeConfing;
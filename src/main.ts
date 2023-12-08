import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfing from './routes';


bootstrapApplication(AppComponent,{
providers:[
  provideRouter(routeConfing)
]

}).catch(err => console.error(err));

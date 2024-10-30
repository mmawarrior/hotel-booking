import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Make sure your routes are correctly configured

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync() // Make sure the routing module is provided
  ]
}).catch(err => console.error(err));

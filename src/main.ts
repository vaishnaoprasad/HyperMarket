import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from './app/environments/environment.prod';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
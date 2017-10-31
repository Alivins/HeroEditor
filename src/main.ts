import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
/** platformBrowserDynamic 은 간단히 말하면 브라우저에서 Angular 를 사용하기 위해 Angular 의 
이런 기능을 사용할 것이라고 알려주는 것 이라고 생각하면 됩니다. **/

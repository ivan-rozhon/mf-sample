import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AppService, Microfrontend } from './app.service';

import { HomeComponent } from './home.component';

function initializeAppFactory(
  httpClient: HttpClient,
  appService: AppService
): () => Observable<any> {
  return () =>
    httpClient.get('./assets/mf-config.json').pipe(
      tap((response) => {
        appService.updateMfConfig(response as Microfrontend[]);
      })
    );
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient, AppService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

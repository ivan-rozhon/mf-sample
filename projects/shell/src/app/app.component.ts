import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { loadRemoteModule } from '@angular-architects/module-federation';

import { Microfrontend, AppService } from './app.service';
import { routes } from './app.routes';

export function buildRoutes(options: Microfrontend[]): Routes {
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then((m) => m[o.ngModuleName]),
  }));

  return [...routes, ...lazyRoutes];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    const routes = buildRoutes(this.appService.mfConfig);
    this.router.resetConfig(routes);
  }
}

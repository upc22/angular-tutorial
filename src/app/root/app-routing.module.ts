import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../common/constants/routes';

import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  redirectTo: ROUTES.home.path,
  pathMatch: 'full'
}, {
  path: ROUTES.home.path,
  loadChildren: ROUTES.home.module
}, {
  path: ROUTES.components.path,
  loadChildren: ROUTES.components.module
}, {
  path: ROUTES.dataBinding.path,
  loadChildren: ROUTES.dataBinding.module
}, {
  path: ROUTES.directives.path,
  loadChildren: ROUTES.directives.module
}, {
  path: ROUTES.services.path,
  loadChildren: ROUTES.services.module
}, {
  path: ROUTES.lifeCycle.path,
  loadChildren: ROUTES.lifeCycle.module
}, {
  path: ROUTES.observables.path,
  loadChildren: ROUTES.observables.module
}, {
  path: ROUTES.forms.path,
  loadChildren: ROUTES.forms.module
}, {
  path: ROUTES.pipes.path,
  loadChildren: ROUTES.pipes.module
}, {
  path: ROUTES.routing.path,
  loadChildren: ROUTES.routing.module
}, {
  path: ROUTES.zone.path,
  loadChildren: ROUTES.zone.module
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

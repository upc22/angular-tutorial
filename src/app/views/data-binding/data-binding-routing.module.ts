import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { PropertyComponent } from "./property/property.component";
import { EventComponent } from "./event/event.component";
import { TwowayComponent } from "./twoway/twoway.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'inter',
    pathMatch: 'full'
  }, {
    path: 'inter',
    component: InterpolationComponent
  },
  {
    path: 'prop',
    component: PropertyComponent
  },
  {
    path: 'evt',
    component: EventComponent
  },
  {
    path: '2way',
    component: TwowayComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DataBindingRoutingModule { }

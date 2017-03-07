import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MultipleComponent } from './multiple/multiple.component';
import { CommunicationInputComponent } from './communication-input/communication-input.component';
import { CommunicationOutputComponent } from './communication-output/communication-output.component';
import { Communication2WayComponent } from './communication-2-way/communication-2-way.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'multiple',
    pathMatch: 'full'
  }, {
    path: 'multiple',
    component: MultipleComponent
  },
  {
    path:'communication-input',
    component:CommunicationInputComponent
  },
  {
    path:'communication-output',
    component:CommunicationOutputComponent
  },
  {
    path:'communication-2-way',
    component:Communication2WayComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ComponentsRoutingModule { }

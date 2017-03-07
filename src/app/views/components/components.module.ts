// start
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ComponentsRoutingModule } from './components-routing.module';

import { HomeComponent } from './home/home.component';
import { MultipleComponent } from './multiple/multiple.component';
import { CommunicationInputComponent } from './communication-input/communication-input.component';
import { CommunicationOutputComponent } from './communication-output/communication-output.component';
import { Communication2WayComponent } from './communication-2-way/communication-2-way.component';

import { MultipleChildComponent } from './multiple/multiple-child.component';
import { InputChildComponent } from './communication-input/input-child.component';
import { OutputChildComponent } from './communication-output/output-child.component';
import { IOChildComponent } from './communication-2-way/2-way-child.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule
  ],
  declarations: [HomeComponent, MultipleComponent, CommunicationInputComponent, CommunicationOutputComponent, Communication2WayComponent,
   MultipleChildComponent,InputChildComponent,OutputChildComponent,IOChildComponent]
})
export class ComponentsModule { }
// end
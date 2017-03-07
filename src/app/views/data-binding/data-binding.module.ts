import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { TwowayComponent } from './twoway/twoway.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataBindingRoutingModule
  ],
  declarations: [HomeComponent, InterpolationComponent, PropertyComponent, EventComponent, TwowayComponent]
})
export class DataBindingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ],
  declarations: [HomeComponent]
})
export class ObservablesModule { }

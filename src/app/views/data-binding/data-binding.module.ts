import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    DataBindingRoutingModule
  ],
  declarations: [HomeComponent]
})
export class DataBindingModule { }

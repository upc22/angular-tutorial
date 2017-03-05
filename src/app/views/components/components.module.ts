import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ComponentsRoutingModule } from './components-routing.module';

import { HomeComponent } from './home/home.component';
import { MultipleComponent } from './multiple/multiple.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule
  ],
  declarations: [HomeComponent, MultipleComponent]
})
export class ComponentsModule { }

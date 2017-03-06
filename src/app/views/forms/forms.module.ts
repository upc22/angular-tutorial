import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../shared/shared.module';

import { FormsRoutingModule } from './forms-routing.module';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ],
  declarations: [HomeComponent, TemplateDrivenComponent, ModelDrivenComponent]
})
export class FormsModule { }

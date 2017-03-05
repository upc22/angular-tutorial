import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    LifecycleRoutingModule
  ],
  declarations: [HomeComponent]
})
export class LifecycleModule { }

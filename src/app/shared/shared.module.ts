import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { Components } from './components/components';
import { Pipes } from './pipes/pipes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        ...Components,
        ...Pipes
    ],
    exports: [
        CommonModule,
        FormsModule,
        ...Components,
        ...Pipes
    ]
})
export class SharedModule {
    constructor() {}
}
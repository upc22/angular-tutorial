import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    imports: [],
    providers: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core Module Already Exists');
        }
    }
}
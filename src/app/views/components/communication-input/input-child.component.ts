// start
import { Component,Input } from '@angular/core';

@Component({
    selector: 'input-child-component',
    template: " <p> {{route.name}} is a Route of {{tutorial}}.</p>"
            
    
}) export class InputChildComponent{
     @Input() route:{};
     @Input() tutorial: string;
}
// end
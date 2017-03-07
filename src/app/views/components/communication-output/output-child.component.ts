// start
import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
    selector: 'output-child-component',
    template:  `
    <h4>{{route.name}}</h4>
    <button class="btn btn-success" (click)="vote('easy')"  [disabled]="voted"> Easy </button>
    <button class="btn btn-primary" (click)="vote('mediocre')" [disabled]="voted"> Mediocre </button>
    <button class="btn btn-danger" (click)="vote('difficult')" [disabled]="voted"> Difficult </button>
    
  `
    
}) export class OutputChildComponent{
    
    @Input()  route: {};
    @Output() onVoted = new EventEmitter<string>();
    voted = false;
    vote(value: string) {
    this.onVoted.emit(value);
    this.voted = true;
  }
}
// end
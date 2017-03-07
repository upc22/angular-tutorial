import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Data Binding';
  submenu = [{
    name: 'Interpolation',
    path: 'inter'
  }, {
    name: 'Property Binding',
    path: 'prop'
  }, {
    name: 'Event Binding',
    path: 'evt'
  }, {
    name: 'Two Way Binding',
    path: '2way'
  }];
  constructor() { }

  ngOnInit() {
  }

}

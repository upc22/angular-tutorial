import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Components';
  submenu = [{
    name: 'Multiple Components',
    path: 'multiple'
  }, {
    name: 'Communication - Input',
    path: 'communication-input'
  }, {
    name: 'Communication - Output',
    path: 'communication-output'
  }, {
    name: 'Communication - 2 Way',
    path: 'communication-2-way'
  }];
  constructor() { }

  ngOnInit() {
  }

}

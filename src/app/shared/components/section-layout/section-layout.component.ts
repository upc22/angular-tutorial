import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.scss']
})
export class SectionLayoutComponent implements OnInit {

  @Input() title: string;
  @Input() submenu: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}

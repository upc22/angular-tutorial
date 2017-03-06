import { Component, OnInit } from '@angular/core';
import {FileReadService } from "../../../shared/services/file-read.service";

// start
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  firstName: string = 'Vidit';
  lastName: string = 'Shah';
  fontWeight: string = 'bold'
  // end

  tsFileContent: string;
  htmlFileContent: string;

  constructor(private _fileReadService: FileReadService) {

  }
  ngOnInit() {
    this._fileReadService.getFileContents('src/app/views/data-binding/property/property.component.ts').subscribe(tsFileContent => this.tsFileContent = this._fileReadService.trimContent(tsFileContent,FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/data-binding/property/property.component.html').subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService.trimContent(htmlFileContent,FileReadService.HTML));
  }
}

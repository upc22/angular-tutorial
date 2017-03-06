import { Component, OnInit } from '@angular/core';
import { FileReadService } from "../../../shared/services/file-read.service";


@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit{
  firstName: string = 'Vidit';
  lastName: string = 'Shah';
  tsFileContent: string;
  htmlFileContent: string;

  constructor(private _fileReadService: FileReadService){
    
  }
  ngOnInit(){
    this._fileReadService.getFileContents('src/app/views/data-binding/interpolation/interpolation.component.ts').subscribe(tsFileContent => this.tsFileContent = tsFileContent);
    this._fileReadService.getFileContents('src/app/views/data-binding/interpolation/interpolation.component.html').subscribe(htmlFileContent => this.htmlFileContent = htmlFileContent);
  }
}

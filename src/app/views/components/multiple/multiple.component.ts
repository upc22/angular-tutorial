import { Component, OnInit } from '@angular/core';
import {FileReadService } from "../../../shared/services/file-read.service";
import { SiteContent } from "../../../common/constants/site-content";

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {

  mainContent = SiteContent.components.multiple.mainContent;
  componentOneDes = SiteContent.components.multiple.componentOneDes;
  componentTwoDes = SiteContent.components.multiple.componentTwoDes;

  moduleFileContent: string;
  parentFileContent: string;
  childFileContent :string;
  constructor(private _fileReadService: FileReadService) {

  }
  ngOnInit() {
    this._fileReadService.getFileContents('src/app/views/components/components.module.ts').subscribe(moduleFileContent => this.moduleFileContent = this._fileReadService.trimContent(moduleFileContent,FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/components/multiple/multiple.component.html').subscribe(parentFileContent => this.parentFileContent = this._fileReadService.trimContent(parentFileContent,FileReadService.HTML));
    this._fileReadService.getFileContents('src/app/views/components/multiple/multiple-child.component.ts').subscribe(childFileContent => this.childFileContent = this._fileReadService.trimContent(childFileContent,FileReadService.TS));

  }

}

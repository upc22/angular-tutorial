import { Component, OnInit } from '@angular/core';
import {FileReadService } from "../../../shared/services/file-read.service";
import { SiteContent } from "../../../common/constants/site-content";
import { ROUTES } from "../../../common/constants/routes"
// start
@Component({
  selector: 'app-communication-input',
  templateUrl: './communication-input.component.html',
  styleUrls: ['./communication-input.component.scss']
})
export class CommunicationInputComponent implements OnInit {
// end

  tutorial:string = "Angular Tutorial";
  routes:{} = ROUTES; 
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
    this._fileReadService.getFileContents('src/app/views/components/communication-input/communication-input.component.html').subscribe(parentFileContent => this.parentFileContent = this._fileReadService.trimContent(parentFileContent,FileReadService.HTML));
    this._fileReadService.getFileContents('src/app/views/components/communication-input/input-child.component.ts').subscribe(childFileContent => this.childFileContent = this._fileReadService.trimContent(childFileContent,FileReadService.TS));

  }

}

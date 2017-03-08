import { Component, OnInit } from '@angular/core';
import {FileReadService } from "../../../shared/services/file-read.service";
import { SiteContent } from "../../../common/constants/site-content";
import { ROUTES } from "../../../common/constants/routes"


@Component({
  selector: 'app-communication-output',
  templateUrl: './communication-output.component.html',
  styleUrls: ['./communication-output.component.scss']
})
export class CommunicationOutputComponent implements OnInit {
 
// start
  easy = 0;
  mediocre = 0;
  difficult = 0;
  routes = ROUTES;
  onVoted(value: string) {
    if(value=="easy") this.easy++;
    if(value=="mediocre") this.mediocre++;
    if(value=="difficult") this.difficult++;
  }
 // end
  
  mainContent = SiteContent.components.communicationOutput.mainContent;
  componentOneDes = SiteContent.components.communicationOutput.componentOneDes;
  componentTwoDes = SiteContent.components.communicationOutput.componentTwoDes;

  moduleFileContent: string;
  parentFileContent: string;
  childFileContent :string;
  constructor(private _fileReadService: FileReadService) {

  }
  ngOnInit() {
    this._fileReadService.getFileContents('src/app/views/components/communication-output/communication-output.component.ts').subscribe(moduleFileContent => this.moduleFileContent = this._fileReadService.trimContent(moduleFileContent,FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/components/communication-output/communication-output.component.html').subscribe(parentFileContent => this.parentFileContent = this._fileReadService.trimContent(parentFileContent,FileReadService.HTML));
    this._fileReadService.getFileContents('src/app/views/components/communication-output/output-child.component.ts').subscribe(childFileContent => this.childFileContent = this._fileReadService.trimContent(childFileContent,FileReadService.TS));

  }

}

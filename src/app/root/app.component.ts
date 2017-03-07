import { Component } from '@angular/core';

import { ROUTES } from '../common/constants/routes';
import { FileReadService } from "../shared/services/file-read.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    providers: [FileReadService]

})
export class AppComponent {
  routes = ROUTES;
}

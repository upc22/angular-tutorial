import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class FileReadService{
    constructor(private _http: Http){}
    getFileContents(fileUrl: string): Observable<string>{
        return this._http.get(fileUrl).map((res: Response) => res.text());
    }
}
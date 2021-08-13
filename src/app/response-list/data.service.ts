import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {environment} from "src/environments/environment";
import {roaProfitInputModel} from "./roaProfitInputModel";

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private _http : HttpClient) {}

    getRoaProfit(input : roaProfitInputModel) {
        return this._http.post(environment.hostUrl + '/api/Renewal/ROAProfitByBranch', input)
        .pipe(map((res:any) => {
            console.log(res);
            return res;
        }));
    }
}


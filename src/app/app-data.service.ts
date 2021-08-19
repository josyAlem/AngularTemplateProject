import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, map} from "rxjs/operators";
import {environment} from "src/environments/environment";
import {renewalRequestModel} from "./loanDecision/model/requestModel";
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppDataService {
    constructor(private _http : HttpClient) {}

    getRoaProfit(input : renewalRequestModel) {
        return this._http.post(environment.hostUrl + '/api/Renewal/ROAProfitByBranch', input).pipe(map((res : any) => {
            console.log(res);
            return res;
        }), catchError((error : any) => {
            return throwError(JSON.stringify(error.error));
        }));
    }
}


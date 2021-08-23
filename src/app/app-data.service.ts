import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { renewalRequestModel } from './loanDecision/model/requestModel';
import { throwError } from 'rxjs';
import * as _ from 'underscore';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  constructor(private _http: HttpClient) {}

  getRoaProfit(input: renewalRequestModel) {
    return this._http
      .post(environment.hostUrl + '/api/Renewal/ROAProfitByBranch', input)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError((error: any) => {
          return throwError(JSON.stringify(error.error));
        })
      );
  }
  parseError(error: any): string {
    if (!_.isNull(error) && !_.isEmpty(error)) {
      let parsedError = JSON.parse(error);
      if (parsedError) {
        if (parsedError.errors) return JSON.stringify(parsedError.errors);
        else if (parsedError.applicationErrorMessage)
          return JSON.stringify(parsedError.applicationErrorMessage);
      } else return error.toString();
    }
    return '';
  }
}
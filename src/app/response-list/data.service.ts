import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class DataService{
  constructor(private _http : HttpClient){}

   getRoaProfit() {
    this._http.post(environment.hostUrl + '/api/Renewal/ROAProfitByBranch', {"branchId": "850"}).subscribe((res2) => {
        console.log(res2);

    }, (err) => {
        console.log(err);
    });
}
}

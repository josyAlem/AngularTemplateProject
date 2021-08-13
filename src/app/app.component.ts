import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import { environment } from '../environments/environment';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent implements OnInit {

    constructor(private authSvc : AuthService, private _http : HttpClient) {}
    ngOnInit(): void {
        this.authSvc.login();
    }

    public getRoaProfit() {
        this._http.post(environment.hostUrl + '/api/Renewal/ROAProfitByBranch', {"branchId": "850"}).subscribe((res2) => {
            console.log(res2);

        }, (err) => {
            console.log(err);
        });
    }
}


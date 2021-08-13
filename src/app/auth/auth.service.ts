import {HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({providedIn:"root"})
export class AuthService  {

    constructor(private _http : HttpClient) {}

    login() {
        const url: string = environment.hostUrl + environment.loginUrl + environment.apiKey;
        this._http.get(url).subscribe((t) => {
            localStorage.setItem("token", t.toString());
        });
    }
    logout() {

        localStorage.removeItem("token");

    }

}


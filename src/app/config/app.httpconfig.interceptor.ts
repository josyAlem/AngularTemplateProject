import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class AppHttpConfigInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string | null = localStorage.getItem('token');

        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
            });
        }

        request = request.clone(
            {
                headers: request.headers.set('Accept', 'application/json'),
                responseType: 'json'

            }
        );

        return next.handle(request).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('interceptor handled event--->>>', event);
            }
            return event;
        }), catchError((error: HttpErrorResponse) => {
            let data = {};
            data = {
                reason: error && error.error && error.error.reason ? error.error.reason : '',
                status: error.status
            };
            console.error('interceptor failed on handling event--->>>', data);
            return throwError(error);
        }));
    }
}


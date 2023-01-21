import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginModel, loginResponseModel } from './loginmodel.model';

@Injectable()
export class authServices {
    private baseUrl: string = "http://88.135.36.18:7005/api";
    constructor(private http: HttpClient, private router: Router) {
    }

    loginService(model: loginModel): Observable<loginResponseModel> {
        return this.http.post<loginResponseModel>(`${this.baseUrl}/auth/login`, model);
    }
}
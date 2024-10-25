import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {
  AuthResponse,
  RegisterBody,
  User,
} from '../register/interfaces/auth.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = `${environment.baseUrl}/auth`;
  private readonly http = inject(HttpClient);
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor() {}

  register(body: RegisterBody) {
    const url = `${this.baseUrl}/register`;
    return this.http.post<AuthResponse>(url, body).pipe(
      tap(({ ok, token }) => {
        if (ok) {
          localStorage.setItem('token', token!);
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg)),
    );
  }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/login`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg)),
    );
  }

  validateToken(): Observable<boolean> {
    const url = `${this.baseUrl}/refresh`;
    const headers = new HttpHeaders().set(
      'Bearer',
      localStorage.getItem('token') || '',
    );

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        localStorage.setItem('token', resp.token!);
        this._user = resp.user;
        return resp.ok;
      }),
      catchError((err) => of(false)),
    );
  }

  logout() {
    localStorage.clear();
  }
}

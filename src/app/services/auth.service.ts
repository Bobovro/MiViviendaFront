import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { AuthResponse, LoginRequest, RegisterRequest } from '../model/auth.model';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private token: TokenService) {}

  login(body: LoginRequest) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/authenticate`, body).pipe(
      tap(res => this.token.set(res.jwt))
    );
  }

  register(body: RegisterRequest) {
    return this.http.post(`${this.baseUrl}/auth/register`, body, { responseType: 'text' });
  }

  logout() { this.token.clear(); }
}

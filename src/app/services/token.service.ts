import { Injectable } from '@angular/core';

const TOKEN_KEY = 'access_token';

@Injectable({ providedIn: 'root' })
export class TokenService {
  set(token: string) { localStorage.setItem(TOKEN_KEY, token); }
  get(): string | null { return localStorage.getItem(TOKEN_KEY); }
  clear() { localStorage.removeItem(TOKEN_KEY); }
  isLoggedIn(): boolean { return !!this.get(); }
}

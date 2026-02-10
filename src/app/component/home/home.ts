import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  tokenPreview = '';

  constructor(
    private auth: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
    // Solo para prueba visual: muestra una parte del token si existe
    const token = this.tokenService.get();
    this.tokenPreview = token ? `${token.substring(0, 20)}...` : '(sin token)';
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}

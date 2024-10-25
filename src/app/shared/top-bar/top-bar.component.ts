import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  logout(): void {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }
}

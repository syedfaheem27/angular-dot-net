import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.module';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  user: User | null = null;
  tab: string | undefined;
  constructor(private router: Router, private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    if (!(await this.authService.isAuthorized())) this.authService.logOut();
  }

  handleLogout(): void {
    this.authService.logOut();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-non-admin-dashboard',
  templateUrl: './non-admin-dashboard.component.html',
  styleUrls: ['./non-admin-dashboard.component.css'],
})
export class NonAdminDashboardComponent implements OnInit {
  user: User | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userInfoJson = sessionStorage.getItem('user');

    if (userInfoJson) this.user = JSON.parse(userInfoJson);
    else this.router.navigate(['/']);
  }

  handleLogout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}

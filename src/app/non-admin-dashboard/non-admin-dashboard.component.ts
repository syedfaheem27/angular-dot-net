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
    const user = localStorage.getItem('user');

    if (user) this.user = JSON.parse(user);
    else this.router.navigate(['/']);
  }

  handleLogout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}

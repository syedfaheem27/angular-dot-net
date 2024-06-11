import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  user: User | null = null;
  tab: string | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = sessionStorage.getItem('user');

    if (user) this.user = JSON.parse(user);
    else this.router.navigate(['/']);
  }

  handleLogout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}

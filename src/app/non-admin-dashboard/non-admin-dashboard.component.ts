import { Component, OnInit } from '@angular/core';

interface User {
  username: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-non-admin-dashboard',
  templateUrl: './non-admin-dashboard.component.html',
  styleUrls: ['./non-admin-dashboard.component.css'],
})
export class NonAdminDashboardComponent implements OnInit {
  user: User | null = null;
  constructor() {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');

    if (user) this.user = JSON.parse(user);
  }

}

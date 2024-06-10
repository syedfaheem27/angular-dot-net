import { Component, OnInit } from '@angular/core';

interface User {
  username: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  user: User | null = null;
  constructor() {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');

    if (user) this.user = JSON.parse(user);
  }
}

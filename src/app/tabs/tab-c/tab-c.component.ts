import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.module';

@Component({
  selector: 'app-tab-c',
  templateUrl: './tab-c.component.html',
  styleUrls: ['./tab-c.component.css'],
})
export class TabCComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    if (!(await this.authService.isAuthorized()))
      return this.authService.logOut();
  }
}

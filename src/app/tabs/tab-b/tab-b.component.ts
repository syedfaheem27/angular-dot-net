import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.module';

@Component({
  selector: 'app-tab-b',
  templateUrl: './tab-b.component.html',
  styleUrls: ['./tab-b.component.css'],
})
export class TabBComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    if (!(await this.authService.isAuthorized()))
      return this.authService.logOut();
  }
}

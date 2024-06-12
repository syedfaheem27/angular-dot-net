import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.module';

@Component({
  selector: 'app-tab-e',
  templateUrl: './tab-e.component.html',
  styleUrls: ['./tab-e.component.css'],
})
export class TabEComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    if (!(await this.authService.isAuthorized()))
      return this.authService.logOut();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.module';

@Component({
  selector: 'app-tab-d',
  templateUrl: './tab-d.component.html',
  styleUrls: ['./tab-d.component.css'],
})
export class TabDComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    if (!(await this.authService.isAuthorized()))
      return this.authService.logOut();
  }
}

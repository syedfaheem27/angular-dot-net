import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { AuthService } from 'src/app/services/auth.module';

@Component({
  selector: 'app-tab-a',
  templateUrl: './tab-a.component.html',
  styleUrls: ['./tab-a.component.css'],
})
export class TabAComponent implements OnInit {
  constructor(
    private idle: Idle,
    private cd: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) {
    this.idle.setIdle(5);
    this.idle.setTimeout(15);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeout.subscribe(() => {
      sessionStorage.removeItem('user');
      this.router.navigate(['/'], { replaceUrl: true });
    });
  }

  async ngOnInit(): Promise<void> {
    if (!(await this.authService.isAuthorized()))
      return this.authService.logOut();
    
    this.idle.watch();
  }

  ngOnDestroy(): void {
    this.idle.stop();
  }
}

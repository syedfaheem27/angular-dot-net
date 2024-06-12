import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';

@Component({
  selector: 'app-tab-f',
  templateUrl: './tab-f.component.html',
  styleUrls: ['./tab-f.component.css'],
})
export class TabFComponent implements OnInit {
  constructor(
    private idle: Idle,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.idle.setIdle(5);
    this.idle.setTimeout(15);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeout.subscribe(() => {
      sessionStorage.removeItem('user');
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    this.idle.watch();
  }

  ngOnDestroy(): void {
    this.idle.stop();
  }
}

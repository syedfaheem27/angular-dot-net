import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NonAdminDashboardComponent } from './non-admin-dashboard/non-admin-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TabAComponent } from './tabs/tab-a/tab-a.component';
import { TabBComponent } from './tabs/tab-b/tab-b.component';
import { TabCComponent } from './tabs/tab-c/tab-c.component';
import { TabDComponent } from './tabs/tab-d/tab-d.component';
import { TabEComponent } from './tabs/tab-e/tab-e.component';
import { TabFComponent } from './tabs/tab-f/tab-f.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'welcome/admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'A',
        pathMatch: 'full',
      },
      {
        path: 'A',
        component: TabAComponent,
      },
      {
        path: 'B',
        component: TabBComponent,
      },
      {
        path: 'C',
        component: TabCComponent,
      },
    ],
  },
  {
    path: 'welcome/non-admin-dashboard',
    component: NonAdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'D',
        pathMatch: 'full',
      },
      {
        path: 'D',
        component: TabDComponent,
      },
      {
        path: 'E',
        component: TabEComponent,
      },
      {
        path: 'F',
        component: TabFComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

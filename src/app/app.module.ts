import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    NonAdminDashboardComponent,
    SignupComponent,
    TabAComponent,
    TabBComponent,
    TabCComponent,
    TabDComponent,
    TabEComponent,
    TabFComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserSession } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    let userjson = sessionStorage.getItem('user');

    if (!userjson) {
      this.router.navigate(['/']);
      return;
    }

    let user = JSON.parse(userjson) as UserSession;

    if (!user) {
      this.router.navigate(['/']);
      return;
    }

    if (user.role === 'admin')
      this.router.navigate(['/', 'welcome', 'admin-dashboard'], {
        replaceUrl: true,
      });
    else
      this.router.navigate(['/', 'welcome', 'non-admin-dashboard'], {
        replaceUrl: true,
      });
  }

  isValidUser(users: User): boolean {
    const { username, password } = users;

    if (username.length === 0 || password.length === 0) return false;
    return true;
  }

  async handleSubmit(e: Event) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const user = {
      username: formData.get('username')! as string,
      password: formData.get('password')! as string,
    };

    if (!this.isValidUser(user))
      return alert('Either the username or password is empty!');

    //Continue forward
    if (!(await this.authService.authenticateUser(user)))
      return alert('Invalid username or password! at auth module');

    const userInfo = await this.authService.logIn(user);

    sessionStorage.setItem('user', JSON.stringify(userInfo));

    if (userInfo.role === 'admin')
      return this.router.navigate(['/', 'welcome', 'admin-dashboard'], {
        replaceUrl: true,
      });
    else
      return this.router.navigate(['/', 'welcome', 'non-admin-dashboard'], {
        replaceUrl: true,
      });
  }
}

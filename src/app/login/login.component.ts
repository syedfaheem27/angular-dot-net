import { Component, OnInit } from '@angular/core';
import { authenticateUser } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    let userjson = localStorage.getItem('user');

    if (!userjson) {
      this.router.navigate(['/']);
      return;
    }

    let user: User;

    user = JSON.parse(userjson);

    if (user.role === 'admin')
      this.router.navigate(['/', 'welcome', 'admin-dashboard'], {
        replaceUrl: true,
      });
    else
      this.router.navigate(['/', 'welcome', 'non-admin-dashboard'], {
        replaceUrl: true,
      });
  }

  isValidUser(users: { username: string; password: string }): boolean {
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
    const {
      isAuthenticated,
      user: returnedUser
    } = await authenticateUser(user);

    if (!isAuthenticated) return alert('Invalid username or password!');

    if (returnedUser) {
      localStorage.setItem('user', JSON.stringify(returnedUser));

      if (returnedUser.role === 'admin')
        return this.router.navigate(['/', 'welcome', 'admin-dashboard'], {
          replaceUrl: true,
        });
      else
        return this.router.navigate(['/', 'welcome', 'non-admin-dashboard'], {
          replaceUrl: true,
        });
    }
  }
}

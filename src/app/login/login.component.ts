import { Component, OnInit } from '@angular/core';
import { data as USERS } from '../data/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log(USERS);
  }

  ngOnInit(): void {}

  isValidUser(users: { username: string; password: string }): boolean {
    const { username, password } = users;

    if (username.length === 0 || password.length === 0) return false;

    const obj = USERS.find((user) => user.name === username);

    if (!obj) return false;

    if (password !== obj.password) return false;

    return true;
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const user = {
      username: formData.get('username')! as string,
      password: formData.get('password')! as string,
    };

    if (!this.isValidUser(user)) alert('Invalid username or password');

    //Continue forward
    console.log(user);
  }
}

import { Component, OnInit } from '@angular/core';
import { createUser } from '../services/signup.service';
import { Router } from '@angular/router';

interface SignupUser {
  username: string;
  password: string;
  confirmPwd: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isEmptyCredentials(user: SignupUser): boolean {
    const { username, password, confirmPwd } = user;

    if (
      username.length === 0 ||
      password.length === 0 ||
      confirmPwd.length === 0
    )
      return true;

    return false;
  }

  isSamePwd(data: { password: string; confirmPwd: string }): boolean {
    const { password, confirmPwd } = data;

    return confirmPwd === password;
  }

  async handleSubmit(e: Event) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const username = formData.get('username')! as string;
    const password = formData.get('password')! as string;
    const confirmPwd = formData.get('confirm-password')! as string;

    if (this.isEmptyCredentials({ username, password, confirmPwd }))
      return alert(
        'Either the username or password or confirm password is empty!'
      );

    if (!this.isSamePwd({ password, confirmPwd }))
      return alert("Password and confirm password don't match!");

    await createUser({
      username,
      password,
      role: 'user',
      isActive: false,
    });

    this.router.navigate(['/', 'login']);
  }
}

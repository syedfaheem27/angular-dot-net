import { Component, OnInit } from '@angular/core';

interface user {
  username: string;
  password: string;
  confirmPassword: string;
}

interface password {
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isValidUsername(user: string): boolean {
    return user.length !== 0;
  }

  isValidPassword(data: password): boolean {
    const { password, confirmPassword } = data;

    if (password.length === 0 || confirmPassword.length == 0) return false;

    if (password !== confirmPassword) return false;

    return true;
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const username = formData.get('username')! as string;
    const password = formData.get('password')! as string;
    const confPassword = formData.get('confirm-password')! as string;

    if (!username || !password || !confPassword)
      return alert(
        'Either username or password or confirm-password is missing!'
      );

    if (!this.isValidUsername(username))
      return alert('The username is invalid!');

    if (!this.isValidPassword({ password, confirmPassword: confPassword }))
      return alert('Passwords do not match!');

    //backend logic
    const user = {
      username,
      password,
    };

    console.log(user);
  }
}

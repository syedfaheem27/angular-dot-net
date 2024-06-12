import { Injectable } from '@angular/core';
import { User, UserSession, BackendUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000/users';

  constructor(private router: Router) {}

  private async getUsers(): Promise<BackendUser[]> {
    const data = await fetch(this.url);
    const users: BackendUser[] = await data.json();

    return users;
  }

  private async updateUser(user: BackendUser): Promise<void> {
    await fetch(`${this.url}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  }

  public async authenticateUser(user: User): Promise<boolean> {
    const users = await this.getUsers();

    const desiredUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (!desiredUser) return false;

    return true;
  }

  public async logIn(user: User): Promise<UserSession> {
    const users = await this.getUsers();

    const desiredUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    )!;

    let updatedUser = {
      ...desiredUser,
      timeStamp: Date.now(),
      isLoggedIn: true,
    };

    await this.updateUser(updatedUser);

    return {
      username: updatedUser.username,
      role: updatedUser.role!,
      timeStamp: updatedUser.timeStamp,
    };
  }

  public async isAuthorized(): Promise<boolean> {
    const userInfo = sessionStorage.getItem('user');

    if (!userInfo) return false;

    const user = JSON.parse(userInfo) as UserSession;

    const users = await this.getUsers();

    const desiredUser = users.find(
      (u) =>
        u.username === user.username &&
        u.role === user.role &&
        u.timeStamp === user.timeStamp
    );

    if (!desiredUser) return false;

    return true;
  }

  public logOut(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}

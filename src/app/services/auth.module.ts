import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserSession, BackendUser } from '../interfaces/user.interface';

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

  public async authenticateUser(
    user: User
  ): Promise<{ isAuthenticated: boolean; message?: string }> {
    const users = await this.getUsers();

    const desiredUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (!desiredUser)
      return {
        isAuthenticated: false,
        message: 'Invalid Username or Password!',
      };

    if (desiredUser.isLoggedIn)
      return {
        isAuthenticated: false,
        message: 'The user is logged in elsewhere!',
      };

    return {
      isAuthenticated: true,
    };
  }

  public async logIn(user: User): Promise<UserSession> {
    const users = await this.getUsers();

    const desiredUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    )!;

    let updatedUser = {
      ...desiredUser,
      isLoggedIn: true,
    };

    await this.updateUser(updatedUser);

    return {
      username: updatedUser.username,
      role: updatedUser.role!,
    };
  }

  public async isAuthorized(): Promise<boolean> {
    const userInfo = sessionStorage.getItem('user');

    if (!userInfo) return false;

    const user = JSON.parse(userInfo) as UserSession;

    const users = await this.getUsers();

    const desiredUser = users.find(
      (u) => u.username === user.username && u.role === user.role
    );

    if (!desiredUser) return false;

    return true;
  }

  public async logOut(): Promise<void> {
    const userInfo = JSON.parse(sessionStorage.getItem('user')!) as UserSession;
    const users = await this.getUsers();

    const desiredUser = users.find(
      (u) => u.username === userInfo.username && u.role === userInfo.role
    );

    const updateUser: BackendUser = {
      ...desiredUser!,
      isLoggedIn: false,
    };

    await this.updateUser(updateUser);
    
    sessionStorage.removeItem('user');
    this.router.navigate(['/'],{replaceUrl:true});
  }
}

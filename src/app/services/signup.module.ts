import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  private createUserObservable(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    return this.http.post<User>(this.url, user, { headers });
  }

  public createUser(user: User) {
    user.isLoggedIn = false;
    this.createUserObservable(user).subscribe((res) => console.log(res));
  }
}

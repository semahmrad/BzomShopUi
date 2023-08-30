import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  BASEURL = environment.BASE_URL;
  constructor(private httpClient: HttpClient) {}

  createAccount(user: User) {
    let result = this.httpClient.post<String>(
      this.BASEURL + '/api/register',
      user
    );
    return result;
  }
}

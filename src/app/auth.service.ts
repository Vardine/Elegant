import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { AngularFireDatabase} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }
  getArray() {
    return this.http.get('https://elegant-54b03.firebaseio.com/');
  }

}

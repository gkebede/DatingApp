import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService  {
apiUrl: 'https://localhost:44348/api/home';
// tslint:disable-next-line:align
constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
getValues() {
   return this.http.get('https://localhost:44348/api/home');
  }
}

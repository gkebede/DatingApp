import { Component } from '@angular/core';
import {ValueServiceService } from './value-service.service';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome';
}

import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {ValueServiceService} from '../value-service.service';
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
 values: any;
  constructor(private http: HttpClient, private service: ValueServiceService ) {
// console.log(this.serv.getValues());
}

  ngOnInit(): any {
    // this.getValues();
    this.service.getValues().subscribe(response => {
      this.values = response; console.log(this.values); });
  }
  // tslint:disable-next-line:typedef
  getValues(){
this.http.get('https://localhost:44348/api/home').subscribe(response => {
  // this.values = response;
  console.log(response);
}, error => {
  console.log(error);
});
}
}

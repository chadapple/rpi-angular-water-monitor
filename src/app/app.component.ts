import { Component } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';

interface JSONData {
  result:boolean;
  count:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RPI Water Monitor';
  process() : void {
    console.log('Called prcocess');
  }
  constructor(private http: Http) {
    console.log('constructor');
    this.http.get('http://localhost:3000/api/')
        .flatMap((data : Response) => data.json())
        .subscribe((response : JSONData) => 
          console.log(response.result + ' -> ' + response.count));
//    this.http.get('http://jsonplaceholder.typicode.com/users/')
//        .flatMap((data : Response) => data.json())
//        //.filter((data:JSONData) => data.id > 5)
//        //.map((data:JSONData) => {let dataR=data;dataR.name="Dr. " + dataR.name;return dataR;})
//        .subscribe((response : JSONData) => 
//          console.log(response.id + ' -> ' + response.name));
  }
}

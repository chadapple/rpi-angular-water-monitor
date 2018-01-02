import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class MonitorService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('http://localhost:3000/api/')
        .flatMap((data : Response) => data.json());
  }
}

import { Component } from '@angular/core';
import { LeakData } from './types';
import 'rxjs/Rx';
import { MonitorService } from './monitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RPI Water Monitor';
  process() : void {
    console.log('Called prcocess');
    this.ms.getData().subscribe((response : LeakData) => 
          console.log(response.result + ' -> ' + response.count));
  }
  constructor(private ms:MonitorService) {
  }
}

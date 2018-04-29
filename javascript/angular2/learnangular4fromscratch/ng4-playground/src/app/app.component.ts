import { Component } from '@angular/core';
import { DataService } from "./data.service";
import { Injectable} from "@angular/core";
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService:DataService) {

  };

  someProperty:string = '';
  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty=this.dataService.mydata();
  }
  title = 'app';
  myArr = false;
  myEvent(event) {
    console.log(event);
  };
  titleClass='red-title';
  titleClasses = {
    'red-title': true,
    'large-title': true
  }

}

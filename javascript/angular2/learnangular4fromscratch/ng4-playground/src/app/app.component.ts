import { Component } from '@angular/core';
import { DataService } from "./data.service";
import { Injectable} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition ('small => large', animate('300ms ease-in')),
    ])
  ]
})
export class AppComponent {
  constructor(private dataService:DataService) {

  };

  someProperty:string = '';
  state: string = 'small'
  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty=this.dataService.cars[1];
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
  animateMe() {
    this.state=(this.state==='small'? 'large' : 'small');
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  cars = ['Ford', 'Chevorlet', 'Maruti'];
  mydata() {
    return 'This is my data 2!!';
  }
}

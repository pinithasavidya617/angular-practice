import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter = 0;
  public evenOrOdd = '';
  name = "John";
  height = 0;
  weight = 0;
  bmi = 0;

  constructor(){

  }
  public increment(){
    this.counter += 1;
    this.evenOdd();
  }

  public evenOdd(){
    if (this.counter % 2 === 0){
      this.evenOrOdd = 'Even';
    }else{
      this.evenOrOdd = 'Odd';
    }
  }

  public bmiCal(){
    const heightInMeters = this.height / 100;
    this.bmi = this.weight / (heightInMeters ** 2);
  }

}

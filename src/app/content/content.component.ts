import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public searchText = "";
    public students = [
      {name : "john", age: 25, address: "Colombo"},
      {name : "nimal", age: 16, address: "Colombo"},
      {name : "alice", age: 14, address: "Colombo"},
      {name : "saman", age: 25, address: "Colombo"},
      {name : "mammal", age: 89, address: "Colombo"},

    ]

  childEvent(event: any){
      console.log("In parent component");
      console.log(event);

  }
}

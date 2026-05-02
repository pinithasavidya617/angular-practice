import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from "../../core/model/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
    @Input() student!: Student; //Data coming from parent to child
    @Input() i : number = 0;

    @Output() onStudentClick: EventEmitter<any> = new EventEmitter<any>();
  // send events/data back to the parent
    constructor() {
    }

    studentClick(){
      console.log("Student clicked");
      this.onStudentClick.emit(this.student);
    }

}


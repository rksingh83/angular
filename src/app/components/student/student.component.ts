import { Component, OnInit  ,Input} from '@angular/core';
import Student from '../../models/Student'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() student :Student[];

  constructor() {  console.log(this); console.log("in c");}

  ngOnInit() {
    console.log(this);
  }
  test(){
    console.log("890-");
  }
}

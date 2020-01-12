import { Component, OnInit } from '@angular/core';
import Student from '../../models/Student';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   students:Student[]
  constructor() { }

  ngOnInit() {
    this.students = [
      {id:1,name:'Rakesh',isRegistered:true},
      {id:2,name:'Ankit',isRegistered:false},
      {id:3,name:'Singh',isRegistered:true},
      {id:4,name:'Test',isRegistered:false}
    ]
  }

}

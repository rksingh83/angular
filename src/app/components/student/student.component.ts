import { Component, OnInit  ,Input} from '@angular/core';
import { FormGroup ,FormControl,FormBuilder } from '@angular/forms';
import Student from '../../models/Student'
import { CommonService } from 'src/app/service/service.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() student :Student[];

   form ;
   posts;
  constructor(private fb :FormBuilder , private commonService:CommonService) {
    this.form = this.fb.group({
      firstName:[],
      lastName:[],
      emails:this.fb.array([''])
    }) ;
    console.log(this.form)
    this.commonService.getData()
    .subscribe((res)=> {console.log(res);this.posts= res}) ;
    console.log(this.posts)

  }

  ngOnInit() {
   
   
  
  }
  test(){
    console.log("890-");
  }
}

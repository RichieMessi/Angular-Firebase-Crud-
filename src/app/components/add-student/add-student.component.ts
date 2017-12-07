import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import { Router, NavigationExtras } from '@angular/router';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    allowance:0
  }

  disableAllowanceOnAdd:boolean = true;


  constructor(
    public router:Router,
    public studentService:StudentService
  ) { 
    
  }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value:Student, valid:boolean}){

    if(this.disableAllowanceOnAdd){
      value.allowance = 0;
    }
    // console.warn(value);
    if(!valid){
      console.warn('not valid.....');
     
      this.router.navigate(['/']);
      

    } else {
      // console.warn('valid Inputs');

      // Add new Student
      this.studentService.newStudent(value);
      this.router.navigate(['/']);
      

      
    }
  }

}

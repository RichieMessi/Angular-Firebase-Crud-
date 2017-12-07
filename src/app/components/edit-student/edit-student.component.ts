import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute, Params, NavigationExtras} from '@angular/router';
import { Student } from '../../models/Student';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id:string;
  student:Student = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    allowance:0
  }

  disableAllownaceOnEdit:boolean = true;

  constructor(
    public studentService:StudentService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Get Student
    this.studentService.getStudent(this.id).subscribe(student => {

      this.student = student;
      // console.warn(this.student);
    })
  }

  onSubmit({value, valid}: {value:Student, valid:boolean}){
    

        // console.warn(value);
        // if(!valid){
        //   console.warn('not valid.....');
         
        //   this.router.navigate(['edit-student/'+this.id]);
          
    
        // } else {
          // console.warn('valid Inputs');
    
          // Add new Student
          this.studentService.updateStudent(this.id, value);

          console.warn(value);
          this.router.navigate(['/']);
          // this.studentService.updateStudent(this.id, this.student);
          
          
    
          
        
      }

}

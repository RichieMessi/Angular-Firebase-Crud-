import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[];
  totalAllowance: any;
  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      console.warn(this.students);
    this.getTotalAllowance()
    
    })
  }

  getTotalAllowance(){
    let total = 0;
    for (let i = 0; i < this.students.length; i++){
      total += parseFloat(this.students[i].allowance); 
    }

    this.totalAllowance = total;
    console.warn(this.totalAllowance);
  }

}

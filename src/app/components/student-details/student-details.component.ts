import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute, Params, NavigationExtras} from '@angular/router';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:string;
  student:Student;
  hasAllowance:boolean = false;
  showAllowanceUpdateInput:boolean = false;


  constructor(
    public studentService:StudentService,
    public router:Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {

    // Get Id of student
    this.id = this.route.snapshot.params['id'];
    // console.warn(this.id);

    

    // Get Student from the ID number
    this.studentService.getStudent(this.id).subscribe(student => {
      if (student.allowance > 0){
        this.hasAllowance = true;
      }
      this.student = student;
      // console.warn(this.student);
    })
  }


  updateAllowance(id:string){  
    // Update the allowance
    this.studentService.updateStudent(this.id, this.student);
    // this.router.navigate(['/student/'+this.id]);
    this.router.navigate(['/']);
  }

  onDeleteClick(){


    this.studentService.deleteStudent(this.id);
    this.router.navigate(['/']);
    }
  
  

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';
  
@Injectable()
export class StudentService {

  students: FirebaseListObservable<any[]>;
  student: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) { 
    this.students = this.af.list('/students') as FirebaseListObservable<Student[]>;
  }

  getStudents(){
    return this.students;
  }

  newStudent(student:Student){
    this.students.push(student);
  }

  getStudent(id:string){
    this.student = this.af.object('/students/'+id) as FirebaseObjectObservable<Student>;
    return this.student;
  }

  updateStudent(id:string, student:Student){
    return this.students.update(id, student);
  }

  deleteStudent(id:string){
    return this.students.remove(id);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Angular fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


// Service Imports
import { StudentService } from './services/student.service';


const appRoutes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'add-student', component:AddStudentComponent},
  {path: 'student/:id', component:StudentDetailsComponent},
  {path: 'edit-student/:id', component:EditStudentComponent}
]

export const firebaseConfig = {
  apiKey: "AIzaSyCo257UbsL_vFZFIlAbjfu2-HFND-ViJ3I",
  authDomain: "studentrecords-7b346.firebaseapp.com",
  databaseURL: "https://studentrecords-7b346.firebaseio.com",
  projectId: "studentrecords-7b346",
  storageBucket: "",
  messagingSenderId: "457025981895"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    EditStudentComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
    
  ],
  providers: [
    AngularFireDatabase, 
    AngularFireAuth,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {student} from '../shared/student';
import {stud} from '../shared/stud';
import {  Router  } from '@angular/router';  

//import{stud} from '../shared/stud';
import { StudServiceService } from './../stud-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Repdata;
  constructor(private studservice: StudServiceService,private router: Router){
  }
  ngOnInit(): void {
  this.studservice.GetUser().subscribe(data =>  this.Repdata = data)  
  }

  // removeEmployee(s, index) {
  //   if(window.confirm('Are you sure?')) {
  //       this.studservice.deleteEmployee(s._id).subscribe((data) => {
  //         this.Repdata.splice(index, 1);
  //       }
  //     )    
  //   }
  // }
insert(){
  this.router.navigateByUrl('/contect');
}
  removeEmployee(id) {
    if(window.confirm('Are you sure?')) {
        this.studservice.deleteEmployee(id).subscribe((data) => {
               this.ngOnInit();
                
        }
      )    
    }
  }
}

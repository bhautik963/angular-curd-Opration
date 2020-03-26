import { Component, OnInit } from '@angular/core';
import{stud} from '../shared/stud';
import { StudServiceService } from './../stud-service.service';
import {  Router  } from '@angular/router';  
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {

 
  Stud: stud[];
  editForm: FormGroup;

  dept = ['SOE','SOS','SOM','SOPH'];
  branch = ['Computer','Civil',"MECH","BSC","MSC","Managment","Information Technology"];
  model =  new stud("17SOECE11048",'Bhautik',21,'03/30/1998',this.dept[0],this.branch[0],7.00,35000);
  constructor(private studservice: StudServiceService,private router: Router) { }
  
  submitted = false;

  onSubmit() { 
    
  
    
    this.studservice.savestud(this.model).subscribe(data => console.log("success", data), error => console.log("error", error)); 
  
    this.router.navigate(['/home'])  
  }
  ngOnInit() {
    }
    
  }

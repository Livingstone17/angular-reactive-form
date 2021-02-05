import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


    myForm:FormGroup;
    post:any;
    description:string="";
    name:string='';
    email:string='';
    errorAlert:string='Please enter your name'
    errorAlert2:string='Please enter a valid email'



  constructor(private fb: FormBuilder) { 
    this.myForm = fb.group({
      'name': [null,Validators.required],
      'email':[null,Validators.compose([Validators.pattern("[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"),Validators.required])],
      'description': [null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
      'validate':''
    });
  }



  addPost(post){
    this.description=post.description;
    this.name=post.name;
    this.email=post.email;
  }
  ngOnInit(): void {
    // this.myForm.get('validate').valueChanges.subscribe(
    //   (validate)=>{
    //     if(validate=='1'){
    //       this.myForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    //       this.errorAlert = 'you need to specify at least 3 characters';
    //     }else{
    //       this.myForm.get('name').setValidators(Validators.required)
    //     }
    //     this.myForm.get('name').updateValueAndValidity();
    //   }
     
    // )
  }

}

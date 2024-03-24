import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { userNameValidators } from './userName.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!:FormGroup

  constructor(private fb:FormBuilder){

    this.loginForm = this.fb.group({

      userName:new FormControl('',[Validators.required,userNameValidators.cannotcontainSpace]),
      email:new FormControl('',[Validators.required])
    })
  }



  submit() {

    console.log(this.loginForm.value)
  }


}

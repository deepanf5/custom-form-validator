import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customValidators';
  loginForm!:FormGroup

  constructor(private fb:FormBuilder){

    this.loginForm = this.fb.group({

      username:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required)
    })
  }

}

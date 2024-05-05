import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  isLogin: boolean = true;
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  switchTo(){
    this.isLoading = true;
    this.isLogin = !this.isLogin;
    if(this.isLogin){
      this.signInForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
        });
        this.isLoading = false;
      }
      else if(!this.isLogin){
        this.signUpForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
          email: ['', Validators.required],
          mobile: ['', Validators.required],
          role: ['', Validators.required],
        });
        this.isLoading = false;
      }
  }

  onSubmit(){
    this.isLoading = true;
    if(this.isLogin){
      console.log('SignIn Form:', this.signInForm.value);
      this.router.navigateByUrl('/home');
      this.isLoading = false;
    }
    else if(!this.isLogin){
      console.log('SignUp Form:', this.signUpForm.value);
      this.isLogin = true;
      this.isLoading = false;
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { User, UserLoginCredential } from '../interface/app.interface';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../ApiService/api-service.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { routes } from '../app.routes';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,AsyncPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  subscription: Subscription = new Subscription();
  
  constructor(private apiService:ApiService ,private authService: AuthService, private router: Router){}

  UserForm = new FormGroup({
    id: new FormControl<number>(0),
    codeMeli: new FormControl<string>('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/[0-9]*/)]),
    fullName: new FormControl<string>('',[Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl<string>('',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl<string>('',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]),
    phone:new FormControl<string>('',[Validators.required, Validators.minLength(11)])
  })
 
  SignUp(){
    if (this.UserForm.valid) {
      const newUser: User = {
        id: this.UserForm.controls.id.value as number,
        codeMeli: this.UserForm.controls.codeMeli.value as string,
        fullName: this.UserForm.controls.fullName.value as string,
        email: this.UserForm.controls.email.value as string,
        password: this.UserForm.controls.password.value as string,
        phoneNumber: this.UserForm.controls.phone.value as string
      };

      console.log(newUser);
      this.subscription=this.apiService.postUser(newUser).subscribe({
        next: (data: User) => {
          console.log('User added successfully:', data);
          this.router.navigate(['/doorInfo'])
        },
        error: (error) => {
          console.error('Error adding user:', error);
        },
        complete: () => {
          console.log('User addition complete.');
        }
      });
      
      // Now you can use newUser object as required
    } else {
      console.log('Form is invalid');
    }
  }
  LoginForm = new FormGroup({
    codeMeli: new FormControl<string>('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/[0-9]*/)]),
    password: new FormControl<string>('',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)])
  })
  Login(){
    if (this.LoginForm.valid) {
      const log : UserLoginCredential = {
        codeMeli : this.LoginForm.controls.codeMeli.value as string,
        password : this.LoginForm.controls.codeMeli.value as string
      }
      this.router.navigate(['/doorInfo']);
    }
    else{
      console.log('Form is invalid');
    }
  }
  
  // calculateAge function
  calculateAge(dateString: string): number {
    const date = new Date(dateString);
    const today = new Date();
    let year = today.getFullYear() - date.getFullYear();
    let month = today.getMonth() - date.getMonth();
    let day = today.getDate() - date.getDate();

    // console.log(dateString);

    if (month < 0 || (month === 0 && day < 0)) {
      year--;
    }

    return year;
  }
  // calculateAge function

  
  ngOnInit(): void {}
  // handling overlay movement
  public overlayLeft(container: HTMLElement) {
    container.classList.remove('right-panel-active');
  }
  public overlayRight(container: HTMLElement) {
    container.classList.add('right-panel-active');
  }
 
}

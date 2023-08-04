import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth){
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });

    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loginUser() {
    if (this.loginForm.invalid) return;

    this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password)
      .then((result) => {
       
        if(result == null) { //null is success
          console.log('logging in....')
          //console.log(result)
          this.router.navigate(['/dashboard']);
        }        
        else if (result.isValid === false) {
          console.log('loggin error', result);
          //console.log(result)
          this.firebaseErrorMessage = result.message;
        }
      })
  }

}

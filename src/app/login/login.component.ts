import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // username: any = '';
  // password: any = '';
  loginForm: FormGroup;
  constructor(private router: Router,private fs:AngularFirestore) {
    this.loginForm = new FormGroup({
      email: new FormControl('' , [Validators.required,Validators.email]),
      password: new FormControl('' , [Validators.required])
    })
   }


  ngOnInit(): void {
  }

  mainPage() {
    this.fs.collection('User Info').add({
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
      createdAt:moment().toDate()
    });
    this.router.navigate(['/courses']);
  }

}

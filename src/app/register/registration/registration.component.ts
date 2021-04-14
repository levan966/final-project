import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  constructor(private db: AngularFireDatabase, private as: AuthService) {
  }
  
  ngOnInit(): void {
    // this.getPersonsList()
  }

  formData = {
    email: "",
    password: "",
  }

  register () {
    this.as.standardSignUp(this.formData)
  }

}

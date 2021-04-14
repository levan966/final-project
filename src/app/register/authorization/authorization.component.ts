import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private as: AuthService) { }

  ngOnInit(): void {
  }

  formData = {
    email: "",
    password: "",
  }
  
  signIn () {
    this.as.standardSignIn(this.formData)
  }

  fbAuth () {
    this.as.doFacebookLogin()
  }

  googleAuth () {
    this.as.doGoogleLogin()
  }

  logOut () {
    this.as.logOut()
  }

}

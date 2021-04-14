import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Subject } from 'rxjs';
import { RouterModule, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      console.log('shemovida')
      if(!!user){
        this.saveUser(user)
      }
    })
  }
  user=new Subject<any>()
  
  isAuthenticated = false

  checkIsAuthenticated=()=>{
    return this.isAuthenticated
  }

  standardSignUp (data) {
    return this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
    .then(
      result =>{
        console.log(result)
      }
    ).catch(
      error =>  {
        console.log(error.message)
      }
    )
  }

  standardSignIn (data) {
    return this.afAuth.signInWithEmailAndPassword(data.email, data.password)
    .then(
      result =>{
        console.log(result)
      }
    ).catch(
      error =>  {
        console.log(error.message)
      }
    )
  }

  logOut () {
    console.log('shevidaaaaaaaaaaaaaaa')
    this.afAuth.signOut().then(()=>{
      console.log('loged out vashaaaaa ariiis')
      this.removeUser()
    })
    
  }


  saveUser (user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.isAuthenticated = true
    this.user.next(JSON.parse(localStorage.getItem('user')));
  }
  removeUser(){
    localStorage.removeItem('user')
    this.isAuthenticated = false
    this.user.next(null)
    this.router.navigate(['/authorization']);
  }

  getUser(){
    return this.user.asObservable()
  }

  doFacebookLogin () {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth
      .signInWithPopup(provider)
      .then(
        response => {
          console.log(response)
          this.saveUser(response.additionalUserInfo.profile)
          console.log(this.getUser())
          resolve(response)
          this.router.navigate(['/user']);
        },
        error => {
          console.log(error),
          reject(error)
        }
      )
    })
  }

  doGoogleLogin () {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth
      .signInWithPopup(provider)
      .then(
        response => {
          console.log(response)
          this.saveUser(response.additionalUserInfo.profile)
          console.log(this.getUser())
          resolve(response)
          this.router.navigate(['/user']);
        },
        error => {
          console.log(error)
          reject(error)
        }
      )

    })
  }

}

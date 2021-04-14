import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private as: AuthService) {
    
  }

  user;

  ngOnInit(): void {
    this.as.getUser().subscribe(user=>{
      console.log('rx',user)
      this.user=user
      console.log(this.user)
    })
  }
  logout(){
    this.as.logOut()
  }

}

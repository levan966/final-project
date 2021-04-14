import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private db: AngularFireDatabase,private as: AuthService) { }

  user
  hotels

  ngOnInit(): void {
    this.gethotelList()
    this.as.getUser().subscribe(user=>{
      this.user=user
      console.log(this.user)
    })
  }

  gethotelList(){ 
    this.db.list('hotelData').snapshotChanges().pipe(
      map(data => {
        // console.log(data)
        return data.map(info => 
            (
              {
                key: info.key,
                ...info.payload.val() as {}
              }
            )
          )
        }
      )
    ).subscribe(data => {
      this.hotels = data.filter((hotel:any)=>hotel.ownerId===this.user.uid)
      console.log(this.hotels)
    })
  }
}

import { map } from 'rxjs/operators';
import { HotelServService } from './../services/hotel-serv.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hotelData

  constructor(private db:AngularFireDatabase, private hs: HotelServService) { 
  }

getHotelsList(){ 
    this.hs.getInfoList()
    .snapshotChanges().pipe(
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
      this.hotelData = data
      console.log(this.hotelData)
    })
  }
  
  ngOnInit(): void {
    this.getHotelsList()
  }
}

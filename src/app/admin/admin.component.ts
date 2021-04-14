import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HotelServService } from './../services/hotel-serv.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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

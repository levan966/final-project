import { AuthService } from './../services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private as: AuthService) { }

  ngOnInit(): void {
    this.gethotelList()
    this.as.getUser().subscribe(user=>{
      if(user){
        this.hotel.ownerId=user.uid
      }
    })
  }

  hotel = {
    name: "",
    star: "",
    region: "",
    sity: "",
    address: "",
    roomsNumber: "",
    url: "",
    otherServices:{
      parking: false,
      restaurant: false,
      wifi: false,
      tv: false,
      pool: false,
      sauna: false,
      golf: false,
      tableTennis: false,
      bowling: false,
    },
    description: "",
    ownerId:'',
  }

  hotels = []
  
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
      this.hotels = data
      console.log(this.hotels)
    })
  }
  
  addHotel () {
    this.db.list('hotelData').push(this.hotel)
    this.hotel.name = "";
    this.hotel.star = "";
    this.hotel.region = "";
    this.hotel.sity = "";
    this.hotel.address = "";
    this.hotel.roomsNumber = "";
    this.hotel.url = "";
    this.hotel.description = "";
  }




  serviceTrue (bool, name) {
    this.hotel.otherServices[name] = !bool
    console.log(this.hotel.otherServices)
    console.log(name)
  }
 
  removeHotel(hotelId){
    this.db.list('hotelData/id').remove(hotelId)
  }
  // ////  (click)="removeHotel(hotel.key)" !!!!!!!!!!!!!!!!!!!!!!!!!for remove!!!!!!!!!!!!!!!!!!!!!!!!! 

}

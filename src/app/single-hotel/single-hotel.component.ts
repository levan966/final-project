import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HotelServService } from './../services/hotel-serv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.scss']
})
export class SingleHotelComponent implements OnInit {

  hotelData

  constructor(private db:AngularFireDatabase, private router: ActivatedRoute,  private hs: HotelServService) { 
    // db.list('/hotelData').valueChanges().subscribe((data)=>{
    //   this.hotelData=data
    //   console.log(this.hotelData)
    // })
  }

  counter(arrayLength){
    return new Array(arrayLength)
  }
  
  singleHotel = null

  ngOnInit(): void {
    const hotelId = this.router.snapshot.params.id;
    const specificHotel = this.hs.getHotel(hotelId);
    specificHotel.valueChanges().subscribe(data => {
      this.singleHotel = data
      console.log(this.singleHotel)
    })
    console.log(hotelId)
  }
}

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
// import { HotelServService } from './../.././services/hotel-serv.service';
import { HotelServService } from '../../services/hotel-serv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.scss']
})

export class DeleteHotelComponent implements OnInit {

  hotelData

  constructor(private db:AngularFireDatabase, private route: ActivatedRoute,private router:Router,  private hs: HotelServService, private as:AuthService) { 
    // db.list('/hotelData').valueChanges().subscribe((data)=>{
    //   this.hotelData=data
    //   console.log(this.hotelData)
    // })
  }

  counter(arrayLength){
    return new Array(arrayLength)
  }
  
  singleHotel

  ngOnInit(): void {
    const hotelId = this.route.snapshot.params.id;
    console.log('hotelhotel',hotelId)
    const specificHotel = this.hs.getHotel(hotelId);
    specificHotel.valueChanges().subscribe(data => {
      this.singleHotel = {...data as {},key:hotelId}
      console.log(this.singleHotel)
    })
    console.log(hotelId)
  }


  removeHotel(hotelId){
    this.db.list('hotelData').remove(hotelId).then(()=>{
      this.router.navigate(['/admin'])
    })
  }
  
  // detelehotel () {
  //   this.hs.removeHotel()
  // }

}

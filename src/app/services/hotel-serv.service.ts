import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class HotelServService {

  dbPath = '/hotelData';

 hotelRef: AngularFireList<any> = null;

  getInfoList() {
    return this.hotelRef
  }

  constructor(private db: AngularFireDatabase) { 
    this.hotelRef = db.list(this.dbPath)
  }
  

  addHotel(hotelObject) {
    this.db.list(this.dbPath).push(hotelObject)
  }

  removeHotel(hotelId){
    this.db.list(this.dbPath).remove(hotelId)
  }

  updateHotel(hotelObject) {
    this.db.list(this.dbPath).update(hotelObject.id, hotelObject)
  }

  getHotel(hotelKey) {
    return this.db.object(this.dbPath + '/' + hotelKey) /* მოაქვს კონკრეტული პროდუქტი */
  }


}

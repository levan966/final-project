import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project';

  
  // person = {
  //   name: "",
  //   lastName: "",
  // }

  // persons: Observable<any[]>
  // constructor(private db: AngularFireDatabase) {
  //   this.persons = db.list('personData').valueChanges();
  //   this.persons.subscribe(data => {
  //     console.log(data)
  //   })
  // }

  // addPerson () {
  //   this.db.list('personData').push(this.person)
  //   this.person.name = "";
  //   this.person.lastName = "";
  // }
}

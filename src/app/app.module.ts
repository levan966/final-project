import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './register/registration/registration.component';
import { AuthorizationComponent } from './register/authorization/authorization.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminComponent } from './admin/admin.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { SingleHotelComponent } from './single-hotel/single-hotel.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserComponent } from './user/user.component';
import { DeleteHotelComponent } from './admin/delete-hotel/delete-hotel.component';
import { UserSingleHotelComponent } from './user/user-single-hotel/user-single-hotel.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    AuthorizationComponent,
    HomeComponent,
    AdminComponent,
    AddHotelComponent,
    SingleHotelComponent,
    ErrorPageComponent,
    UserComponent,
    DeleteHotelComponent,
    UserSingleHotelComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

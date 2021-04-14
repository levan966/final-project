import { UserSingleHotelComponent } from './user/user-single-hotel/user-single-hotel.component';
import { DeleteHotelComponent } from './admin/delete-hotel/delete-hotel.component';
import { UserComponent } from './user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SingleHotelComponent } from './single-hotel/single-hotel.component';
import { AdminComponent } from './admin/admin.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { RegistrationComponent } from './register/registration/registration.component';
import { AuthorizationComponent } from './register/authorization/authorization.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "userSingleHotel/:id",
    component: UserSingleHotelComponent
  },
  {
    path: "addhotel",
    component: AddHotelComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "admindelete/:id",
    component: DeleteHotelComponent,
  },
  {
    path: "singleHotel/:id",
    component: SingleHotelComponent,
  },
  {
    path: "authorization",
    component: AuthorizationComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

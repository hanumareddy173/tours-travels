import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { BookingsComponent } from './bookings/bookings.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'bookings',component:BookingsComponent},
   {path:'packages',component:PackagesComponent},
    
  {path:'services',component:ServicesComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'review',component:ReviewComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

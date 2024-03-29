import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: '',component:HomeComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'about',component:AboutComponent},
  {path: '**',pathMatch: 'full', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

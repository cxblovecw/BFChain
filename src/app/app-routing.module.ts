import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DownloadComponent } from './modules/download/download.component';
import { JoinComponent } from './modules/join/join.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'download',component:DownloadComponent},
  {path:'join',component:JoinComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeModule } from './modules/home/home.module';
import { DownloadModule } from './modules/download/download.module';
import { JoinModule } from './modules/join/join.module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DownloadModule,
    JoinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export  class AppModule { }

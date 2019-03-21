import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { LibraryService } from './library.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryDetailsComponent } from './library-details/library-details.component'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryListComponent,
    LibraryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

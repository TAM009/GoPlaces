import { PlaceSearchService } from './place-search/place-search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PlaceSearchComponent } from './place-search/place-search.component'; 
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    PlaceSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PlaceSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

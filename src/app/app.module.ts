import { PlaceSearchService } from './place-search/place-search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PlaceSearchComponent } from './place-search/place-search.component'; 
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    PlaceSearchComponent,
    NavbarComponent,
    DisplayComponent,
    FooterComponent
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

import { MainBody } from './../mainBody';
import { Component, OnInit } from '@angular/core';
import { PlaceSearchService } from './place-search.service'
import { FormsModule }   from '@angular/forms';
import { NgFor } from '@angular/common'

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';


// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
 selector: 'place-search',
 templateUrl: './place-search.component.html',
 styleUrls: ['./place-search.component.css'],
 providers:[PlaceSearchService]
})
export class PlaceSearchComponent implements OnInit {

    private keyword:string;

    places : MainBody[];
    
    Url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=";
    apikey='&key=AIzaSyBqUo8iES8de8s40h1FI4bC5olki_xta90';

    constructor(
      private placeSearchService: PlaceSearchService,
      ) {}

    // handleSuccess(data: ){
    //   this.places=data.response;
    //   console.log(data.response);
    // }


    searchPlaces(keyword:string){
     return this.placeSearchService.search(keyword)
     //.subscribe(places => this.places = places)
     .subscribe(places =>{this.places=places;console.log(places)})
     //.subscribe(res => console.log(res))
     //.subscribe(data => console.log(data));
     
    }
      
     

   

   ngOnInit(){}
 
}

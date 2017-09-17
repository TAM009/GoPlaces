import { MainBody } from './../mainBody';
import { Component, OnInit } from '@angular/core';
import { PlaceSearchService } from './place-search.service'
import { FormsModule }   from '@angular/forms';

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

    ngOnInit(){}

    places : MainBody[];
  
   constructor(
   private placeSearchService: PlaceSearchService,
   ) {}
   
   searchPlace(keyword:string){
     return this.placeSearchService.search(keyword)
     .subscribe(places =>{this.places=places;console.log(places)})
   }
 
}

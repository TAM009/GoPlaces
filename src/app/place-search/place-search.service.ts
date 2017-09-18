import { MainBody } from './../mainBody';

import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Observable';

import 'rxjs/add/operator/map';
@Injectable()

export  class PlaceSearchService{
    constructor(private http:Http){}
    private API_URL='https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
    
    private URL=this.API_URL;
    search(term:string){
    return this.http.get(this.URL +term+'&key=AIzaSyBqUo8iES8de8s40h1FI4bC5olki_xta90')
    .map(response => response.json());
   }
}

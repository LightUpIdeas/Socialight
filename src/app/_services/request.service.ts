import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RequestService {
    private sidebar:boolean;
    constructor(private http: HttpClient) { }
    user = localStorage.getItem('currentCustomer');
    token = localStorage.getItem('currentToken');
    url = 'https://api.enevo.com/api/3/customer/' + this.user;
    usr = localStorage.getItem('user');
    headers = new HttpHeaders().set('X-Api-Client', 'neon').set('X-Token',this.token);
    // headers: Headers = new Headers();
    // headers.append('Content-Type' , 'application/json');
    // this.headers = this.headers.append('X-Token', this.token);
    // this.headers.append('X-Api-Client', this.user);
    setSideBar(x:boolean){
        this.sidebar=x;
    }
    getSideBar(){
        return this.sidebar;
    }
    locations() {
        return this.http.get(this.url,{headers: this.headers})
            .map(response => {
                if (response ) {
                    localStorage.setItem('userName', response['customer'].name);

                }
                console.log("Locations ", response)

                return response;
            });
    }
    containerBreakdown() {
        return this.http.get("https://api.enevo.com/api/3/contentTypeCategories",{headers: this.headers})
            .map(response => {
                if (response ) {

                }
                console.log("containerBreakdown", response)
                return response;

            });
    }
    diversionRate() {
        console.log('rate',this.headers);
        return this.http.get("https://api.enevo.com/api/3/generate/monthlyServiceEvents",{headers: this.headers})
            .map(response => {
                if (response ) {

                }
                console.log("diversionRate", response)
                return response;

            });
    }
    recentCollections(){
        return this.http.get("https://api.enevo.com/api/3/serviceEvents?filter=&limit=50&offset=0",{headers: this.headers})
            .map(response => {
                if (response ) {

                }
                console.log("recentCollections", response)
                return response;

            });
    }
    //NOT SURE WE NEED THIS ONE
    // planSchedule(){
    //     return this.http.get("https://api.enevo.com/api/3/planSiteSchedule",{headers: this.headers})
    //         .map(response => {
    //             if (response ) {

    //             }
    //             console.log("recentCollections", response)
    //             return response;

    //         });
    // }
    pickUpSchedule(){
        return this.http.get("https://api.enevo.com/api/3/scheduleRules?limit=0",{headers: this.headers})
            .map(response => {
                if (response ) {

                }
                console.log("recentCollections", response)
                return response;

            });
    }

    
}

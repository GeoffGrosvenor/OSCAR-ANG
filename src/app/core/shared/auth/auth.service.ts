import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import {Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ServicesConfig } from '../sys/servicesconfig/services.config';
import { Helpers } from '../sys/helpers/helpers';
import { User } from '../user/user';


@Injectable()
export class AuthenticationService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn(){
        return this.loggedIn.asObservable();
    }

    constructor(private http: HttpClient, private router: Router)  {
        if (localStorage.getItem('currentUser')) {
               this.loggedIn.next(true);
        }
    }

    login(username: string, password: string) {

        const serviceconfig =  new ServicesConfig();
        const serviceconfigURL = serviceconfig.getServicemMethodURL('login');
        const helpers = new Helpers();
        const encrytpedpassword: string = helpers.encryptpassword(password);
        const authheader = helpers.createHeader();


        return this.http.get(serviceconfigURL + '?username=' + username + '&password=' + encrytpedpassword, { headers: authheader})
            .map((data: any) => {
                this.loggedIn.next(true);
            });
    }

    logout() {
       // localStorage.removeItem('currentUser');
       this.loggedIn.next(false);
       this.router.navigate(['/login']);
    }
}

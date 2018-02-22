import * as ServiceConfig from './services.config.json';
import { Injectable } from '@angular/core';


export class ServicesConfig {
    BaseServiceURL: String;
    AuthenticationUserName: String;
    AuthenticationKey: String;
    ServiceURL: String;
    UserSecret: String;

    constructor() {
    }

    getServiceBaeURL(): string {
        return ServiceConfig['Services']['BaseServiceURL'];
    }

    getServicemMethodURL(methodname: string): string {
    const servicemethods: string[] = ServiceConfig['ServiceMethods'];
     switch (methodname) {
        case 'login': {
            return ServiceConfig['Services']['BaseServiceURL'] + servicemethods['login'];
        }
     }
    }

    getAuthenticationUserName() {
        return  ServiceConfig['Services']['AuthenticationUserName'];
    }

    getUserSecretKey() {
        return  ServiceConfig['UserServices']['UserSecret'];
    }
}




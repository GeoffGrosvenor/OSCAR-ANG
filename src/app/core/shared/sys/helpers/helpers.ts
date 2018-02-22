import * as ServiceConfig from '../servicesconfig/services.config.json';
import * as Crypto from 'crypto-js';
import { HttpHeaders } from '@angular/common/http';


export class Helpers {
    encpassword: string;

    constructor() {}

    encryptpassword(password) {
        password = Crypto.enc.Utf8.parse(password);
        password = Crypto.enc.Base64.stringify(password);
          return password;
    }

    createHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        const AuthenticationUserName = ServiceConfig['Services']['AuthenticationUserName'];
        const token: string = this.createJWTToken();
        headers = headers.set('Authorization', AuthenticationUserName + ' ' + token);
        return headers;
    }

    createJWTToken(): string {
        const header = {
                'alg': 'HS256',
                'typ': 'JWT'
            };
        const stringifiedHeader = Crypto.enc.Utf8.parse(JSON.stringify(header));
        const encodedHeader = this.base64URL(stringifiedHeader);
        const epoch = Math.floor(Date.now() / 1000);
        const payload = {
            'iat': epoch,
            'subscriber': ServiceConfig['Services']['AuthenticationUserName']
        };
        const stringifiedData = Crypto.enc.Utf8.parse(JSON.stringify(payload));
        const encodedData = this.base64URL(stringifiedData);
        const token = encodedHeader + '.' + encodedData;
        const secret = ServiceConfig['Services']['AuthenticationKey'];
        const signaturearray = Crypto.HmacSHA256(token, secret);
        const signature = this.base64URL(signaturearray);
        const signedToken = token + '.' + signature;
        return signedToken;
    }

    base64URL(source) {
        // encode in classical base64
        let encodedSource = Crypto.enc.Base64.stringify(source);
        // Remove padding equal characters
          encodedSource = encodedSource.replace(/=+$/, '');
        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');

        return encodedSource;
    }


}



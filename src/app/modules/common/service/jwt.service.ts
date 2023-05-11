import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    constructor() { }

    setToken(token: string) {
        localStorage.setItem("token", token);
    }

    getToken(): string | null {
        return localStorage.getItem("token");
    }

    removetoken() {
        localStorage.removeItem("token");
    }

    isLoggedIn(): boolean {
        let token = localStorage.getItem("token");
        return token != null && this.notExpired(token);
    }

    notExpired(token: string): boolean {
        let tokenDecoded = jwt_decode<any>(token);
        return (tokenDecoded.exp * 1000) > new Date().getTime();
    }

    checkRoleInToken(role: string): boolean {
        let token = localStorage.getItem("token");
        if (token != null) {
            let tokenDecoded = jwt_decode<any>(token);
            let roles = tokenDecoded.roles as Array<string>;
            return roles.indexOf(role) > -1;
        }
        return false;
    }
}

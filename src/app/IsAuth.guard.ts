import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})
export class IsAuthGuard implements CanActivate{

    constructor(private router: Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<boolean> {
            return new Observable((observer) =>{
                let token = localStorage.getItem('token');

                if (!token) {
                    observer.next(true);
                } else {
                    this.router.navigateByUrl('/');
                    observer.error(false);
                }
            });
        }

}
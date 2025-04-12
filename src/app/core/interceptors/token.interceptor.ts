import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRepositoryImpl } from '../../features/authorization/infrastructure/repositories/auth.repository.impl';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthRepositoryImpl) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
/*
    if (this.authService.isLoggedIn()) {
      return this.authService.refreshToken().pipe(
        switchMap(newToken => {
          const cloned = req.clone({
            setHeaders: { Authorization: `Bearer ${newToken}` }
          });
          return next.handle(cloned);
        })
      );
    }*/

    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next.handle(cloned);
  }
}
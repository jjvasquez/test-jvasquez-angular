import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRepositoryImpl } from '../../features/authorization/infrastructure/repositories/auth.repository.impl';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authRepository: AuthRepositoryImpl) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authRepository.getAccessToken();
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

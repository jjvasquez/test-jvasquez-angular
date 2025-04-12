import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter,withHashLocation  } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient,withInterceptors   } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CrudRepository } from './shared/crud/domain/repositories/crud.repository';
import { CrudRepositoryImpl } from './shared/crud/infraestructure/repositories/crud.repository.impl';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes,withHashLocation()), 
      provideHttpClient(), 
      provideAnimationsAsync(), 
      
      { provide: CrudRepository, useClass: CrudRepositoryImpl },
      JwtHelperService,
      { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
    ]
};



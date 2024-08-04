import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './core/ngrx/todo/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      // configure NgRx modules
      StoreModule.forRoot({
        todo: todoReducer,
      })
    ),
  ]
};

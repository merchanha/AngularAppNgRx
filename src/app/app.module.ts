import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

import { environment } from 'src/environments/environment';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(
      appReducers, 

      {
        runtimeChecks:{
          strictStateImmutability: false,
          strictActionImmutability: true, /* este es el cambio*/
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,

        }
      }

      ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
     
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

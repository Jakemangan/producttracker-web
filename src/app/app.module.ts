import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TrackerMainComponent } from './components/pages/tracker-main/tracker-main.component';
import { ProductTrackerComponent } from './components/pages/tracker-main/product-tracker/product-tracker.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddTrackerDialogComponent } from './components/pages/tracker-main/add-tracker-dialog/add-tracker-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/orphan-components/auth-button/login-button/login-button.component';
import { LogoutButtonComponent } from './components/orphan-components/auth-button/logout-button/logout-button.component';
import { AuthButtonComponent } from './components/orphan-components/auth-button/auth-button.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import {AuthResolver} from './services/auth.resolver';
import { NavBarComponent } from './components/orphan-components/nav-bar/nav-bar.component';
import { UserMenuComponent } from './components/orphan-components/auth-button/user-menu/user-menu.component'
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    TrackerMainComponent,
    ProductTrackerComponent,
    AddTrackerDialogComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthButtonComponent,
    AuthButtonComponent,
    NavBarComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [
          // `${env.apiBaseUrl}/tracker/*`,
          {
            uri: 'http://localhost:5050/tracker/*'
          },
          {
            uri: 'http://localhost:5050/user/*'
          }
        ]
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  }, AuthResolver],
  bootstrap: [AppComponent],
  entryComponents: [AddTrackerDialogComponent]
})
export class AppModule { }

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
import {environment, environment as env} from '../environments/environment';
import { LoginButtonComponent } from './components/orphan-components/auth-button/login-button/login-button.component';
import { LogoutButtonComponent } from './components/orphan-components/auth-button/logout-button/logout-button.component';
import { AuthButtonComponent } from './components/orphan-components/auth-button/auth-button.component';
import { NavBarComponent } from './components/orphan-components/nav-bar/nav-bar.component';
import { UserMenuComponent } from './components/orphan-components/auth-button/user-menu/user-menu.component'
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {MatTooltip, MatTooltipModule} from '@angular/material/tooltip';
import { AdminPanelComponent } from './components/pages/admin-panel/admin-panel.component';
import {ChartsModule} from 'ng2-charts';
import { TrackerChartComponent } from './components/pages/tracker-main/product-tracker/tracker-chart/tracker-chart.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AuthLoginComponent } from './components/orphan-components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/orphan-components/auth-signup/auth-signup.component';
import { AuthVerifyEmailComponent } from './components/orphan-components/auth-verify-email/auth-verify-email.component';
import {FirebaseAuthService} from './services/firebase-auth.service';
import { AuthForgotPasswordComponent } from './components/orphan-components/auth-forgot-password/auth-forgot-password.component';
import { TrackerDeleteDialogComponent } from './components/pages/tracker-main/product-tracker/tracker-delete-dialog/tracker-delete-dialog.component';
import { PasswordStrengthComponent } from './components/orphan-components/auth-signup/password-strength/password-strength.component';
import { FooterComponent } from './components/orphan-components/footer/footer.component';
import { TestProductComponent } from './components/pages/test-product/test-product.component';
import {ToastrModule} from 'ngx-toastr';
import { ActiveTrackerDisplayComponent } from './components/pages/tracker-main/active-tracker-display/active-tracker-display.component';
import { TrackerTableComponent } from './components/pages/tracker-main/tracker-table/tracker-table.component';
import { TrackerSettingsPanelComponent } from './components/pages/tracker-main/active-tracker-display/tracker-settings-panel/tracker-settings-panel.component';
import { SettingsRowComponent } from './components/pages/tracker-main/active-tracker-display/tracker-settings-panel/settings-row/settings-row.component';
import { StaticColourSettingsRowComponent } from './components/pages/tracker-main/active-tracker-display/tracker-settings-panel/static-colour-settings-row/static-colour-settings-row.component';
import {MatTableModule} from '@angular/material/table';

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
    UserMenuComponent,
    AdminPanelComponent,
    TrackerChartComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    AuthVerifyEmailComponent,
    AuthForgotPasswordComponent,
    TrackerDeleteDialogComponent,
    PasswordStrengthComponent,
    FooterComponent,
    TestProductComponent,
    ActiveTrackerDisplayComponent,
    TrackerTableComponent,
    TrackerSettingsPanelComponent,
    SettingsRowComponent,
    StaticColourSettingsRowComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
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
    MatTooltipModule,
    MatChipsModule,
    ChartsModule,
    NgApexchartsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    MatTableModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent],
  entryComponents: [AddTrackerDialogComponent]
})
export class AppModule { }

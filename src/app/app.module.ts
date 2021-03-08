import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackerMainComponent,
    ProductTrackerComponent,
    AddTrackerDialogComponent
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
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTrackerDialogComponent]
})
export class AppModule { }

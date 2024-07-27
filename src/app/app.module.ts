import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Approutingmodule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule,
    Approutingmodule,
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()],
})
export class AppModule {}

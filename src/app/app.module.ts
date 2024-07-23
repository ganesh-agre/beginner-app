import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, PassengerDashboardModule],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()],
})
export class AppModule {}

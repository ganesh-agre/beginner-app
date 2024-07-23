import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './componennts/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './componennts/passenger-details/passenger-details.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}

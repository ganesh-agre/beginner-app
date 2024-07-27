import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './componennts/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './componennts/passenger-details/passenger-details.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.compoenent';
import { passengerFormComponent } from './componennts/passenger-form/passenger-form.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerDashboardRoutingModule } from './passenger-dashboard-routing.module';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailsComponent,
    PassengerViewerComponent,
    passengerFormComponent,
  ],
  imports: [CommonModule, FormsModule, PassengerDashboardRoutingModule],
  exports: [PassengerDashboardComponent, PassengerViewerComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}

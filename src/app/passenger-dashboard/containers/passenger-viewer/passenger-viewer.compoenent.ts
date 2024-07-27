import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'passenger-viewer',
  template: ` <button (click)="goBack()">Go Back</button
    ><passenger-form
      [passenger]="passenger"
      (update)="handleUpdate($event)"
    ></passenger-form>`,
})
export class PassengerViewerComponent implements OnInit {
  passenger!: Passenger;
  constructor(
    private passengerDashboardService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((data: Params) => {
          return this.passengerDashboardService.getPassenger(data['id']);
        })
      )
      .subscribe((data) => (this.passenger = data));
  }

  handleUpdate(event: Passenger) {
    this.passengerDashboardService.updatePassenger(event).subscribe((data) => {
      this.passenger = data;
    });
  }

  goBack() {
    this.router.navigate(['passengers']);
  }
}

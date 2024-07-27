import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrl: './passenger-dashboard.component.scss',
  templateUrl: './passenger-dashboard.component.html',
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(
    private pessengerDashboardService: PassengerDashboardService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.pessengerDashboardService
      .getPassengers()
      .subscribe((passengers: Passenger[]) => {
        this.passengers = passengers;
      });
  }

  onEdit(editedPassenger: Passenger) {
    this.pessengerDashboardService
      .updatePassenger(editedPassenger)
      .subscribe((editedPassenger: Passenger) => {
        this.passengers = this.passengers.map((passenger) => {
          if (passenger.id == editedPassenger.id) {
            return { ...editedPassenger };
          }
          return passenger;
        });
      });
  }
  onRemove(passengerId: number) {
    this.pessengerDashboardService
      .deletePassenger(passengerId)
      .subscribe((deletedPassenger) => {
        this.passengers = this.passengers.filter(
          (passenger) => deletedPassenger.id !== passenger.id
        );
      });
  }

  onView(passengerId: number) {
    this.router.navigate(['passengers', passengerId]);
  }
}

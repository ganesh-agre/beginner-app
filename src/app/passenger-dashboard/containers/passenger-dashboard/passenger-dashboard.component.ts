import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrl: './passenger-dashboard.component.scss',
  templateUrl: './passenger-dashboard.component.html',
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  ngOnInit(): void {
    this.passengers = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null,
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }],
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
    ];
  }

  onEdit(editedPassenger: Passenger) {
    this.passengers = this.passengers.map((passenger) => {
      if (passenger.id == editedPassenger.id) {
        return { ...passenger, id: editedPassenger.id };
      }
      return passenger;
    });

    console.log(this.passengers);
  }
  onRemove(passengerId: number) {
    this.passengers = this.passengers.filter(
      (passenger) => passengerId !== passenger.id
    );
  }
}

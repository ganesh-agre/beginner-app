import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  styleUrl: 'passenger-count.component.scss',
  template: ` <div style="margin-bottom:10px">
    <h3>Airline Passengers</h3>
    Total Checked In:{{ checkedInPassengers() }}/{{ passengers.length }}
  </div>`,
})
export class PassengerCountComponent {
  @Input() passengers: Passenger[] = [];

  checkedInPassengers() {
    return this.passengers.filter((passenger) => passenger.checkedIn).length;
  }
}

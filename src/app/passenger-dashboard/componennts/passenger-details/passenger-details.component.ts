import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-details',
  styleUrl: 'passenger-details.component.scss',
  templateUrl: 'passenger-details.component.html',
})
export class PassengerDetailsComponent {
  @Input() passenger!: Passenger;
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  @Output() remove: EventEmitter<number> = new EventEmitter();
  isEditing: boolean = false;

  nameChange(event: any) {
    this.passenger.fullname = event.target.value;
  }
  handleEdit() {
    if (this.isEditing) {
      this.edit.emit(this.passenger);
    }
    this.isEditing = !this.isEditing;
  }

  handleRemove() {
    this.remove.emit(this.passenger.id);
  }
}

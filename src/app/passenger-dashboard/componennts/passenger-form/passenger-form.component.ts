import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger, Baggage } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrl: './passenger-form.component.scss',
  template: `
    <div>form! {{ passenger | json }}</div>
    <form
      (ngSubmit)="handleSubmit(form.form.value, form.form.valid)"
      #form="ngForm"
      novalidate
    >
      <div>
        Passenger Name:
        <input
          type="text"
          required
          #fullname="ngModel"
          name="fullname"
          [ngModel]="passenger.fullname"
        />
        <div
          *ngIf="fullname.errors?.['required'] && fullname.dirty"
          class="error"
        >
          this field is required
        </div>
      </div>
      <div>
        Passenger Id:
        <input type="text" name="id" [ngModel]="passenger.id" />
      </div>

      <div>
        <!--Yes:
        <input
          type="radio"
          name="checkedIn"
          [value]="true"
          [ngModel]="passenger.checkedIn"
        />
        No:
        <input
          type="radio"
          name="checkedIn"
          [value]="false"
          [ngModel]="passenger.checkedIn"
        />-->
        Checked In:
        <input
          type="checkbox"
          name="checkedIn"
          [ngModel]="passenger.checkedIn"
        />
      </div>
      <div *ngIf="form.value.checkedIn">
        Checked In Date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="passenger.checkInDate"
        />
      </div>
      <div>
        <!--<select name="baggage" [ngModel]="passenger.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.value === passenger.baggage"
          >
            {{ item.value }}
          </option>
        </select>-->

        <select name="baggage" [ngModel]="passenger.baggage">
          <option *ngFor="let item of baggage" [ngValue]="item.key">
            {{ item.value }}
          </option>
        </select>
      </div>

      <button type="submit" [disabled]="form.invalid">Update Passenger</button>
    </form>
  `,
})
export class passengerFormComponent {
  @Input() passenger!: Passenger;
  @Output() update = new EventEmitter<Passenger>();
  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage',
    },
    {
      key: 'hand-only',
      value: 'Hand baggage',
    },
    {
      key: 'hold-only',
      value: 'Hold baggage',
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage',
    },
  ];

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}

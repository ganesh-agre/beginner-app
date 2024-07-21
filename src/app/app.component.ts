import { Component } from '@angular/core';

interface Ichildren {
  name: string;
  age: number;
}
interface IPassenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Ichildren[] | null;
}
@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  passengers: IPassenger[] = [
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

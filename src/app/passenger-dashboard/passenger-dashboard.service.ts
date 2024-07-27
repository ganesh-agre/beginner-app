import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Passenger } from './models/passenger.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get<Passenger[]>(PASSENGER_API)
      .pipe(map((respone: Passenger[]) => respone));
  }

  getPassenger(passengerId: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${PASSENGER_API}/${passengerId}`)
      .pipe(map((respone: Passenger) => respone));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers };
    return this.http
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .pipe(map((respones: Passenger) => respones));
  }

  deletePassenger(passengerId: Passenger['id']): Observable<Passenger> {
    return this.http
      .delete<Passenger>(`${PASSENGER_API}/${passengerId}`)
      .pipe(map((respones: Passenger) => respones));
  }
}

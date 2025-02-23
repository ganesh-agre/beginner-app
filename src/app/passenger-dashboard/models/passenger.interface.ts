export interface Child {
  name: string;
  age: number;
}

export interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number | null;
  children: Child[] | null;
  baggage: string;
}

export interface Baggage {
  key: string;
  value: string;
}

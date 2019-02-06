'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy{
  openDays: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  getDowBooking():string {
    return this.openDays[Math.floor(Math.random() * 7)];
  };
  getCodeBooking():string {
    return 't';
  }

}

let test = new Reservation;
console.log(test.getDowBooking());
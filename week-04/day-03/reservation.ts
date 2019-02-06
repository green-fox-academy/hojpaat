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
    return Math.random().toString(36).replace('0.', '').substring(0, 8).toUpperCase();
  }

  reservation():void {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}

let test = new Reservation;

test.reservation();
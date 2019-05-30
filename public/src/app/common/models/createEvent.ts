import { Time } from '@angular/common';

export interface createEvent {
    user: string;
    name: string;
    date: Date;
    time: Time;
    address: string;
    city: string;
    zipcode: number;
}
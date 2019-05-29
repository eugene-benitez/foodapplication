import { Restaurant } from '../';
import { RSVP } from '../';
import { User } from '../';

export class Yumyum {
    _id: string;
    yumyum: string;
    date: Date;
    time: string;
    likes: number;
    plist: boolean;
    creator: User[];
    restaurant: Restaurant[];
    rsvp: RSVP[];
    
}

// post details 
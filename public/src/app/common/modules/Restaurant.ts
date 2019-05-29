import { Location } from '../';
import { Rating } from '../';
export class Restaurant {
    _id: string;
    name: string;
    location: Location[];
    description: string;
    cuisine: string;
    rating: Rating[];
    
}

// can be used for featured sponsored and actual restaurants
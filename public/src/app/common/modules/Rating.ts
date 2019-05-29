// import { User } from '../';

export class Rating {
    _id: string;
    name: string;  // could be a user from the API not necessairly a registered one 
    email: string; // could be a user from the API not necessairly a registered one 
    // user: User[]; 
    //what id registered one !!?? 
    rating: number;
    description: string;
}

// we could write a function in controllers to pull user information whether from API or User 
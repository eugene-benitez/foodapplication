import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { createEvent } from '../../models/createEvent';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  create: createEvent = {
    user: '',
    name: '',
    date: null,
    time: null,
    address: '',
    city: '',
    zipcode: null,
  }
  
  constructor(
    private router: Router,
    private http: HttpService,    
  ) { }

  ngOnInit() {
  }
  createEvent() {
    this.http.addObject(this.createEvent)
      .subscribe((data: createEvent) => this.create = data);

  }
}

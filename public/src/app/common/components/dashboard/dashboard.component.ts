import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { createEvent } from '../../models/createEvent';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  createForm: boolean = false;

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
  form() {
    this.createForm = true;

  }
  cancel() {
    this.createForm = false;
  }
  createEvent() {
    this.http.addObject(this.createEvent)
      .subscribe((data: createEvent) => this.create = data);

  }
}
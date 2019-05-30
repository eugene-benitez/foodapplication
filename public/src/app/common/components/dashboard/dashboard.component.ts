import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
<<<<<<< HEAD
import { createEvent } from '../../models/createEvent';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
=======
>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor(
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {
    this.checkLoggedIn();
    console.log(localStorage);
  }

  checkLoggedIn() {
    if (localStorage.length == 0) {
      this.router.navigateByUrl('');
    }


  }

>>>>>>> 185fe21df0bac2f2ea4fd2afaacc431db2d4fb6e
}

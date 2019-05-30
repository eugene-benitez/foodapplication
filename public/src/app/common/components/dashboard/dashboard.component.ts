import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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

}

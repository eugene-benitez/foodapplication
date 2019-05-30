import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  showComments: boolean = false;

  stateList = new Array("AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY");


  constructor(
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {

    this.checkIfLoggedIn();

  }


  checkIfLoggedIn() {
    if (localStorage.length < 1) {
      this.router.navigateByUrl('');
    } else {
      return console.log('You are logged in.');
    }

  }

  showAllComment() {
    if (this.showComments == false) {
      this.showComments = true;
      console.log(this.showAllComment)
    }

    else {
      this.showComments = false;
    }

  }

}

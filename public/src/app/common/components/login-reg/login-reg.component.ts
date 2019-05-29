import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { newUser } from '../models/newUser';
import { loginUser } from '../models/loginUser';

const bcrypt = require('bcrypt');

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  createUser: newUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  loginUser: loginUser = {
    email: '',
    password: '',
  }

  returnData: any;

  constructor(
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {
  }


  register() {
    console.log(this.createUser);
    bcrypt.hash(this.createUser.password, 10)
    this.http.register(this.createUser)
      .subscribe(data => this.returnData = data);
  }

  login() {
    console.log(this.loginUser);
    this.http.login(this.loginUser)
      .subscribe(data => {
        this.returnData = data;

        bcrypt.compare(this.loginUser.password, this.returnData.password)
          .then(result => {

            localStorage.setItem('userID', this.returnData._id.toString());

            console.log(localStorage);

            this.router.navigateByUrl('dashboard')


          })
          .catch(error => {
            return console.log("Invalid Login")
          })
      }
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { newUser } from '../../models/newUser';
import { loginUser } from '../../models/loginUser';
import { UserError } from '../../models/errorUser';


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

  UserError: UserError = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  loginError: any;

  returnData: any;

  constructor(
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {
    localStorage.clear();
  }


  register() {
    console.log(this.createUser);
    this.http.register(this.createUser)
      .subscribe(data => {

        this.UserError = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
        }

        if (!data['errors']) {
          this.router.navigateByUrl('');
        } else {
          for (let k in data['errors']) {
            this.UserError[k] = data['errors'][k]['message'];
          }
        }

      });
  }

  login() {
    console.log(this.loginUser);
    this.http.login(this.loginUser)
      .subscribe(data => {
        this.returnData = data;

        if (this.returnData.password) {
          console.log(data);
          console.log("Login success!")
          localStorage.setItem('user._id', this.returnData._id);
          console.log(localStorage);
          this.router.navigateByUrl('dashboard');
        }

        else {
          this.loginError = "Invalid Login."
          return console.log("Invalid Login");
        }
      }
      );
  }




}

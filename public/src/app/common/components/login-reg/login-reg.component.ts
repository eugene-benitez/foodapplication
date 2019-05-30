import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { newUser } from '../../models/newUser';
import { loginUser } from '../../models/loginUser';


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
    this.http.register(this.createUser)
      .subscribe(data => this.returnData = data);
  }

  login() {
    console.log(this.loginUser);
    this.http.login(this.loginUser)
      .subscribe(data => {
        this.returnData = data;

        console.log(data);

        if (data) {
          this.router.navigateByUrl('dashboard')
        }

        else {
          return;
        }
      }
      );
  }




}

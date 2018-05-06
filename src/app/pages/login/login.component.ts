import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validation = false;

  constructor(private router: Router,
              private appService: AppService) { }

  ngOnInit() {
  }

  loginUser(e) {

    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if (username == 'kalemerp' && password == '123456') {
      this.appService.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    } else {
      this.validation = true;
    }
  }

}

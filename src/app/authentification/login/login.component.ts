import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  existingUser = {
    email: '',
    password: ''
  } 

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login(this.existingUser.email, this.existingUser.password)
      .then(value => {
        console.log('vous êtes connecté', value);
      })
      .catch(error => console.error(error.message));
  }

}

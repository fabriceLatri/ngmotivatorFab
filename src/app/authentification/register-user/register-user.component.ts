import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  newUser: any = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.newUser.email , this.newUser.password)
      .then(createdUser => {
        console.log('user created: ', createdUser);
        // TODO: Faire un reset form.
      })
      .catch(error => console.error(error.message));
  }

}

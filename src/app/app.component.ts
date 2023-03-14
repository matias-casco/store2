import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { Auth } from './models/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  token = ''

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {

  }
  createUser() {
    this.usersService.create({
      name: 'Sebas',
      email: 'sebas@mail.com',
      password: '1212'
    })
    .subscribe(rta => {
      console.log(rta)
    });
  }
  login() {
    this.authService.login('sebas@mail.com','1212'
    )
    .subscribe((rta: Auth) => {
      this.token = rta.access_token;
    });
  }

}

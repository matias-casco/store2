import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { UsersService } from './services/users.service';
import { Auth } from './models/auth.model';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  token = '';
  imgRta = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private fileService: FilesService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    if(token) {
      this.authService.profile()
      .subscribe()
    }
  }

  createUser() {
    this.usersService.create({
      name: 'Jhon',
      email: 'john@mail.com',
      password: 'changeme',
      role: 'customer'
    })
    .subscribe(rta => {
      console.log(rta)
    });
  }

  login() {
    this.authService.login('john@mail.com','changeme'
    )
    .subscribe((rta: Auth) => {
      this.token = rta.access_token;
    });
  }

  downloadPdf() {
    this.fileService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.fileService.uploadFile(file)
      .subscribe(rta => {
      this.imgRta = rta.location
    })
    }

  }
}

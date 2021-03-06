import { Component } from '@angular/core';

import { UserService } from './api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public userTruc: UserService
  ) { }

  ngOnInit() {
    // check if we are logged in immediately
    this.userTruc.check()
      .catch((err) => {
        console.log("App login check error");
        console.log(err);
      });
  }

  logoutClick() {
    this.userTruc.logout()
      .catch((err) => {
        console.log("App LOGOUT error");
        console.log(err);
      });
  }
}

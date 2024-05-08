import { Component, OnInit } from "@angular/core";

import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  constructor(private readonly _authService: AuthService) {}

  public ngOnInit() {}

  public onClickLogin() {
    this._authService.login();
  }
}
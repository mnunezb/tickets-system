import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: boolean;

  constructor(private router: Router) {
    this.login = true;
  }

  ngOnInit() {
    if (this.login) {
      this.router.navigate(["/ticket-admin"]);
    }
  }
}

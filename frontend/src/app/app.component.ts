import { Component, OnInit, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnChanges {
  user;

  constructor(private router: Router, private authService: AuthService) {
  }
  ngOnChanges(){
    this.getUser();
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user = this.authService.getIdentity();
  }
}

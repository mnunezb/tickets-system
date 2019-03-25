import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { config } from "dotenv";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  login: boolean;

  constructor(private router: Router) {
    // config();
    this.login = true;
  }

  ngOnInit() {
    if (!this.login) {
      this.router.navigate(["/login"]);
    }
  }
}

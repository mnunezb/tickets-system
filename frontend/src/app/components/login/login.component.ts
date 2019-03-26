import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { User } from "../models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;

  constructor(private router: Router, private authService: AuthService) {
    this.username = "";
  }

  ngOnInit() {
    this.isLogged()
  }

  signUp(username: string) {
    this.authService.signup(username).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res["token"]);
        localStorage.setItem("user", JSON.stringify(res["user"]));

        this.router.navigate(["/ticket-admin"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  isLogged(){
    console.log(this.authService.getIdentity());
    if (this.authService.getIdentity()){
      this.router.navigate(['ticket-admin'])
    }
  }
}

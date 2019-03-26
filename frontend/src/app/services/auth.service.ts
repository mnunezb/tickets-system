import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GLOBAL } from "./global";
import { User } from "../components/models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public user;
  public token;
  public url: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  signup(username: string) {
    return this.http.post(`${GLOBAL.url}login`, {username});
  }

  getIdentity() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user != "undefined") {
      this.user = user;
    } else {
      this.user = null;
    }
    return this.user;
  }


  getToken() {
    let token = localStorage.getItem("token");
    if (token != "undefined") {
      this.token = token;
    } else {
      this.token = "null";
    }
    return this.token;
  }
}

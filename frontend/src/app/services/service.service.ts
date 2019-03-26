import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GLOBAL } from "./global";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getServices() {
    return this.http.get(`${GLOBAL.url}services`);
  }

  getUfValue() {
    return this.http.get(`${GLOBAL.url}uf-value`);
  }
}

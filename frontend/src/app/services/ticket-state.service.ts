import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GLOBAL } from "./global";

@Injectable({
  providedIn: "root"
})
export class TicketStateService {
  constructor(private http: HttpClient) {}

  getTicketSates() {
    return this.http.get(`${GLOBAL.url}ticket-states`);
  }
}

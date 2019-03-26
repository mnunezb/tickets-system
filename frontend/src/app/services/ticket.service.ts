import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GLOBAL } from "./global";
import { Ticket } from "../components/models/ticket";

@Injectable({
  providedIn: "root"
})
export class TicketService {
  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get(`${GLOBAL.url}tickets`);
  }

  getTicket(id: string) {
    return this.http.get(`${GLOBAL.url}ticket/${id}`);
  }

  saveTicket(services, technical?) {
    return this.http.post(`${GLOBAL.url}ticket`, { services, technical });
  }
}

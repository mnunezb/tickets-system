import { Component, OnInit } from "@angular/core";
import { TicketService } from "src/app/services/ticket.service";
import { Ticket } from "../models/ticket";

@Component({
  selector: "app-ticket-admin",
  templateUrl: "./ticket-admin.component.html",
  styleUrls: ["./ticket-admin.component.css"]
})
export class TicketAdminComponent implements OnInit {
  tickets: Ticket[];
  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    return this.getTickets();
  }

  getTickets() {
    this.ticketService.getTickets().subscribe(
      res => {
        this.tickets = res["tickets"];
        console.log(this.tickets);
      },
      error => {}
    );
  }

  sumUf(ticket: Ticket): number {
    let suma = 0;
    for (const key in ticket.services) {
      if (ticket.services.hasOwnProperty(key)) {
        console.log(ticket.services[key].UF);
        suma =suma +ticket.services[key].UF;
      }
    }
    return suma;
  }
}

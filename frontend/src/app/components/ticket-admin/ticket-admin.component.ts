import { Component, OnInit } from "@angular/core";
import { TicketService } from "src/app/services/ticket.service";
import { Ticket } from "../models/ticket";
import { Service } from "../models/service";
import { TicketStateService } from "src/app/services/ticket-state.service";
import { TicketState } from "../models/ticketState";
import { ServiceService } from "src/app/services/service.service";
import * as moment from "moment";

@Component({
  selector: "app-ticket-admin",
  templateUrl: "./ticket-admin.component.html",
  styleUrls: ["./ticket-admin.component.css"]
})
export class TicketAdminComponent implements OnInit {
  tickets: Ticket[];
  services: Service[];

  ticketStates: TicketState[];
  ticketSatate: TicketState;
  selectStateValue: string;
  clp: number;

  constructor(
    private ticketService: TicketService,
    private ticketSteteService: TicketStateService,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.getTickets();
    this.getTicketStetes();
    this.setCLP();
  }

  getTickets() {
    this.ticketService.getTickets().subscribe(
      res => {
        this.tickets = res["tickets"];
      },
      error => {}
    );
  }

  getTicket(id: string) {
    this.ticketService.getTicket(id).subscribe(
      res => {
        console.log(res["ticket"]["services"]);
        this.services = res["ticket"]["services"];
      },
      error => {}
    );
  }

  getTicketStetes() {
    this.ticketSteteService.getTicketSates().subscribe(
      res => {
        this.ticketStates = res["ticketStates"];
      },
      error => {}
    );
  }

  sumUf(ticket: Ticket): number {
    let suma = 0;
    for (const key in ticket.services) {
      if (ticket.services.hasOwnProperty(key)) {
        suma = suma + ticket.services[key].UF;
      }
    }
    return suma;
  }

  getSumUfValue(uf: number) {
    this.serviceService.getUfValue().subscribe(res => {
      return res["ufValue"];
    });
  }

  setCLP() {
    this.serviceService.getUfValue().subscribe(res => {
      this.clp = res["ufValue"];
    });
  }

  getUfCLP(uf: number): number {
    return Math.round(uf * this.clp);
  }

  setState(id: string) {
    this.selectStateValue = id;
  }

  stateSelected(id: string): boolean {
    console.log("object");
    if (id == this.selectStateValue) {
      console.log(id);
      console.log(this.selectStateValue);
      return true;
    }
    console.log(this.selectStateValue);
    return false;
  }

  parseDate(date: Date) {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
  }
}

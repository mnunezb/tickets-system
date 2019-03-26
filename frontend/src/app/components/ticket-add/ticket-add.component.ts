import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "../models/user";
import { Service } from "../models/service";
import { ServiceService } from "src/app/services/service.service";
import { TicketService } from "src/app/services/ticket.service";
import { Ticket } from "../models/ticket";

@Component({
  selector: "app-ticket-add",
  templateUrl: "./ticket-add.component.html",
  styleUrls: ["./ticket-add.component.css"]
})
export class TicketAddComponent implements OnInit {
  technical: string;
  technicals: User[];
  services: Service[];
  servicesCkecked: string[];
  clp: number;
  ticket: Ticket;

  constructor(
    private userService: UserService,
    private serviceService: ServiceService,
    private ticketService: TicketService
  ) {
    this.servicesCkecked = [];
    this.technical = "1";
  }

  ngOnInit() {
    this.getTechnicals();
    this.getServices();
    this.setValueCLP();
  }

  getTechnicals() {
    this.userService.getTechnicals().subscribe(res => {
      this.technicals = res["technicals"];
    });
  }

  getServices() {
    this.serviceService.getServices().subscribe(res => {
      this.services = res["services"];
    });
  }

  setValueCLP() {
    this.serviceService.getUfValue().subscribe(res => {
      this.clp = res["ufValue"];
    });
  }
  valueCLPTotal(uf: number): number {
    return Math.round(this.clp * uf);
  }
  onCheckChange(event) {
    // var a
    if (event.target.checked) {
      this.servicesCkecked.push(event.target.value);
      // console.log(object);
    }
    if (!event.target.checked) {
      for (const key in this.servicesCkecked) {
        if (this.servicesCkecked.hasOwnProperty(key)) {
          if (event.target.value == this.servicesCkecked[key])
            this.servicesCkecked.splice(parseInt(key));
          return this.servicesCkecked;
        }
      }
    }
  }

  clickSave() {
    if (!this.servicesCkecked.length) {
      return console.log("No hay Servicios agregados");
    }
    console.log(this.servicesCkecked);
    console.log(this.technical);

    if (this.technical == "1") this.technical = null;

    this.ticketService.saveTicket(this.services, this.technical).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}

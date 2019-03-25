import { Service } from "./service";
import { TicketState } from "./ticketState";
import { User } from "./user";

export interface Ticket {
  _id?: string;
  services: Service[];
  state?: TicketState;
  technical?: User;
  createdAt?: Date;
  updateAt?: Date;
  createdBy: User;
  updateBy: User;
}

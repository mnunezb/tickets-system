import { Request, Response } from "express";
import TicketModel, { Ticket } from "../models/ticket";

class TicketController {
  constructor() {}

  public async getTickets(req: Request, res: Response) {
    try {
      const tickets = await TicketModel.find();
      res.json({ tickets });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async saveTicket(req: Request, res: Response) {
    let ticket: Ticket = req.body;

    ticket.state = "5c9680f88fbd574384728f2b";
    ticket.createdAt = new Date();
    ticket.updatedAt = new Date();
    ticket.createdBy = "5c968511710e023ec0fd30d1";
    ticket.updatedBy = "5c968511710e023ec0fd30d1";
    try {
      let ticketBD = new TicketModel(ticket);
      ticketBD.save();
      return res.json({ ticketBD });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export const ticketController = new TicketController();

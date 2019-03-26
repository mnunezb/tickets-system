import { Request, Response } from "express";
import TicketModel, { Ticket } from "../models/ticket";
import { Auth } from "../libs/jwt";

class TicketController {
  constructor() {}

  public async getTickets(req: Request, res: Response) {
    try {
      const tickets = await TicketModel.find()
        .populate({ path: "state" })
        .populate({ path: "services" })
        .populate({ path: "technical" })
        .populate({ path: "createdBy" })
        .populate({ path: "updatedBy" })
        .sort([['updatedAt', 'descending']]);

      res.json({ tickets });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async getTicket(req: Request, res: Response) {

    console.log(req.headers.authorization);

    console.log(Auth.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBlcGUiLCJuYW1lIjoiUGVwZSIsImxhc3ROYW1lIjoiUMOpcmV6IiwidXNlclJvbGUiOiI1Yzk2ODMyMjgyZjMwYTBkNThlYzM0OWMiLCJpYXQiOjE1NTMzOTU3ODMsImV4cCI6MTU1NTk4Nzc4M30.URSXjGG6eo7s6glp4QM630A5uyQdToCMa550yGnCCFM'));
    try {
      const id = req.params.id;
      const ticket = await TicketModel.findById(id)
        .populate({ path: "state" })
        .populate({ path: "services" })
        .populate({ path: "technical" })
        .populate({ path: "createdBy" })
        .populate({ path: "updatedBy" });

      res.json({ ticket });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async saveTicket(req: Request, res: Response) {
    let ticket: Ticket = req.body;

    //Created in  state PENDING
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

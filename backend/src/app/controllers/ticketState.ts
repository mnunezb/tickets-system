import { Request, Response } from "express";
import TicketStateModel, { TicketState } from "../models/ticketState";

class TicketStateController {
  public async getTicketStates(req: Request, res: Response) {
    try {
      const ticketStates = await TicketStateModel.find();
      res.json({ ticketStates });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async saveTicketState(req: Request, res: Response) {
    let ticketState: TicketState = req.body;
    try {
      const ticketStateBD = await new TicketStateModel(ticketState);
      ticketStateBD.save();
      res.json({ ticketStateBD });
    } catch (error) {}
  }
}

export const ticketStateController = new TicketStateController();

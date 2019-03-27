import { Request, Response } from 'express';
import ticketState, { TicketState } from '../models/ticketState';

class TicketStateController {
  public async getTicketStates(req: Request, res: Response) {
    try {
      const ticketStatesDB = await ticketState.find();
      res.json({ ticketStatesDB });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async saveTicketState(req: Request, res: Response) {
    const ticketStateInput: TicketState = req.body;
    try {
      const ticketStateBD = await new ticketState(ticketStateInput);
      ticketStateBD.save();
      res.json({ ticketStateBD });
    } catch (error) {}
  }
}

export const ticketStateController = new TicketStateController();

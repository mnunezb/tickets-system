import { Request, Response } from 'express';
import { Auth } from '../libs/jwt';
import ticket, { Ticket } from '../models/ticket';

class TicketController {
  constructor() {}

  public async getTickets(req: Request, res: Response) {
    try {
      const ticketsDB = await ticket
        .find()
        .populate({ path: 'state' })
        .populate({ path: 'services' })
        .populate({ path: 'technical' })
        .populate({ path: 'createdBy' })
        .populate({ path: 'updatedBy' })
        .sort([['updatedAt', 'descending']]);

      res.json({ ticketsDB });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async getTicket(req: Request, res: Response) {
    console.log(req.headers.authorization);

    console.log(
      Auth.decode(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
          'eyJ1c2VybmFtZSI6IlBlcGUiLCJuYW1lIjoiU' +
          'GVwZSIsImxhc3ROYW1lIjoiUMOpcmV6IiwidX' +
          'NlclJvbGUiOiI1Yzk2ODMyMjgyZjMwYTBkNTh' +
          'lYzM0OWMiLCJpYXQiOjE1NTMzOTU3ODMsImV4' +
          'cCI6MTU1NTk4Nzc4M30.URSXjGG6eo7s6glp4' +
          'QM630A5uyQdToCMa550yGnCCFM',
      ),
    );
    try {
      const id = req.params.id;
      const ticketDB = await ticket
        .findById(id)
        .populate({ path: 'state' })
        .populate({ path: 'services' })
        .populate({ path: 'technical' })
        .populate({ path: 'createdBy' })
        .populate({ path: 'updatedBy' });

      res.json({ ticketDB });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async saveTicket(req: Request, res: Response) {
    const ticketInput: Ticket = req.body;

    // Created in  state PENDING
    ticketInput.state = '5c9680f88fbd574384728f2b';
    ticketInput.createdAt = new Date();
    ticketInput.updatedAt = new Date();

    ticketInput.createdBy = '5c968511710e023ec0fd30d1';
    ticketInput.updatedBy = '5c968511710e023ec0fd30d1';
    try {
      const ticketBD = new ticket(ticketInput);
      ticketBD.save();
      return res.json({ ticketBD });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export const ticketController = new TicketController();

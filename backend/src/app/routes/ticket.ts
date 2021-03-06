import { Router } from 'express';
import { ticketController } from '../controllers/ticket';

class TicketRoutes {
  public router: Router = Router();

  constructor () {
    this.config();
  }

  public config (): void {
    this.router.get('/tickets', ticketController.getTickets);
    this.router.get('/ticket/:id', ticketController.getTicket);
    this.router.post('/ticket', ticketController.saveTicket);
  }
}

const ticketRoutes = new TicketRoutes();
export default ticketRoutes.router;

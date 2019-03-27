import { Router } from 'express';
import { ticketStateController } from '../controllers/ticketState';

class TicketStateRoutes {
  public router: Router = Router();

  constructor () {
    this.config();
  }

  public config (): void {
    this.router.get('/ticket-states', ticketStateController.getTicketStates);
    this.router.post('/ticket-state', ticketStateController.saveTicketState);
  }
}

const ticketStateRoutes = new TicketStateRoutes();
export default ticketStateRoutes.router;

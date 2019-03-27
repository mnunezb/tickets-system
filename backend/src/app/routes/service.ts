import { Router } from 'express';
import { serviceController } from '../controllers/service';

class ServiceRoutes {
  public router: Router = Router();

  constructor () {
    this.config();
  }

  public config (): void {
    this.router.get('/services', serviceController.getServices);
    this.router.get('/uf-value', serviceController.getUfValue);
    this.router.post('/service', serviceController.saveService);
  }
}

const serviceRoutes = new ServiceRoutes();
export default serviceRoutes.router;

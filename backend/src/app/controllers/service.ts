import { Request, Response } from 'express';
import { UFConverter } from '../libs/uf';
import service, { Service } from '../models/service';

class ServiceController {
  public async getServices (req: Request, res: Response) {
    try {
      const services = await service.find()
        .populate({
          path: 'serviceType',
        })
        .sort('serviceType');
      res.json({ services });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async saveService (req: Request, res: Response) {
    const serviceInput: Service = req.body;
    try {
      const serviceBD = await new service(serviceInput);
      serviceBD.save();
      res.json({ serviceBD });
    } catch (error) {}
  }

  public async getUfValue (req: Request, res: Response) {
    try {
      const ufValue = await UFConverter.getUFValueToday();
      res.json({ ufValue });
    } catch (error) {}
  }
}

export const serviceController = new ServiceController();

import { Request, Response } from 'express';
import serviceType, { ServiceType } from '../models/serviceType';

class ServiceTypeController {
  public async getServiceTypes(req: Request, res: Response) {
    try {
      const serviceTypesDB = await serviceType.find();
      res.json({ serviceTypesDB });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async saveServiceType(req: Request, res: Response) {
    const serviceTypeInput: ServiceType = req.body;
    try {
      const serviceTypeBD = await new serviceType(serviceTypeInput);
      serviceTypeBD.save();
      res.json({ serviceTypeBD });
    } catch (error) {}
  }
}

export const serviceTypeController = new ServiceTypeController();

import { Request, Response } from "express";
import ServiceTypeModel, { ServiceType } from "../models/serviceType";

class ServiceTypeController {
  public async getServiceTypes(req: Request, res: Response) {
    try {
      const serviceTypes = await ServiceTypeModel.find();
      res.json({ serviceTypes });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async saveServiceType(req: Request, res: Response) {
    let serviceType: ServiceType = req.body;
    try {
      const serviceTypeBD = await new ServiceTypeModel(serviceType);
      serviceTypeBD.save();
      res.json({ serviceTypeBD });
    } catch (error) {}
  }
}

export const serviceTypeController = new ServiceTypeController();

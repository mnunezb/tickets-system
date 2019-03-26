import { Request, Response } from "express";
import ServiceModel, { Service } from "../models/service";
import { UFConverter } from "../libs/uf";

class ServiceController {
  public async getServices(req: Request, res: Response) {
    try {
      const services = await ServiceModel.find().populate({
        path: "serviceType"
      }).sort('serviceType');
      res.json({ services });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async saveService(req: Request, res: Response) {
    let service: Service = req.body;
    try {
      const serviceBD = await new ServiceModel(service);
      serviceBD.save();
      res.json({ serviceBD });
    } catch (error) {}
  }

  public async getUfValue(req: Request, res: Response) {
    try {
      const ufValue = await UFConverter.getUFValueToday();
      res.json({ ufValue });
    } catch (error) {}
  }
}

export const serviceController = new ServiceController();

import { ServiceType } from "./serviceType";
export interface Service {
  _id?: string;
  name: string;
  UF: number;
  serviceType?: ServiceType;
}

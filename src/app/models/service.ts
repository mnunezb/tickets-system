import { Schema, model, Document } from "mongoose";
import { ServiceType } from "./serviceType";

export interface Service extends Document {
  name: string;
  UF: number;
  serviceType: ServiceType;
}

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"]
  },
  UF: {
    type: Number,
    required: [true, "The UF is required"]
  },
  serviceType: {
    type: Schema.Types.ObjectId,
    ref: "Service_Type"
  }
});

export default model<Service>("Service", ServiceSchema);

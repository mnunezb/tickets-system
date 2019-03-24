import { Schema, model, Document } from "mongoose";

export interface ServiceType extends Document {
  name: string;
}

const ServiceTypeSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"]
  }
});

export default model<ServiceType>("Service_Type", ServiceTypeSchema);

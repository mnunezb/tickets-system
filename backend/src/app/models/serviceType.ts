import { Document, model, Schema } from 'mongoose';

export interface ServiceType extends Document {
  name: string;
}

const serviceTypeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
});

export default model<ServiceType>('Service_Type', serviceTypeSchema);

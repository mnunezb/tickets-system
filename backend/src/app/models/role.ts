import { Document, model, Schema } from 'mongoose';

export interface Role extends Document {
  name: string;
}

const roleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
});

export default model<Role>('Role', roleSchema);

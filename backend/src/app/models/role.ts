import { Schema, model, Document } from "mongoose";

export interface Role extends Document {
  name: string;
}

const RoleSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"]
  }
});

export default model<Role>("Role", RoleSchema);

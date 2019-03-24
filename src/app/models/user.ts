import { Schema, model, Document } from "mongoose";
import { Role } from "./role";

export interface User extends Document {
  username: string;
  name: string;
  lastName: string;
  userRole: Role;
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "The username is required"]
  },
  name: {
    type: String,
    required: [true, "The name is required"]
  },
  lastName: {
    type: String,
    required: [true, "The last name is required"]
  },
  userRole: {
    type: Schema.Types.ObjectId,
    ref: "Role"
  }
});

export default model<User>("User", UserSchema);

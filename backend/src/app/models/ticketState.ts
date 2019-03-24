import { Schema, model, Document } from "mongoose";

export interface TicketState extends Document {
  name: string;
}

const TicketStateSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"]
  }
});

export default model<TicketState>("Ticket_State", TicketStateSchema);

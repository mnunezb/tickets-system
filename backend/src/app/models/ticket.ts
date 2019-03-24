import { Schema, model, Document } from "mongoose";

export interface Ticket extends Document {
  services: string[];
  state: string;
  technical: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

const TicketSchema = new Schema({
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service"
    }
  ],
  state: {
    type: Schema.Types.ObjectId,
    ref: "Ticket_State"
  },
  technical: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export default model<Ticket>("Ticket", TicketSchema);

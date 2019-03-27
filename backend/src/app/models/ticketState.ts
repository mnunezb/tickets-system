import { Document, model, Schema } from 'mongoose';

export interface TicketState extends Document {
  name: string;
}

const ticketStateSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
});

export default model<TicketState>('Ticket_State', ticketStateSchema);

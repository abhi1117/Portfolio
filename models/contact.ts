import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema: Schema = new Schema({
  name: {
    type: String,
    required: false,
    unique: false,
  },
  email: {
    type: String,
    required: false,
    unique: false,
  },
  message: {
    type: String,
    required: false,
    unique: false,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;

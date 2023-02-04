import { Document, ObjectId, Schema, model } from "mongoose";

export interface ValueDocument extends Document {
  roster: string;
  value: number;
  currency: string;
  categorie: string;
  description: string;
  createdBy: ObjectId;
  createdAt: Date;
  updateAt?: Date;
};

const ValueSchema = new Schema({
  roster: {
    type: String,
    ref: 'Roster',
  },
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    enum: ['USD', 'COL'],
    default: 'USD',
  },
  categorie: {
    type: String,
    ref: 'Categorie',
  },
  description: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Value = model<ValueDocument>('Value', ValueSchema);

export default Value;

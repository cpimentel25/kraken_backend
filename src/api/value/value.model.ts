import { ObjectId, Schema, model } from "mongoose";

export interface ValueDocument extends Document {
  value: number;
  currency: string;
  categorie: string;
  createdBy: ObjectId; // -> string to ObjectId
  createdAt: Date;
  updateAt: Date;
  guest: string;
};

const ValueSchema = new Schema({
  value: [{
    type: Number,
    required: true,
  }],
  currency: {
    type: String,
    enum: ['USD', 'COL'],
    default: 'USD',
  },
  categorie: {
    type: String,
    ref: 'Categorie',
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Value = model('Value', ValueSchema);

export default Value;
